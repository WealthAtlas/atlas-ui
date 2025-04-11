import { ReactNode } from 'react';

interface FormProps {
    children: ReactNode;
    onSubmit: (e: React.FormEvent) => void;
    title: string;
    submitText: string;
}

export default function Form({ children, onSubmit, title, submitText }: FormProps) {
    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="space-y-4">{children}</div>
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                {submitText}
            </button>
        </form>
    );
} 