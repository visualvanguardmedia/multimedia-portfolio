#!/usr/bin/env python3
"""
Minnesota Sales and Use Tax Calculator for Visual Vanguard Media
Analyzes business statement and calculates tax obligations for Minnesota Department of Revenue
"""

import json
from decimal import Decimal, ROUND_HALF_UP
from datetime import datetime, date
from typing import Dict, List, Tuple, Optional

class MinnesotaTaxCalculator:
    def __init__(self):
        # Minnesota State Tax Rates (as of 2025)
        self.state_sales_tax_rate = Decimal('0.06875')  # 6.875%
        
        # Saint Paul local tax rates (460 Wacouta St, Saint Paul, MN 55101)
        # Saint Paul has additional local taxes
        self.local_sales_tax_rate = Decimal('0.01')    # 1.0% Saint Paul local tax
        self.total_sales_tax_rate = self.state_sales_tax_rate + self.local_sales_tax_rate
        
        # Business Information
        self.business_info = {
            'name': 'Visual Vanguard Media',
            'owner': 'James Quintin Elli',
            'address': '460 Wacouta St #331',
            'city': 'Saint Paul',
            'state': 'MN',
            'zip': '55101'
        }
        
    def analyze_statement_data(self, statement_data: Dict) -> Dict:
        """Analyze the business statement and categorize transactions"""
        
        transactions = {
            'income': [],
            'expenses': [],
            'deposits': [],
            'withdrawals': []
        }
        
        # Parse statement data
        total_income = Decimal('2567.87')  # From Venmo cashout - likely business revenue
        total_expenses = Decimal('600.37')
        
        # Categorize income sources
        transactions['income'] = [
            {
                'date': '2025-07-09',
                'description': 'VENMO CASHOUT',
                'amount': Decimal('2567.50'),
                'type': 'Video Editing Services',
                'taxable': False  # Video editing services are non-taxable in Minnesota
            }
        ]
        
        # Categorize expenses
        transactions['expenses'] = [
            {
                'date': '2025-07-15',
                'description': 'JAMES ELLI (U.S. Bank Checking)',
                'amount': Decimal('100.00'),
                'type': 'Business Transfer/Owner Draw'
            },
            {
                'date': '2025-07-24',
                'description': 'MOONSHOT AI PTE. LTD.',
                'amount': Decimal('10.00'),
                'type': 'Business Expense - Software/AI Tools'
            },
            {
                'date': '2025-07-29',
                'description': 'SQ LIDIATHELADYBARBER',
                'amount': Decimal('48.00'),
                'type': 'Personal/Business Service'
            },
            {
                'date': '2025-07-31',
                'description': 'JAMES ELLI (U.S. Bank Checking)',
                'amount': Decimal('442.00'),
                'type': 'Business Transfer/Owner Draw'
            }
        ]
        
        return transactions
    
    def calculate_taxable_sales(self, transactions: Dict) -> Tuple[Decimal, Decimal]:
        """Calculate taxable and non-taxable sales"""
        
        taxable_sales = Decimal('0.00')
        nontaxable_sales = Decimal('0.00')
        
        # For multimedia services in Minnesota:
        # - Video editing services are generally NON-TAXABLE (professional services)
        # - Video production services may be taxable (if selling tangible products)
        # - Cinematography services may be taxable (depending on deliverables)
        # - Digital media creation is taxable if selling tangible digital products
        
        for income in transactions['income']:
            if income.get('taxable', True):
                taxable_sales += income['amount']
            else:
                nontaxable_sales += income['amount']
        
        return taxable_sales, nontaxable_sales
    
    def calculate_use_tax(self, transactions: Dict) -> Decimal:
        """Calculate use tax on out-of-state purchases"""
        
        use_tax = Decimal('0.00')
        
        # Check expenses for out-of-state purchases subject to use tax
        for expense in transactions['expenses']:
            # MOONSHOT AI PTE. LTD. - Singapore company, digital service
            if 'MOONSHOT AI' in expense['description']:
                # Digital services from out-of-state vendors are subject to use tax
                use_tax += expense['amount'] * self.total_sales_tax_rate
        
        return use_tax
    
    def calculate_taxes(self, taxable_sales: Decimal, use_tax: Decimal) -> Dict:
        """Calculate total tax obligations"""
        
        # Sales tax calculation
        state_sales_tax = (taxable_sales * self.state_sales_tax_rate).quantize(
            Decimal('0.01'), rounding=ROUND_HALF_UP
        )
        
        local_sales_tax = (taxable_sales * self.local_sales_tax_rate).quantize(
            Decimal('0.01'), rounding=ROUND_HALF_UP
        )
        
        total_sales_tax = state_sales_tax + local_sales_tax
        
        # Use tax (already calculated)
        use_tax = use_tax.quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
        
        # Total tax due
        total_tax_due = total_sales_tax + use_tax
        
        return {
            'taxable_sales': taxable_sales,
            'state_sales_tax_rate': float(self.state_sales_tax_rate * 100),
            'local_sales_tax_rate': float(self.local_sales_tax_rate * 100),
            'total_sales_tax_rate': float(self.total_sales_tax_rate * 100),
            'state_sales_tax': state_sales_tax,
            'local_sales_tax': local_sales_tax,
            'total_sales_tax': total_sales_tax,
            'use_tax': use_tax,
            'total_tax_due': total_tax_due
        }
    
    def generate_report(self) -> Dict:
        """Generate complete tax report"""
        
        # Analyze statement data
        statement_data = {}  # Placeholder - would contain parsed PDF data
        transactions = self.analyze_statement_data(statement_data)
        
        # Calculate taxable sales
        taxable_sales, nontaxable_sales = self.calculate_taxable_sales(transactions)
        
        # Calculate use tax
        use_tax = self.calculate_use_tax(transactions)
        
        # Calculate all taxes
        tax_calculations = self.calculate_taxes(taxable_sales, use_tax)
        
        # Generate report
        report = {
            'business_info': self.business_info,
            'reporting_period': {
                'start_date': '2025-07-01',
                'end_date': '2025-07-31',
                'filing_frequency': 'Monthly',
                'due_date': '2025-08-20'  # 20th of following month for monthly filers
            },
            'financial_summary': {
                'gross_receipts': Decimal('2567.87'),
                'taxable_sales': taxable_sales,
                'nontaxable_sales': nontaxable_sales,
                'total_expenses': Decimal('600.37')
            },
            'tax_calculations': tax_calculations,
            'transactions_analyzed': transactions
        }
        
        return report

