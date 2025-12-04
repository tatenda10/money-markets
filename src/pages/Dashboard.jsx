import React, { useState } from 'react';
import {
    TrendingUp,
    TrendingDown,
    DollarSign,
    Activity,
    AlertCircle, 
    CheckCircle2, 
    Clock,
    ArrowUpRight,
    ArrowDownRight,
    Wallet,
    PieChart,
    BarChart3,
    FileText,
    Users,
    Calendar,
    RefreshCw
} from 'lucide-react';

const Dashboard = () => {
    // Mock data for metrics
    const metrics = {
        totalPnL: 2456789.45,
        pnLChange: 12.5,
        cashBalance: 12500000.00,
        cashChange: -2.3,
        sodRunsToday: 3,
        sodRunsSuccess: 2,
        activeDeals: 47,
        dealsChange: 5,
        receivables: 3450000.00,
        receivablesChange: 8.2,
        payables: 2100000.00,
        payablesChange: -3.1,
    };

    // PnL trend data (last 7 days)
    const pnLTrendData = [
        { date: '18 Nov', value: 2100000 },
        { date: '19 Nov', value: 2250000 },
        { date: '20 Nov', value: 2180000 },
        { date: '21 Nov', value: 2320000 },
        { date: '22 Nov', value: 2400000 },
        { date: '23 Nov', value: 2380000 },
        { date: '24 Nov', value: 2456789 },
    ];

    // Income by category
    const incomeData = [
        { category: 'FX Trading', amount: 1200000, color: 'bg-blue-500' },
        { category: 'Fixed Income', amount: 850000, color: 'bg-green-500' },
        { category: 'Trade Finance', amount: 406789, color: 'bg-purple-500' },
    ];

    // Cash flow data (last 7 days)
    const cashFlowData = [
        { date: '18 Nov', inflow: 2500000, outflow: 1800000 },
        { date: '19 Nov', inflow: 2200000, outflow: 1900000 },
        { date: '20 Nov', inflow: 2800000, outflow: 2100000 },
        { date: '21 Nov', inflow: 2400000, outflow: 2000000 },
        { date: '22 Nov', inflow: 2600000, outflow: 1950000 },
        { date: '23 Nov', inflow: 2700000, outflow: 2200000 },
        { date: '24 Nov', inflow: 2900000, outflow: 2100000 },
    ];

    // Recent SOD runs
    const recentRuns = [
        { id: 'RUN-2025-11-24-01', time: '08:00 AM', status: 'Success', duration: '2m 15s' },
        { id: 'RUN-2025-11-24-02', time: '12:00 PM', status: 'Success', duration: '1m 50s' },
        { id: 'RUN-2025-11-24-03', time: '04:00 PM', status: 'Running', duration: '-' },
    ];

    // System alerts
    const alerts = [
        { type: 'warning', message: 'FX Rate update delayed by 5 minutes', time: '2 hours ago' },
        { type: 'info', message: 'Scheduled maintenance scheduled for tonight', time: '4 hours ago' },
    ];

    // Helper function to format currency
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    // Helper function to calculate chart dimensions
    const maxPnL = Math.max(...pnLTrendData.map(d => d.value));
    const maxCashFlow = Math.max(...cashFlowData.flatMap(d => [d.inflow, d.outflow]));

    // Simple Line Chart Component
    const LineChart = ({ data, maxValue, color = 'blue' }) => {
        const width = 600;
        const height = 150;
        const padding = 20;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;

        const points = data.map((d, i) => {
            const x = padding + (i / (data.length - 1)) * chartWidth;
            const y = padding + chartHeight - (d.value / maxValue) * chartHeight;
            return `${x},${y}`;
        }).join(' ');

        const strokeColor = color === 'blue' ? '#3b82f6' : color === 'green' ? '#10b981' : '#8b5cf6';

        return (
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={strokeColor} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
                    </linearGradient>
                </defs>
                <polyline
                    fill="url(#lineGradient)"
                    stroke="none"
                    points={`${padding},${padding + chartHeight} ${points} ${padding + chartWidth},${padding + chartHeight}`}
                />
                <polyline
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="2.5"
                    points={points}
                />
                {data.map((d, i) => {
                    const x = padding + (i / (data.length - 1)) * chartWidth;
                    const y = padding + chartHeight - (d.value / maxValue) * chartHeight;
                    return (
                        <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="4"
                            fill={strokeColor}
                            stroke="white"
                            strokeWidth="2"
                        />
                    );
                })}
            </svg>
        );
    };

    // Bar Chart Component
    const BarChart = ({ data, maxValue }) => {
        const width = 600;
        const height = 200;
        const padding = 20;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        const barWidth = chartWidth / data.length - 15;

        const getColor = (colorClass) => {
            if (colorClass.includes('blue')) return '#3b82f6';
            if (colorClass.includes('green')) return '#10b981';
            if (colorClass.includes('purple')) return '#8b5cf6';
            return '#6b7280';
        };

        return (
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
                {data.map((d, i) => {
                    const barHeight = (d.amount / maxValue) * chartHeight;
                    const x = padding + i * (chartWidth / data.length) + 5;
                    const y = padding + chartHeight - barHeight;
                    return (
                        <g key={i}>
                            <rect
                                x={x}
                                y={y}
                                width={barWidth}
                                height={barHeight}
                                fill={getColor(d.color)}
                                rx="2"
                            />
                            <text
                                x={x + barWidth / 2}
                                y={y - 8}
                                textAnchor="middle"
                                fill="#4b5563"
                                fontSize="11"
                                fontWeight="500"
                            >
                                {formatCurrency(d.amount)}
                            </text>
                        </g>
                    );
                })}
            </svg>
        );
    };

    // Stacked Bar Chart Component
    const StackedBarChart = ({ data, maxValue }) => {
        const width = 600;
        const height = 200;
        const padding = 20;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        const barWidth = chartWidth / data.length - 15;

        return (
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
                {data.map((d, i) => {
                    const inflowHeight = (d.inflow / maxValue) * chartHeight;
                    const outflowHeight = (d.outflow / maxValue) * chartHeight;
                    const x = padding + i * (chartWidth / data.length) + 5;
                    const inflowY = padding + chartHeight - inflowHeight;
                    const outflowY = inflowY - outflowHeight;

                    return (
                        <g key={i}>
                            <rect
                                x={x}
                                y={inflowY}
                                width={barWidth}
                                height={inflowHeight}
                                fill="#10b981"
                                rx="2"
                            />
                            <rect
                                x={x}
                                y={outflowY}
                                width={barWidth}
                                height={outflowHeight}
                                fill="#ef4444"
                                rx="2"
                            />
                        </g>
                    );
                })}
            </svg>
        );
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-xs text-gray-600 mt-1">Overview of your financial system</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors">
                        <RefreshCw size={14} />
                        Refresh
                    </button>
                    <button className="px-3 py-1.5 text-xs font-medium text-white bg-black hover:bg-gray-800 transition-colors">
                        Export Report
                    </button>
                </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total PnL */}
                <div className="bg-white border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="p-1.5 bg-blue-50">
                            <TrendingUp className="text-blue-600" size={16} />
                        </div>
                        <span className={`text-xs font-medium flex items-center gap-1 ${metrics.pnLChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {metrics.pnLChange > 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                            {Math.abs(metrics.pnLChange)}%
                        </span>
                    </div>
                    <h3 className="text-xs font-medium text-gray-600 mb-1">Total PnL</h3>
                    <p className="text-lg font-bold text-gray-900">{formatCurrency(metrics.totalPnL)}</p>
                </div>

                {/* Cash Balance */}
                <div className="bg-white border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="p-1.5 bg-green-50">
                            <Wallet className="text-green-600" size={16} />
                        </div>
                        <span className={`text-xs font-medium flex items-center gap-1 ${metrics.cashChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {metrics.cashChange > 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                            {Math.abs(metrics.cashChange)}%
                        </span>
                    </div>
                    <h3 className="text-xs font-medium text-gray-600 mb-1">Cash Balance</h3>
                    <p className="text-lg font-bold text-gray-900">{formatCurrency(metrics.cashBalance)}</p>
                </div>

                {/* SOD Runs Today */}
                <div className="bg-white border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="p-1.5 bg-purple-50">
                            <Activity className="text-purple-600" size={16} />
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                            {metrics.sodRunsSuccess}/{metrics.sodRunsToday} Success
                        </span>
                    </div>
                    <h3 className="text-xs font-medium text-gray-600 mb-1">SOD Runs Today</h3>
                    <p className="text-lg font-bold text-gray-900">{metrics.sodRunsToday}</p>
                </div>

                {/* Active Deals */}
                <div className="bg-white border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="p-1.5 bg-orange-50">
                            <BarChart3 className="text-orange-600" size={16} />
                        </div>
                        <span className={`text-xs font-medium flex items-center gap-1 text-green-600`}>
                            <ArrowUpRight size={12} />
                            +{metrics.dealsChange}
                        </span>
                    </div>
                    <h3 className="text-xs font-medium text-gray-600 mb-1">Active Deals</h3>
                    <p className="text-lg font-bold text-gray-900">{metrics.activeDeals}</p>
                </div>
            </div>

            {/* Secondary Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Receivables */}
                <div className="bg-white border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <FileText className="text-gray-400" size={14} />
                            <h3 className="text-xs font-medium text-gray-600">Receivables</h3>
                        </div>
                        <span className={`text-xs font-medium flex items-center gap-1 text-green-600`}>
                            <ArrowUpRight size={12} />
                            {metrics.receivablesChange}%
                        </span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{formatCurrency(metrics.receivables)}</p>
                </div>

                {/* Payables */}
                <div className="bg-white border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <Wallet className="text-gray-400" size={14} />
                            <h3 className="text-xs font-medium text-gray-600">Payables</h3>
                        </div>
                        <span className={`text-xs font-medium flex items-center gap-1 text-red-600`}>
                            <ArrowDownRight size={12} />
                            {Math.abs(metrics.payablesChange)}%
                        </span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{formatCurrency(metrics.payables)}</p>
                </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* PnL Trend Chart */}
                <div className="bg-white border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">PnL Trend</h3>
                            <p className="text-xs text-gray-600">Last 7 days</p>
                        </div>
                        <PieChart className="text-gray-400" size={16} />
                    </div>
                    <div className="h-40">
                        <LineChart data={pnLTrendData} maxValue={maxPnL} color="blue" />
                    </div>
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-200">
                        {pnLTrendData.map((d, i) => (
                            <div key={i} className="text-center">
                                <p className="text-[10px] text-gray-500">{d.date}</p>
                                <p className="text-xs font-medium text-gray-900">{formatCurrency(d.value)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Income by Category */}
                <div className="bg-white border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Income by Category</h3>
                            <p className="text-xs text-gray-600">Current period</p>
                        </div>
                        <BarChart3 className="text-gray-400" size={16} />
                    </div>
                    <div className="h-48">
                        <BarChart data={incomeData} maxValue={Math.max(...incomeData.map(d => d.amount))} />
                    </div>
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-200">
                        {incomeData.map((d, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className={`w-2.5 h-2.5 ${d.color}`}></div>
                                <div>
                                    <p className="text-[10px] text-gray-500">{d.category}</p>
                                    <p className="text-xs font-medium text-gray-900">{formatCurrency(d.amount)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cash Flow Chart */}
            <div className="bg-white border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Cash Flow</h3>
                        <p className="text-xs text-gray-600">Inflow vs Outflow (Last 7 days)</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 bg-green-500"></div>
                            <span className="text-xs text-gray-600">Inflow</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 bg-red-500"></div>
                            <span className="text-xs text-gray-600">Outflow</span>
                        </div>
                    </div>
                </div>
                <div className="h-48">
                    <StackedBarChart data={cashFlowData} maxValue={maxCashFlow} />
                </div>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-200">
                    {cashFlowData.map((d, i) => (
                        <div key={i} className="text-center flex-1">
                            <p className="text-[10px] text-gray-500 mb-1">{d.date}</p>
                            <p className="text-[10px] font-medium text-green-600">+{formatCurrency(d.inflow)}</p>
                            <p className="text-[10px] font-medium text-red-600">-{formatCurrency(d.outflow)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Row: Recent Activity & System Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Recent SOD Runs */}
                <div className="bg-white border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-gray-900">Recent SOD Runs</h3>
                        <Activity className="text-gray-400" size={16} />
                    </div>
                    <div className="space-y-2">
                        {recentRuns.map((run) => (
                            <div key={run.id} className="flex items-center justify-between p-2 bg-gray-50">
                                <div className="flex items-center gap-2">
                                    {run.status === 'Success' ? (
                                        <CheckCircle2 className="text-green-600" size={14} />
                                    ) : run.status === 'Running' ? (
                                        <Clock className="text-blue-600 animate-spin" size={14} />
                                    ) : (
                                        <AlertCircle className="text-red-600" size={14} />
                                    )}
                                    <div>
                                        <p className="text-xs font-medium text-gray-900">{run.id}</p>
                                        <p className="text-[10px] text-gray-500">{run.time} • {run.duration}</p>
                                    </div>
                                </div>
                                <span className={`px-1.5 py-0.5 text-[10px] font-medium ${
                                    run.status === 'Success' 
                                        ? 'bg-green-50 text-green-700 border border-green-200'
                                        : run.status === 'Running'
                                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                        : 'bg-red-50 text-red-700 border border-red-200'
                                }`}>
                                    {run.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Alerts */}
                <div className="bg-white border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-gray-900">System Alerts</h3>
                        <AlertCircle className="text-gray-400" size={16} />
                    </div>
                    <div className="space-y-2">
                        {alerts.map((alert, i) => (
                            <div key={i} className={`flex items-start gap-2 p-2 ${
                                alert.type === 'warning' 
                                    ? 'bg-yellow-50 border border-yellow-200'
                                    : 'bg-blue-50 border border-blue-200'
                            }`}>
                                {alert.type === 'warning' ? (
                                    <AlertCircle className="text-yellow-600 mt-0.5" size={14} />
                                ) : (
                                    <AlertCircle className="text-blue-600 mt-0.5" size={14} />
                                )}
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-gray-900">{alert.message}</p>
                                    <p className="text-[10px] text-gray-500 mt-0.5">{alert.time}</p>
                                </div>
                            </div>
                        ))}
                        <div className="text-center pt-1">
                            <button className="text-xs text-gray-600 hover:text-gray-900">
                                View All Alerts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
