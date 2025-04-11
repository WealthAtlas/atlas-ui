'use client';

import { gql, useQuery } from '@apollo/client';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const GET_EXPENSES = gql`
  query GetExpenses {
    expenses {
      id
      category
      amount
      date
      description
      paymentMethod
      recurring
    }
  }
`;

export default function ExpensesPage() {
    const { data, loading, error } = useQuery(GET_EXPENSES);

    return (
        <ProtectedRoute>
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-6">Expenses</h1>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {data && (
                    <div className="space-y-4">
                        {data.expenses.map((expense: any) => (
                            <div key={expense.id} className="bg-white p-6 rounded-lg shadow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-xl font-semibold">{expense.category}</h2>
                                        <p className="text-gray-600">{expense.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">${expense.amount}</p>
                                        <p className="text-sm text-gray-500">
                                            {new Date(expense.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-2">
                                    <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                                        {expense.paymentMethod}
                                    </span>
                                    {expense.recurring && (
                                        <span className="px-2 py-1 bg-blue-100 rounded text-sm">Recurring</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ProtectedRoute>
    );
} 