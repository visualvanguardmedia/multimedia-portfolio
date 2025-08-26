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
# Install PDF engine (choose one):
brew install wkhtmltopdf        # Recommended for most users
brew install --cask mactex      # Full LaTeX (large download, more features)

# Generate PDFs:
node docs/scripts/build-pdfs.js
```

### Generated PDFs Location
All PDFs are created in `dist/pdfs/` directory:
- `Jim_Elli_Resume_Executive_Summary.pdf`
- `Jim_Elli_Resume_FundraiseUp_Traditional.pdf`
- `Jim_Elli_Resume_Traditional_Format.pdf`
- `Jim_Elli_Resume_Filmless_Cinematographer.pdf`
- `Jim_Elli_Cover_Letter_Filmless.pdf`

### Alternative PDF Generation
If the script fails, you can generate individual PDFs:
```bash
# Basic conversion
pandoc "Jim_Elli_Resume_Executive_Summary.md" -o "resume.pdf" --variable geometry:margin=0.75in

# With custom styling  
pandoc "filename.md" -o "output.pdf" --variable geometry:margin=0.75in --variable fontsize=11pt --variable linestretch=1.15
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
