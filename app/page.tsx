'use client';
import { Suspense, useEffect, useState } from 'react';
// import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import T from '@/components/home';

export default function Home() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' },
  ];

  // 调试状态变化
  useEffect(() => {
    console.log(`Active section changed to: ${activeSection}`);
  }, [activeSection]);

  // 处理菜单点击
  const handleMenuClick = (id: string) => {
    console.log(`Clicked menu item: ${id}`);
    setActiveSection(id);
  };

  // 根据状态渲染对应组件
  const renderContent = () => {
    console.log(`Rendering content for: ${activeSection} at ${new Date().toISOString()}`);
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard key="dashboard" />;
      case 'profile':
        return <T key="profile" />;
      case 'settings':
        return <T key="settings" />;
      default:
        return <Dashboard key="dashboard" />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">Menu</div>
        <nav className="flex-1">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleMenuClick(item.id)}
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
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 overflow-auto">
        <Suspense fallback={<div className="text-gray-500">Loading content...</div>}>
          {renderContent()}
        </Suspense>
      </div>
    </div>
  );
}