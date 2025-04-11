interface InputProps {
    label: string;
    type: string;
    value: string | number;
    onChange: (value: string) => void;
    required?: boolean;
    placeholder?: string;
}

export default function Input({
    label,
    type,
    value,
    onChange,
    required = false,
    placeholder,
}: InputProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                placeholder={placeholder}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
    );
} 