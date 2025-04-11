'use client';

import { gql, useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import InvestmentChart from '@/components/charts/InvestmentChart';

const GET_INVESTMENTS = gql`
  query GetInvestments {
    investments {
      id
      name
      amount
      type
      returns
      startDate
      endDate
    }
  }
`;

const CREATE_INVESTMENT = gql`
  mutation CreateInvestment($input: CreateInvestmentInput!) {
    createInvestment(input: $input) {
      id
      name
      amount
      type
      returns
      startDate
      endDate
    }
  }
`;

export default function InvestmentsPage() {
    const { data, loading, error, refetch } = useQuery(GET_INVESTMENTS);
    const [createInvestment] = useMutation(CREATE_INVESTMENT);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        type: '',
        startDate: '',
        endDate: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createInvestment({
                variables: {
                    input: {
                        ...formData,
                        amount: parseFloat(formData.amount),
                    },
                },
            });
            setShowForm(false);
            setFormData({
                name: '',
                amount: '',
                type: '',
                startDate: '',
                endDate: '',
            });
            refetch();
        } catch (err) {
            console.error('Error creating investment:', err);
        }
    };

    return (
        <ProtectedRoute>
            <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Investments</h1>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                    >
                        {showForm ? 'Cancel' : 'Add Investment'}
                    </button>
                </div>

                {showForm && (
                    <div className="mb-8">
                        <Form onSubmit={handleSubmit} title="Add Investment" submitText="Create">
                            <Input
                                label="Name"
                                type="text"
                                value={formData.name}
                                onChange={(value) => setFormData({ ...formData, name: value })}
                                required
                            />
                            <Input
                                label="Amount"
                                type="number"
                                value={formData.amount}
                                onChange={(value) => setFormData({ ...formData, amount: value })}
                                required
                            />
                            <Input
                                label="Type"
                                type="text"
                                value={formData.type}
                                onChange={(value) => setFormData({ ...formData, type: value })}
                                required
                            />
                            <Input
                                label="Start Date"
                                type="date"
                                value={formData.startDate}
                                onChange={(value) => setFormData({ ...formData, startDate: value })}
                                required
                            />
                            <Input
                                label="End Date"
                                type="date"
                                value={formData.endDate}
                                onChange={(value) => setFormData({ ...formData, endDate: value })}
                            />
                        </Form>
                    </div>
                )}

                {loading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {data && (
                    <>
                        <div className="mb-8">
                            <InvestmentChart
                                data={data.investments.map((investment: any) => ({
                                    name: investment.name,
                                    amount: investment.amount,
                                    returns: investment.returns,
                                }))}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.investments.map((investment: any) => (
                                <div key={investment.id} className="bg-white p-6 rounded-lg shadow">
                                    <h2 className="text-xl font-semibold mb-2">{investment.name}</h2>
                                    <div className="space-y-2">
                                        <p>Amount: ${investment.amount}</p>
                                        <p>Type: {investment.type}</p>
                                        <p>Returns: ${investment.returns}</p>
                                        <p>Start Date: {new Date(investment.startDate).toLocaleDateString()}</p>
                                        {investment.endDate && (
                                            <p>End Date: {new Date(investment.endDate).toLocaleDateString()}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </ProtectedRoute>
    );
} 