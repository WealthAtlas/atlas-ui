import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InvestmentsSummary } from "@/components/features/investments/InvestmentsSummary";
import { GoalsSummary } from "@/components/features/goals/GoalsSummary";
import { ExpensesSummary } from "@/components/features/expenses/ExpensesSummary";
import { LoansSummary } from "@/components/features/loans/LoansSummary";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Investments</CardTitle>
          </CardHeader>
          <CardContent>
            <InvestmentsSummary />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <GoalsSummary />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ExpensesSummary />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <LoansSummary />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
