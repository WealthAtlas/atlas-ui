import { formatCurrency } from "@/lib/utils";

interface Investment {
    id: string;
    name: string;
    amount: number;
    type: string;
    return: number;
}

const mockInvestments: Investment[] = [
    { id: "1", name: "Stocks", amount: 50000, type: "Equity", return: 0.12 },
    { id: "2", name: "Bonds", amount: 30000, type: "Fixed Income", return: 0.05 },
    { id: "3", name: "Real Estate", amount: 200000, type: "Property", return: 0.08 },
];

export function InvestmentsSummary() {
    const totalAmount = mockInvestments.reduce((sum, inv) => sum + inv.amount, 0);
    const avgReturn = mockInvestments.reduce((sum, inv) => sum + inv.return, 0) / mockInvestments.length;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Total Value</span>
                <span className="text-lg font-semibold">{formatCurrency(totalAmount)}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Average Return</span>
                <span className="text-lg font-semibold text-green-600">
                    {(avgReturn * 100).toFixed(1)}%
                </span>
            </div>
            <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Top Investments</h4>
                <div className="space-y-2">
                    {mockInvestments.map((investment) => (
                        <div key={investment.id} className="flex justify-between text-sm">
                            <span>{investment.name}</span>
                            <span>{formatCurrency(investment.amount)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 