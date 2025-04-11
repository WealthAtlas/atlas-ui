import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface InvestmentChartProps {
    data: {
        name: string;
        amount: number;
        returns: number;
    }[];
}

export default function InvestmentChart({ data }: InvestmentChartProps) {
    return (
        <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#8884d8" name="Investment Amount" />
                    <Bar dataKey="returns" fill="#82ca9d" name="Returns" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
} 