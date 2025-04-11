"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Investments", href: "/investments" },
    { name: "Goals", href: "/goals" },
    { name: "Expenses", href: "/expenses" },
    { name: "Loans", href: "/loans" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-900">
                            Wealth Atlas
                        </Link>
                    </div>

                    <div className="hidden md:flex md:space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-gray-900",
                                    pathname === item.href
                                        ? "text-gray-900"
                                        : "text-gray-500"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
} 