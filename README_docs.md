# Document Formatting & PDF Generation

This directory contains improved, consistently formatted resume and cover letter documents using professional typography and clean bullet points.

## 📋 Available Documents

### Resume Files (Markdown)
- `Jim_Elli_Resume_Executive_Summary.md` - General multimedia/editor focused resume
- `Jim_Elli_Resume_FundraiseUp_Traditional.md` - Tailored for FundraiseUp position
- `Jim_Elli_Resume_Traditional_Format.md` - General cinematographer resume
- `Jim_Elli_Resume_Filmless_Cinematographer.md` - Tailored for Filmless position

### Cover Letters (Markdown)
- `Jim_Elli_Cover_Letter_Filmless.md` - Filmless cinematographer application

## 🎨 Formatting Improvements

### What Was Changed:
✅ **Replaced dash bullets (-) with proper typographic bullets (•)**  
✅ **Unified contact information** into single clean line with separators  
✅ **Bold section headers** with consistent H2 formatting (`## **Section Name**`)  
✅ **Enhanced typography** using en dashes (–) for ranges, em dashes (—) for breaks  
✅ **Improved spacing** with single blank lines between sections  
✅ **Consistent bolding** for metrics, tools, and key terms  

### Before & After Example:
```
# Before
CONTACT
Portfolio: https://multimedia-portfolio.netlify.app/
Email: jim@visualvanguardmedia.com
Phone: 952-270-5165

CORE EXPERTISE
- Primary Platform: DaVinci Resolve
- Brand-consistent motion graphics

# After  
# JIM ELLI
**Multimedia Creator/Editor & Video Production Specialist**
Portfolio: https://multimedia-portfolio.netlify.app/ | Email: jim@visualvanguardmedia.com | Phone: 952-270-5165

## **Core Expertise**
• **Primary Platform:** DaVinci Resolve (editing, Fusion graphics, color grading, audio)  
• **Brand-consistent motion graphics:** lower thirds, transitions, logo animations
```

## 📄 PDF Generation

### Quick Setup
```bash
# Option 1: Use Chrome/Safari (Easiest - no installation needed)
npm run build:pdfs  # Creates HTML files, then print to PDF manually

# Option 2: Install LaTeX for automated PDF generation
brew install --cask mactex      # Full LaTeX (large download, best quality)
npm run build:pdfs              # Creates PDFs automatically
```

### Generated Files Location
All files are created in `dist/pdfs/` directory:
- `Jim_Elli_Resume_Executive_Summary.html` / `.pdf`
- `Jim_Elli_Resume_FundraiseUp_Traditional.html` / `.pdf`
- `Jim_Elli_Resume_Traditional_Format.html` / `.pdf`
- `Jim_Elli_Resume_Filmless_Cinematographer.html` / `.pdf`
- `Jim_Elli_Cover_Letter_Filmless.html` / `.pdf`

### Chrome/Safari Method (Recommended)
1. Run `npm run build:pdfs` to create styled HTML files
2. Open each HTML file in Chrome or Safari
3. Print to PDF (Cmd+P → Save as PDF)
4. Professional formatting with perfect typography

### Alternative PDF Generation
If you have LaTeX installed, direct PDF generation works:
```bash
# Basic conversion
pandoc "Jim_Elli_Resume_Executive_Summary.md" -o "resume.pdf" --pdf-engine=pdflatex

# With custom styling  
pandoc "filename.md" -o "output.pdf" --pdf-engine=pdflatex --variable geometry:margin=0.75in --variable fontsize=11pt
```

## 🔧 Document Editing Guidelines

When updating documents, maintain consistency:

### Section Headers
```markdown
## **Professional Summary**
## **Core Expertise** 
## **Technical Skills**
```

### Contact Information
```markdown  
# JIM ELLI
**Job Title Here**
Portfolio: URL | Email: address | Phone: number | Location: City, ST
```

### Bullet Points
- Use `• ` (bullet + space) for all list items
- Bold key terms: `• **Primary Platform:** DaVinci Resolve`
- Use consistent indentation for nested items

### Key Metrics & Terms
- Always bold numbers: `**10+ years**`, `**150+ projects**`, `**4.9/5 rating**`
- Bold software names on first mention: `**DaVinci Resolve**`
- Bold company names: `**MintPress News**`, `**Visual Vanguard Media**`

### Dates & Ranges
- Use en dashes: `2020 – Present`
- Consistent location format: `Saint Paul, MN`

## 📁 File Structure
```
/
├── Jim_Elli_Resume_*.md           # Source markdown files
├── Jim_Elli_Cover_Letter_*.md     # Source cover letters  
├── docs/
│   ├── scripts/build-pdfs.js      # PDF generation script
│   └── pandoc/pandoc.yaml         # Pandoc configuration
├── dist/pdfs/                     # Generated PDF output
└── _backup_before_formatting/     # Original files backup
```

## 🚀 Quick Commands

```bash
# Generate all PDFs
node docs/scripts/build-pdfs.js

# Generate single PDF
pandoc "filename.md" -o "output.pdf" --variable geometry:margin=0.75in

# Check document consistency 
grep -n "^- " *.md  # Should return no dash bullets
grep -n "^•" *.md   # Should show all proper bullets
```

## 💡 Tips

- **ATS-Friendly**: Markdown source uses ASCII characters for maximum compatibility
- **PDF Output**: Renders with proper typography including smart quotes and clean bullets  
- **Version Control**: Keep `.md` files in git; regenerate PDFs as needed
- **Customization**: Adjust `docs/pandoc/pandoc.yaml` for different styling options

The improved formatting enhances readability and professionalism while maintaining full ATS compatibility in the source documents.
