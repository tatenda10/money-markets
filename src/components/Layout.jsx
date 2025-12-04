import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    PieChart,
    Wallet,
    ArrowRightLeft,
    ChevronDown,
    MoreHorizontal,
    Folder,
    Activity,
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

    const menuGroups = [
        {
            label: null,
            items: [
                { path: '/', label: 'Dashboard', icon: LayoutDashboard },
                { path: '/sod-runs', label: 'SOD Runs', icon: Activity },
                { path: '/pnl-summary', label: 'PnL Summary', icon: PieChart },
                { path: '/income-summary', label: 'Income Summary', icon: FileText },
                { path: '/cash-recon', label: 'Cash Recon', icon: Wallet },
                { path: '/transactions', label: 'Transactions', icon: ArrowRightLeft },
            ]
        }
    ];

    return (
        <div className="flex h-screen bg-white font-sans text-gray-900">
            {/* Sidebar */}
            <aside className="w-[260px] bg-slate-900 border-r border-slate-800 flex flex-col flex-shrink-0">
                {/* Logo Area */}
                <div className="h-16 flex items-center px-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white flex items-center justify-center text-slate-900">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-sm font-bold text-white leading-none">Money Markets</h1>
                            <p className="text-[10px] text-slate-400 mt-0.5">Financial Systems</p>
                        </div>
                    </div>
                    <button className="ml-auto text-slate-400 hover:text-slate-300">
                        <ChevronDown size={16} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-4">
                    {menuGroups.map((group, idx) => (
                        <div key={idx}>
                            <ul className="space-y-1">
                                {group.items.map((item) => (
                                    <li key={item.label} className="border-b border-slate-800/50">
                                        <Link
                                            to={item.path}
                                            className={`flex items-center justify-between px-3 py-3 text-sm font-medium transition-colors ${location.pathname === item.path
                                                    ? 'bg-slate-800 text-white'
                                                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                                                }`}
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <item.icon size={18} strokeWidth={2} className={location.pathname === item.path ? 'text-white' : 'text-slate-400'} />
                                                <span>{item.label}</span>
                                            </div>
                                            {item.badge && (
                                                <span className="bg-slate-700 text-slate-200 text-[10px] font-medium px-1.5 py-0.5 border border-slate-600">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                {/* Bottom Actions */}
                <div className="p-3 mt-auto space-y-2 border-t border-slate-800">
                    <div className="pt-3">
                        <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-slate-800/50 cursor-pointer rounded">
                            <img
                                src="https://ui-avatars.com/api/?name=Liam+Smith&background=random"
                                alt="User"
                                className="w-8 h-8 rounded"
                            />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white truncate">Liam Smith</p>
                                <p className="text-xs text-slate-400 truncate">smith@example.com</p>
                            </div>
                            <MoreHorizontal size={16} className="text-slate-400" />
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white transition-colors rounded border-b border-slate-800/50"
                    >
                        <LogOut size={18} strokeWidth={2} className="text-slate-400" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden bg-white">
                {/* Header */}
                <header className="h-16 border-b border-gray-200 flex items-center px-6 flex-shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Folder size={16} />
                            <span>Reports</span>
                        </div>
                        <span className="text-gray-300">/</span>
                        <h2 className="text-sm font-semibold text-gray-900">
                            {location.pathname === '/' ? 'Dashboard' :
                                location.pathname.split('/')[1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </h2>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-auto p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
