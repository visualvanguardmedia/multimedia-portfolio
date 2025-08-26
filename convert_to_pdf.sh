#!/bin/bash

# Function to convert markdown to PDF using available tools
convert_md_to_pdf() {
    local input_file="$1"
    local output_file="${input_file%.md}.pdf"
    
    echo "Converting $input_file to $output_file..."
    
    # Try using pandoc with html output and then system print to pdf
    if command -v pandoc >/dev/null 2>&1; then
        # Create a styled HTML version
        pandoc "$input_file" -o "${input_file%.md}.html" --standalone --css=<(cat <<'EOF'
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; }
h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
h2 { color: #34495e; margin-top: 30px; }
h3 { color: #7f8c8d; }
.header-info { background: #ecf0f1; padding: 15px; border-radius: 5px; margin: 20px 0; }
strong { color: #2980b9; }
ul li { margin-bottom: 5px; }
blockquote { border-left: 4px solid #3498db; margin: 20px 0; padding-left: 15px; font-style: italic; }
EOF
) && echo "HTML version created: ${input_file%.md}.html"
        
        # If running on macOS, we can use the system print functionality
        if [[ "$OSTYPE" == "darwin"* ]]; then
            echo "On macOS, you can print the HTML file to PDF using Safari or Chrome"
            echo "Opening ${input_file%.md}.html for manual PDF conversion..."
            open "${input_file%.md}.html"
        fi
    else
        echo "Pandoc not found. Please install pandoc first."
        return 1
    fi
}

# Convert all markdown resume and cover letter files
for file in Jim_Elli_Resume_*.md Jim_Elli_Cover_Letter_*.md; do
    if [[ -f "$file" ]]; then
        convert_md_to_pdf "$file"
    fi
done

echo ""
echo "Conversion complete! HTML files have been created."
echo "On macOS, you can:"
echo "1. Open the HTML files in Safari or Chrome"
echo "2. Use Cmd+P to print"
echo "3. Choose 'Save as PDF' as the destination"
echo "4. This will give you professional-looking PDF versions"
