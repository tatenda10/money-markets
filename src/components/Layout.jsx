import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
    Activity,
    Settings,
    Sliders,
    LogOut
} from 'lucide-react';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
        navigate('/login');
    };

    const navTabs = [
        { path: '/runs', label: 'Runs', icon: Activity },
        { path: '/settings', label: 'Settings', icon: Settings },
        { path: '/configurations', label: 'Configurations', icon: Sliders },
    ];

    return (
        <div className="flex flex-col h-screen bg-white font-sans text-gray-900">
            {/* Top Navbar */}
            <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 bg-white">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black flex items-center justify-center text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-gray-900 leading-none">FinReports</h1>
                        <p className="text-[10px] text-gray-500 mt-0.5">Financial Systems</p>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <nav className="flex items-center gap-1">
                    {navTabs.map((tab) => {
                        const isActive = location.pathname === tab.path || 
                                       (tab.path === '/runs' && location.pathname === '/sod-runs');
                        return (
                            <Link
                                key={tab.path}
                                to={tab.path === '/runs' ? '/sod-runs' : tab.path}
                                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                                    isActive
                                        ? 'text-gray-900 border-gray-900'
                                        : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                                }`}
                            >
                                <tab.icon size={18} strokeWidth={2} />
                                <span>{tab.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <button 
                        onClick={handleLogout}
                        className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors flex items-center gap-2"
                        title="Logout"
                    >
                        <LogOut size={14} />
                        Logout
                    </button>
                </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-auto bg-white">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
