import { formatCurrency } from "@/lib/utils";

interface Loan {
    id: string;
    name: string;
    principal: number;
    remaining: number;
    interestRate: number;
    monthlyPayment: number;
}

const mockLoans: Loan[] = [
    { id: "1", name: "Mortgage", principal: 300000, remaining: 250000, interestRate: 0.04, monthlyPayment: 1500 },
    { id: "2", name: "Car Loan", principal: 25000, remaining: 15000, interestRate: 0.06, monthlyPayment: 500 },
    { id: "3", name: "Student Loan", principal: 50000, remaining: 30000, interestRate: 0.05, monthlyPayment: 400 },
];

export function LoansSummary() {
    const totalRemaining = mockLoans.reduce((sum, loan) => sum + loan.remaining, 0);
    const totalMonthly = mockLoans.reduce((sum, loan) => sum + loan.monthlyPayment, 0);
    const avgInterestRate = mockLoans.reduce((sum, loan) => sum + loan.interestRate, 0) / mockLoans.length;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Total Remaining</span>
                <span className="text-lg font-semibold">{formatCurrency(totalRemaining)}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Monthly Payments</span>
                <span className="text-lg font-semibold">{formatCurrency(totalMonthly)}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Average Interest Rate</span>
                <span className="text-lg font-semibold text-red-600">
                    {(avgInterestRate * 100).toFixed(1)}%
                </span>
            </div>
            <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Active Loans</h4>
                <div className="space-y-2">
                    {mockLoans.map((loan) => (
                        <div key={loan.id} className="flex justify-between text-sm">
                            <span>{loan.name}</span>
                            <span>{formatCurrency(loan.remaining)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 