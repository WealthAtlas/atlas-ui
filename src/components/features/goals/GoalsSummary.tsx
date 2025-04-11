import { formatCurrency } from "@/lib/utils";

interface Goal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    deadline: Date;
}

const mockGoals: Goal[] = [
    { id: "1", name: "Retirement", targetAmount: 1000000, currentAmount: 250000, deadline: new Date("2040-01-01") },
    { id: "2", name: "House Down Payment", targetAmount: 100000, currentAmount: 40000, deadline: new Date("2025-01-01") },
    { id: "3", name: "Education Fund", targetAmount: 50000, currentAmount: 15000, deadline: new Date("2030-01-01") },
];

export function GoalsSummary() {
    const totalTarget = mockGoals.reduce((sum, goal) => sum + goal.targetAmount, 0);
    const totalCurrent = mockGoals.reduce((sum, goal) => sum + goal.currentAmount, 0);
    const progress = (totalCurrent / totalTarget) * 100;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Total Target</span>
                <span className="text-lg font-semibold">{formatCurrency(totalTarget)}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Current Progress</span>
                <span className="text-lg font-semibold">{formatCurrency(totalCurrent)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Active Goals</h4>
                <div className="space-y-2">
                    {mockGoals.map((goal) => (
                        <div key={goal.id} className="flex justify-between text-sm">
                            <span>{goal.name}</span>
                            <span>{formatCurrency(goal.currentAmount)} / {formatCurrency(goal.targetAmount)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 