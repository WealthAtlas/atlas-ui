'use client';

import { gql, useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import GoalProgressChart from '@/components/charts/GoalProgressChart';

const GET_GOALS = gql`
  query GetGoals {
    goals {
      id
      name
      targetAmount
      currentAmount
      deadline
      priority
      status
    }
  }
`;

const CREATE_GOAL = gql`
  mutation CreateGoal($input: CreateGoalInput!) {
    createGoal(input: $input) {
      id
      name
      targetAmount
      currentAmount
      deadline
      priority
      status
    }
  }
`;

export default function GoalsPage() {
    const { data, loading, error, refetch } = useQuery(GET_GOALS);
    const [createGoal] = useMutation(CREATE_GOAL);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        targetAmount: '',
        currentAmount: '',
        deadline: '',
        priority: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createGoal({
                variables: {
                    input: {
                        ...formData,
                        targetAmount: parseFloat(formData.targetAmount),
                        currentAmount: parseFloat(formData.currentAmount),
                    },
                },
            });
            setShowForm(false);
            setFormData({
                name: '',
                targetAmount: '',
                currentAmount: '',
                deadline: '',
                priority: '',
            });
            refetch();
        } catch (err) {
            console.error('Error creating goal:', err);
        }
    };

    return (
        <ProtectedRoute>
            <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Financial Goals</h1>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                    >
                        {showForm ? 'Cancel' : 'Add Goal'}
                    </button>
                </div>

                {showForm && (
                    <div className="mb-8">
                        <Form onSubmit={handleSubmit} title="Add Goal" submitText="Create">
                            <Input
                                label="Name"
                                type="text"
                                value={formData.name}
                                onChange={(value) => setFormData({ ...formData, name: value })}
                                required
                            />
                            <Input
                                label="Target Amount"
                                type="number"
                                value={formData.targetAmount}
                                onChange={(value) => setFormData({ ...formData, targetAmount: value })}
                                required
                            />
                            <Input
                                label="Current Amount"
                                type="number"
                                value={formData.currentAmount}
                                onChange={(value) => setFormData({ ...formData, currentAmount: value })}
                                required
                            />
                            <Input
                                label="Deadline"
                                type="date"
                                value={formData.deadline}
                                onChange={(value) => setFormData({ ...formData, deadline: value })}
                                required
                            />
                            <Input
                                label="Priority"
                                type="text"
                                value={formData.priority}
                                onChange={(value) => setFormData({ ...formData, priority: value })}
                                required
                            />
                        </Form>
                    </div>
                )}

                {loading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {data && (
                    <>
                        <div className="mb-8">
                            <GoalProgressChart
                                data={data.goals.map((goal: any) => ({
                                    name: goal.name,
                                    value: goal.currentAmount,
                                    target: goal.targetAmount,
                                }))}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.goals.map((goal: any) => (
                                <div key={goal.id} className="bg-white p-6 rounded-lg shadow">
                                    <h2 className="text-xl font-semibold mb-2">{goal.name}</h2>
                                    <div className="space-y-2">
                                        <p>Target: ${goal.targetAmount}</p>
                                        <p>Current: ${goal.currentAmount}</p>
                                        <p>Progress: {((goal.currentAmount / goal.targetAmount) * 100).toFixed(1)}%</p>
                                        <p>Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
                                        <p>Priority: {goal.priority}</p>
                                        <p>Status: {goal.status}</p>
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