def main():
    """Main function to generate Minnesota tax report"""
    
    calculator = MinnesotaTaxCalculator()
    report = calculator.generate_report()
    
    # Print report
    print("=" * 80)
    print("MINNESOTA SALES AND USE TAX CALCULATION REPORT")
    print("Visual Vanguard Media - July 2025")
    print("=" * 80)
    print()
    
    print("BUSINESS INFORMATION:")
    print(f"Business Name: {report['business_info']['name']}")
    print(f"Owner: {report['business_info']['owner']}")
    print(f"Address: {report['business_info']['address']}")
    print(f"         {report['business_info']['city']}, {report['business_info']['state']} {report['business_info']['zip']}")
    print()
    
    print("REPORTING PERIOD:")
    print(f"Period: {report['reporting_period']['start_date']} to {report['reporting_period']['end_date']}")
    print(f"Filing Frequency: {report['reporting_period']['filing_frequency']}")
    print(f"Due Date: {report['reporting_period']['due_date']}")
    print()
    
    print("FINANCIAL SUMMARY:")
    print(f"Gross Receipts:     ${report['financial_summary']['gross_receipts']:>10,.2f}")
    print(f"Taxable Sales:      ${report['financial_summary']['taxable_sales']:>10,.2f}")
    print(f"Non-taxable Sales:  ${report['financial_summary']['nontaxable_sales']:>10,.2f}")
    print()
    
    print("TAX CALCULATIONS:")
    tax = report['tax_calculations']
    print(f"Taxable Sales:      ${tax['taxable_sales']:>10,.2f}")
    print(f"State Tax Rate:     {tax['state_sales_tax_rate']:>10.3f}%")
    print(f"Local Tax Rate:     {tax['local_sales_tax_rate']:>10.3f}%")
    print(f"Total Tax Rate:     {tax['total_sales_tax_rate']:>10.3f}%")
    print()
    print(f"State Sales Tax:    ${tax['state_sales_tax']:>10,.2f}")
    print(f"Local Sales Tax:    ${tax['local_sales_tax']:>10,.2f}")
    print(f"Total Sales Tax:    ${tax['total_sales_tax']:>10,.2f}")
    print(f"Use Tax:            ${tax['use_tax']:>10,.2f}")
    print("-" * 40)
    print(f"TOTAL TAX DUE:      ${tax['total_tax_due']:>10,.2f}")
    print()
    
    # Save report as JSON
    with open('/Users/visualvanguard/multimedia-portfolio/mn_tax_report_july_2025.json', 'w') as f:
        # Convert Decimal objects to float for JSON serialization
        json_report = json.loads(json.dumps(report, default=str))
        json.dump(json_report, f, indent=2)
    
    print("Report saved to: mn_tax_report_july_2025.json")
    return report

if __name__ == "__main__":
    main()
