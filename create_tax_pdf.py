#!/usr/bin/env python3
"""
Convert Minnesota Sales Tax Return to PDF format for virtual signing
"""

from reportlab.lib.pagesizes import letter, A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.pdfgen import canvas
import os

def create_tax_return_pdf():
    """Create a professional PDF of the Minnesota Sales Tax Return"""
    
    # Set up the document
    filename = "/Users/visualvanguard/multimedia-portfolio/MN_Sales_Tax_Return_July_2025.pdf"
    doc = SimpleDocTemplate(filename, pagesize=letter,
                          rightMargin=72, leftMargin=72,
                          topMargin=72, bottomMargin=18)
    
    # Create styles
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=16,
        textColor=colors.black,
        spaceAfter=20,
        alignment=1  # Center alignment
    )
    
    header_style = ParagraphStyle(
        'CustomHeader',
        parent=styles['Heading2'],
        fontSize=12,
        textColor=colors.black,
        spaceAfter=12,
        spaceBefore=12
    )
    
    normal_style = ParagraphStyle(
        'CustomNormal',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.black,
        spaceAfter=6
    )
    
    # Build the document content
    story = []
    
    # Title and Form Number
    story.append(Paragraph("MINNESOTA DEPARTMENT OF REVENUE", title_style))
    story.append(Paragraph("SALES AND USE TAX RETURN", title_style))
    story.append(Paragraph("FORM ST-1", title_style))
    story.append(Spacer(1, 20))
    
    # Business Information Section
    story.append(Paragraph("BUSINESS INFORMATION", header_style))
    
    business_data = [
        ['Business Name:', 'Visual Vanguard Media'],
        ['Business Owner:', 'James Quintin Elli'],
        ['Federal ID Number:', '[TO BE FILLED - Your Federal EIN]'],
        ['Minnesota Tax ID:', '[TO BE FILLED - Your Minnesota Sales Tax License Number]'],
        ['Business Address:', '460 Wacouta St #331'],
        ['', 'Saint Paul, MN 55101'],
        ['County:', 'Ramsey County'],
        ['Filing Frequency:', 'Monthly']
    ]
    
    business_table = Table(business_data, colWidths=[2*inch, 4*inch])
    business_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    
    story.append(business_table)
    story.append(Spacer(1, 20))
    
    # Reporting Period
    story.append(Paragraph("REPORTING PERIOD INFORMATION", header_style))
    
    period_data = [
        ['Tax Period:', 'July 2025'],
        ['From Date:', 'July 1, 2025'],
        ['To Date:', 'July 31, 2025'],
        ['Due Date:', 'August 20, 2025']
    ]
    
    period_table = Table(period_data, colWidths=[2*inch, 4*inch])
    period_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    
    story.append(period_table)
    story.append(Spacer(1, 20))
    
    # Part I - Sales Tax
    story.append(Paragraph("PART I - SALES TAX", header_style))
    
    sales_data = [
        ['Line 1 - Gross Sales (All sales before deductions)', '$2,567.50'],
        ['', ''],
        ['Line 2 - Deductions:', ''],
        ['  a) Sales to other dealers for resale', '$0.00'],
        ['  b) Sales exempt by law (attach exemption certificates)', '$2,567.50'],
        ['  c) Other exempt sales (attach documentation)', '$0.00'],
        ['  d) Total deductions (add lines 2a through 2c)', '$2,567.50'],
        ['', ''],
        ['Line 3 - Taxable Sales (Line 1 minus Line 2d)', '$0.00'],
        ['', ''],
        ['Line 4 - TAX CALCULATION:', ''],
        ['  State Sales Tax: $0.00 × 6.875%', '$0.00'],
        ['  Local Sales Tax (Saint Paul): $0.00 × 1.000%', '$0.00'],
        ['  Total Sales Tax Due (State + Local)', '$0.00']
    ]
    
    sales_table = Table(sales_data, colWidths=[4.5*inch, 1.5*inch])
    sales_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, -1), 'LEFT'),
        ('ALIGN', (1, 0), (1, -1), 'RIGHT'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LINEBELOW', (0, 13), (-1, 13), 1, colors.black),
        ('FONTNAME', (0, 13), (-1, 13), 'Helvetica-Bold'),
    ]))
    
    story.append(sales_table)
    story.append(Spacer(1, 20))
    
    # Part II - Use Tax
    story.append(Paragraph("PART II - USE TAX", header_style))
    
    use_tax_data = [
        ['Line 5 - Purchases subject to use tax:', ''],
        ['  Out-of-state purchases/digital services', '$10.00'],
        ['', ''],
        ['Line 6 - Use Tax Calculation:', ''],
        ['  Use Tax: $10.00 × 7.875%', '$0.79']
    ]
    
    use_tax_table = Table(use_tax_data, colWidths=[4.5*inch, 1.5*inch])
    use_tax_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, -1), 'LEFT'),
        ('ALIGN', (1, 0), (1, -1), 'RIGHT'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LINEBELOW', (0, 4), (-1, 4), 1, colors.black),
        ('FONTNAME', (0, 4), (-1, 4), 'Helvetica-Bold'),
    ]))
    
    story.append(use_tax_table)
    story.append(Spacer(1, 20))
    
    # Part III - Total Tax Due
    story.append(Paragraph("PART III - TOTAL TAX DUE", header_style))
    
    total_data = [
        ['Line 7 - Total Sales Tax (Line 4)', '$0.00'],
        ['Line 8 - Total Use Tax (Line 6)', '$0.79'],
        ['Line 9 - Total Tax Due (Line 7 + Line 8)', '$0.79'],
        ['Line 10 - Credits/Overpayments from previous periods', '$0.00'],
        ['Line 11 - Net Tax Due (Line 9 minus Line 10)', '$0.79']
    ]
    
    total_table = Table(total_data, colWidths=[4.5*inch, 1.5*inch])
    total_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, -1), 'LEFT'),
        ('ALIGN', (1, 0), (1, -1), 'RIGHT'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LINEBELOW', (0, 4), (-1, 4), 2, colors.black),
        ('FONTNAME', (0, 4), (-1, 4), 'Helvetica-Bold'),
    ]))
    
    story.append(total_table)
    story.append(Spacer(1, 20))
    
    # Part IV - Penalties and Interest
    story.append(Paragraph("PART IV - PENALTIES AND INTEREST", header_style))
    
    penalties_data = [
        ['Line 12 - Late Filing Penalty', '$0.00'],
        ['Line 13 - Late Payment Penalty', '$0.00'],
        ['Line 14 - Interest', '$0.00'],
        ['Line 15 - Total Penalties and Interest', '$0.00']
    ]
    
    penalties_table = Table(penalties_data, colWidths=[4.5*inch, 1.5*inch])
    penalties_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, -1), 'LEFT'),
        ('ALIGN', (1, 0), (1, -1), 'RIGHT'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LINEBELOW', (0, 3), (-1, 3), 1, colors.black),
        ('FONTNAME', (0, 3), (-1, 3), 'Helvetica-Bold'),
    ]))
    
    story.append(penalties_table)
    story.append(Spacer(1, 20))
    
    # Part V - Total Amount Due
    story.append(Paragraph("PART V - TOTAL AMOUNT DUE", header_style))
    
    final_data = [
        ['Line 16 - Total Amount Due (Line 11 + Line 15)', '$0.79']
    ]
    
    final_table = Table(final_data, colWidths=[4.5*inch, 1.5*inch])
    final_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, -1), 'LEFT'),
        ('ALIGN', (1, 0), (1, -1), 'RIGHT'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 12),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('LINEABOVE', (0, 0), (-1, 0), 2, colors.black),
        ('LINEBELOW', (0, 0), (-1, 0), 2, colors.black),
    ]))
    
    story.append(final_table)
    story.append(Spacer(1, 20))
    
    # Payment Information
    story.append(Paragraph("PAYMENT INFORMATION", header_style))
    
    payment_data = [
        ['Make check payable to:', 'Minnesota Department of Revenue'],
        ['Amount:', '$0.79'],
        ['Due Date:', 'August 20, 2025']
    ]
    
    payment_table = Table(payment_data, colWidths=[2*inch, 4*inch])
    payment_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    
    story.append(payment_table)
    story.append(Spacer(1, 30))
    
    # Certification Section
    story.append(Paragraph("CERTIFICATION", header_style))
    story.append(Paragraph("Under penalties of perjury, I declare that I have examined this return and accompanying schedules and statements, and to the best of my knowledge and belief, they are true, correct, and complete.", normal_style))
    story.append(Spacer(1, 30))
    
    # Signature Section
    signature_data = [
        ['Signature:', '________________________________', 'Date:', '_______________'],
        ['', 'James Quintin Elli, Owner', '', ''],
        ['', 'Visual Vanguard Media', '', '']
    ]
    
    signature_table = Table(signature_data, colWidths=[1*inch, 3*inch, 1*inch, 1.5*inch])
    signature_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('LINEBELOW', (1, 0), (1, 0), 1, colors.black),
        ('LINEBELOW', (3, 0), (3, 0), 1, colors.black),
    ]))
    
    story.append(signature_table)
    
    # Build the PDF
    doc.build(story)
    print(f"PDF created successfully: {filename}")
    return filename

if __name__ == "__main__":
    create_tax_return_pdf()
