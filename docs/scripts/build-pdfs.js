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

MARKDOWN_FILES.forEach(file => {
  const inputPath = file;
  const outputPath = join(OUTPUT_DIR, file.replace('.md', '.pdf'));
  
  try {
    console.log(`📄 Converting ${file}...`);
    
    // Simple pandoc command - you may need to adjust engine based on your setup
    const command = `pandoc "${inputPath}" -o "${outputPath}" --variable geometry:margin=0.75in --variable fontsize=11pt`;
    
    execSync(command, { stdio: 'pipe' });
    console.log(`✅ Successfully created ${outputPath}`);
    successful++;
    
  } catch (buildError) {
    const errorMessage = buildError instanceof Error ? buildError.message : 'Unknown error';
    console.error(`❌ Failed to convert ${file}: ${errorMessage}`);
    console.error('   You may need to install a PDF engine like wkhtmltopdf or pdflatex');
    failed++;
  }
});

console.log(`\n📋 Summary: ${successful} successful, ${failed} failed`);

if (failed > 0) {
  console.log('\n💡 To install PDF engines:');
  console.log('   brew install wkhtmltopdf  # For wkhtmltopdf engine');
  console.log('   brew install --cask mactex  # For pdflatex engine (large download)');
}
