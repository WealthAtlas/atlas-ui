import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const GET_DASHBOARD_DATA = gql`
  query GetDashboardData {
    investments {
      id
      name
      amount
      type
      returns
    }
    goals {
      id
      name
      targetAmount
      currentAmount
      deadline
    }
    expenses {
      id
      category
      amount
      date
    }
    loans {
      id
      name
      amount
      interestRate
      remainingAmount
    }
  }
`;

export default function Dashboard() {
    const { data, loading, error } = useQuery(GET_DASHBOARD_DATA);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Investment Summary */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Investments</h2>
                <div className="space-y-2">
                    {data.investments.map((investment: any) => (
                        <div key={investment.id} className="flex justify-between">
                            <span>{investment.name}</span>
                            <span>${investment.amount}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Goals Summary */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Goals</h2>
                <div className="space-y-2">
                    {data.goals.map((goal: any) => (
                        <div key={goal.id} className="flex justify-between">
                            <span>{goal.name}</span>
                            <span>${goal.currentAmount} / ${goal.targetAmount}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Expenses Summary */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
                <div className="space-y-2">
                    {data.expenses.map((expense: any) => (
                        <div key={expense.id} className="flex justify-between">
                            <span>{expense.category}</span>
                            <span>${expense.amount}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Loans Summary */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Loans</h2>
                <div className="space-y-2">
                    {data.loans.map((loan: any) => (
                        <div key={loan.id} className="flex justify-between">
                            <span>{loan.name}</span>
                            <span>${loan.remainingAmount}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 