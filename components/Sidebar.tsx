'use client';
import { Dispatch, SetStateAction } from 'react';

interface SidebarProps {
    activeSection: string;
    setActiveSection: Dispatch<SetStateAction<string>>;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'profile', label: 'Profile' },
        { id: 'settings', label: 'Settings' },
    ];

    return (
        <div className="w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-2xl font-bold">Menu</div>
            <nav className="flex-1">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => setActiveSection(item.id)}
                                className={`block w-full text-left p-4 hover:bg-gray-700 ${activeSection === item.id ? 'bg-gray-700' : ''
                                    }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
