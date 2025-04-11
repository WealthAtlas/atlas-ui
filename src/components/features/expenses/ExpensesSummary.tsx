import { formatCurrency } from "@/lib/utils";

interface Expense {
    id: string;
    category: string;
    amount: number;
    date: Date;
    recurring: boolean;
}

const mockExpenses: Expense[] = [
    { id: "1", category: "Housing", amount: 2000, date: new Date(), recurring: true },
    { id: "2", category: "Food", amount: 800, date: new Date(), recurring: true },
    { id: "3", category: "Transportation", amount: 400, date: new Date(), recurring: true },
    { id: "4", category: "Entertainment", amount: 300, date: new Date(), recurring: false },
];

export function ExpensesSummary() {
    const totalExpenses = mockExpenses.reduce((sum, exp) => sum + exp.amount, 0);
    const recurringExpenses = mockExpenses
        .filter(exp => exp.recurring)
        .reduce((sum, exp) => sum + exp.amount, 0);

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Total Expenses</span>
                <span className="text-lg font-semibold">{formatCurrency(totalExpenses)}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Recurring Expenses</span>
                <span className="text-lg font-semibold">{formatCurrency(recurringExpenses)}</span>
            </div>
            <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Expense Categories</h4>
                <div className="space-y-2">
                    {mockExpenses.map((expense) => (
                        <div key={expense.id} className="flex justify-between text-sm">
                            <span>{expense.category}</span>
                            <span>{formatCurrency(expense.amount)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 