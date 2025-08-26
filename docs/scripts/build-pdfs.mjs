#!/usr/bin/env node

import { execSync } from 'child_process';
import { join } from 'path';

const MARKDOWN_FILES = [
  'Jim_Elli_Resume_Executive_Summary.md',
  'Jim_Elli_Resume_FundraiseUp_Traditional.md', 
  'Jim_Elli_Resume_Traditional_Format.md',
  'Jim_Elli_Resume_Filmless_Cinematographer.md',
  'Jim_Elli_Cover_Letter_Filmless.md'
];

const OUTPUT_DIR = 'dist/pdfs';

console.log('🔄 Building PDFs from markdown files...');

// Check if pandoc is available
try {
  execSync('which pandoc', { stdio: 'ignore' });
} catch {
  console.error('❌ Pandoc is not installed. Please install pandoc first:');
  console.error('   brew install pandoc  # macOS');
  console.error('   sudo apt-get install pandoc  # Ubuntu/Debian');
  console.error('   Or download from: https://pandoc.org/installing.html');
  process.exit(1);
}

// Create output directory if it doesn't exist
try {
  execSync(`mkdir -p ${OUTPUT_DIR}`, { stdio: 'ignore' });
} catch {
  console.error('❌ Failed to create output directory');
  process.exit(1);
}

let successful = 0;
let failed = 0;

// Try different PDF engines in order of preference
function getPdfEngine() {
  const engines = [
    { name: 'Chrome/Chromium (via HTML)', cmd: 'google-chrome-stable --version || chromium --version || /Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --version', pandocFlag: null },
    { name: 'LaTeX (pdflatex)', cmd: 'pdflatex --version', pandocFlag: '--pdf-engine=pdflatex' },
    { name: 'XeLaTeX', cmd: 'xelatex --version', pandocFlag: '--pdf-engine=xelatex' }
  ];
  
  for (const engine of engines) {
    try {
      execSync(engine.cmd, { stdio: 'ignore' });
      return engine;
    } catch {
      // Engine not available, try next
    }
  }
  
  return null;
}

const pdfEngine = getPdfEngine();

if (!pdfEngine) {
  console.error('❌ No PDF engine found. Please install one of:');
  console.error('   • Chrome/Chromium (recommended for best results)');
  console.error('   • LaTeX: brew install --cask mactex');
  console.error('   • Or use online conversion tools');
  process.exit(1);
}

console.log(`📖 Using PDF engine: ${pdfEngine.name}`);

MARKDOWN_FILES.forEach(file => {
  const inputPath = file;
  const outputPath = join(OUTPUT_DIR, file.replace('.md', '.pdf'));
  
  try {
    console.log(`📄 Converting ${file}...`);
    
    let command;
    if (pdfEngine.pandocFlag) {
      // Use LaTeX engine
      command = `pandoc "${inputPath}" -o "${outputPath}" ${pdfEngine.pandocFlag} --variable geometry:margin=0.75in --variable fontsize=11pt`;
    } else {
      // Use HTML intermediate with system print (Chrome/Safari)
      const htmlPath = join(OUTPUT_DIR, file.replace('.md', '.html'));
      
      // First convert to HTML with good styling
      const htmlCommand = `pandoc "${inputPath}" -o "${htmlPath}" --standalone --css=docs/templates/resume.css`;
      execSync(htmlCommand, { stdio: 'pipe' });
      
      // Then use system print to PDF (requires manual conversion or Chrome headless)
      console.log(`   → HTML created: ${htmlPath}`);
      console.log(`   → To create PDF: Open ${htmlPath} in Chrome and Print to PDF`);
      successful++;
      return; // Skip direct PDF creation for HTML method
    }
    
    execSync(command, { stdio: 'pipe' });
    console.log(`✅ Successfully created ${outputPath}`);
    successful++;
    
  } catch (buildError) {
    const errorMessage = buildError instanceof Error ? buildError.message : 'Unknown error';
    console.error(`❌ Failed to convert ${file}: ${errorMessage}`);
    console.error(`   Engine used: ${pdfEngine.name}`);
    failed++;
  }
});

console.log(`\n📋 Summary: ${successful} successful, ${failed} failed`);

if (failed > 0) {
  console.log('\n💡 Installation options:');
  console.log('   brew install --cask mactex     # Full LaTeX (large download, best quality)');
  console.log('   # Chrome is usually pre-installed on macOS');
}
