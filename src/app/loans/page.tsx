'use client';

import { gql, useQuery } from '@apollo/client';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const GET_LOANS = gql`
  query GetLoans {
    loans {
      id
      name
      amount
      interestRate
      remainingAmount
      startDate
      endDate
      monthlyPayment
      status
    }
  }
`;

export default function LoansPage() {
    const { data, loading, error } = useQuery(GET_LOANS);

    return (
        <ProtectedRoute>
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-6">Loans</h1>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {data && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.loans.map((loan: any) => (
                            <div key={loan.id} className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-xl font-semibold mb-2">{loan.name}</h2>
                                <div className="space-y-2">
                                    <p>Original Amount: ${loan.amount}</p>
                                    <p>Remaining: ${loan.remainingAmount}</p>
                                    <p>Interest Rate: {loan.interestRate}%</p>
                                    <p>Monthly Payment: ${loan.monthlyPayment}</p>
                                    <p>Start Date: {new Date(loan.startDate).toLocaleDateString()}</p>
                                    <p>End Date: {new Date(loan.endDate).toLocaleDateString()}</p>
                                    <p>Status: {loan.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ProtectedRoute>
    );
} 