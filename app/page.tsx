'use client';
import { Suspense, useEffect, useState } from 'react';
// import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import T from '@/components/home';
import { Wordpress } from '@/lib/wordpress';
import { useHistory } from 'react-router-dom';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // 控制加载状态
  const [error, setError] = useState(null); // 存储错误信息
  const [activeSection, setActiveSection] = useState(() => {
    // 初始化时从 localStorage 读取
    return localStorage.getItem('Section') || 'dashboard';
  });
  interface PostResult {
    id: number;
    title: string;
    slug: string;
    date: string;
    cover?: string;
    tag: number[];
    sort: string;
  }

  const [data, setData] = useState<{
    indexPages: any[];
    tags: any[];
    hitokoto: string;
    results: PostResult[];
  } | null>(null);
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' },
  ];

  // 调试状态变化
  useEffect(() => {
    console.log(`Active section changed to: ${activeSection}`);



  }, [activeSection]);


  useEffect(() => {
    setIsLoading(true); // 开始加载
    Wordpress()
      .then((blogData) => {
        console.log('获取博客数据成功:', blogData);
        setIsLoading(false); // 加载完成

        setData(blogData);
      })
      .catch((err) => {
        console.error('获取博客数据失败:', err);
      });


    window.addEventListener('popstate', function () {

    })

  }, []);




  // 处理菜单点击
  const handleMenuClick = (id: string) => {
    console.log(`Clicked menu item: ${id}`);
    localStorage.setItem('Section', id);
    setActiveSection(id);
  };

  // 根据状态渲染对应组件
  const renderContent = () => {
    console.log(`Rendering content for: ${activeSection} at ${new Date().toISOString()}`);
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard key="dashboard" />;
      case 'profile':
        return <T key="profile" data={data} />;
      case 'settings':
        return <T key="settings" />;
      default:
        return <Dashboard key="dashboard" />;
    }
  };
  if (isLoading) {
    return <div>加载中...</div>; // 显示加载状态
  }

  if (error) {
    return <div>错误: {error}</div>; // 显示错误信息
  }
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