import React, { useState, useEffect } from 'react';
import {
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    ChevronRight,
    Play,
    AlertCircle,
    FileText,
    Search,
    Filter,
    Download,
    Activity,
    X,
    Loader2
} from 'lucide-react';
import PnLSummaryTab from '../components/tabs/PnLSummaryTab';
import IncomeSummaryTab from '../components/tabs/IncomeSummaryTab';
import UnsettledSummaryTab from '../components/tabs/UnsettledSummaryTab';
import CashAndCashEquivalentsTab from '../components/tabs/CashAndCashEquivalentsTab';
import SuspenseEntriesTab from '../components/tabs/SuspenseEntriesTab';
import TradeFinanceTab from '../components/tabs/TradeFinanceTab';
import FixedIncomeSecuritiesTab from '../components/tabs/FixedIncomeSecuritiesTab';
import AmortisationScheduleTab from '../components/tabs/AmortisationScheduleTab';
import PayablesTab from '../components/tabs/PayablesTab';
import ReceivablesTab from '../components/tabs/ReceivablesTab';
import TrakinTab from '../components/tabs/TrakinTab';

const SODRuns = () => {
    const [selectedRun, setSelectedRun] = useState(null);
    const [isRunModalOpen, setIsRunModalOpen] = useState(false);
    const [runDate, setRunDate] = useState(new Date().toISOString().split('T')[0]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [currentStepIndex, setCurrentStepIndex] = useState(-1);
    const [activeTab, setActiveTab] = useState('PnL Summary');

    // Initial mock data
    const [runs, setRuns] = useState([
        {
            id: 'RUN-2025-11-23-01',
            date: '23 Nov 2025',
            startTime: '08:00:00 AM',
            endTime: '08:02:15 AM',
            duration: '2m 15s',
            status: 'Success',
            user: 'System Scheduler',
            steps: [
                { name: 'Initialization', time: '08:00:00 AM', status: 'Success', duration: '2s' },
                { name: 'Fetch FX Rates', time: '08:00:02 AM', status: 'Success', duration: '45s' },
                { name: 'Calculate PnL', time: '08:00:47 AM', status: 'Success', duration: '30s' },
                { name: 'Reconcile Cash', time: '08:01:17 AM', status: 'Success', duration: '25s' },
                { name: 'Generate Reports', time: '08:01:42 AM', status: 'Success', duration: '33s' },
                { name: 'Finalize & Archive', time: '08:02:15 AM', status: 'Success', duration: '0s' },
            ]
        },
        {
            id: 'RUN-2025-11-22-01',
            date: '22 Nov 2025',
            startTime: '08:00:00 AM',
            endTime: '08:01:50 AM',
            duration: '1m 50s',
            status: 'Success',
            user: 'System Scheduler',
            steps: [
                { name: 'Initialization', time: '08:00:00 AM', status: 'Success', duration: '1s' },
                { name: 'Fetch FX Rates', time: '08:00:01 AM', status: 'Success', duration: '40s' },
                { name: 'Calculate PnL', time: '08:00:41 AM', status: 'Success', duration: '28s' },
                { name: 'Reconcile Cash', time: '08:01:09 AM', status: 'Success', duration: '20s' },
                { name: 'Generate Reports', time: '08:01:29 AM', status: 'Success', duration: '21s' },
            ]
        },
        {
            id: 'RUN-2025-11-21-02',
            date: '21 Nov 2025',
            startTime: '09:15:00 AM',
            endTime: '09:15:45 AM',
            duration: '45s',
            status: 'Failed',
            user: 'Liam Smith',
            error: 'Connection timeout: Unable to reach FX Rate Server',
            steps: [
                { name: 'Initialization', time: '09:15:00 AM', status: 'Success', duration: '2s' },
                { name: 'Fetch FX Rates', time: '09:15:02 AM', status: 'Failed', duration: '43s', error: 'Timeout waiting for response from provider' },
                { name: 'Calculate PnL', time: '-', status: 'Pending', duration: '-' },
                { name: 'Reconcile Cash', time: '-', status: 'Pending', duration: '-' },
            ]
        },
    ]);

    const processSteps = [
        'Initialization',
        'Fetch FX Rates',
        'Calculate PnL',
        'Reconcile Cash',
        'Generate Reports',
        'Finalize & Archive'
    ];

    const [liveSteps, setLiveSteps] = useState(processSteps.map(name => ({ name, status: 'Pending' })));

    const handleStartRun = () => {
        setIsProcessing(true);
        setCurrentStepIndex(0);
        setLiveSteps(processSteps.map(name => ({ name, status: 'Pending' })));
    };

    useEffect(() => {
        if (isProcessing && currentStepIndex < processSteps.length) {
            const timer = setTimeout(() => {
                setLiveSteps(prev => {
                    const newSteps = [...prev];
                    newSteps[currentStepIndex] = { ...newSteps[currentStepIndex], status: 'Success' };
                    return newSteps;
                });
                setCurrentStepIndex(prev => prev + 1);
            }, 1500); // Simulate 1.5s per step

            return () => clearTimeout(timer);
        } else if (isProcessing && currentStepIndex === processSteps.length) {
            // Finished
            setTimeout(() => {
                const newRun = {
                    id: `RUN-${runDate}-${Math.floor(Math.random() * 100)}`,
                    date: new Date(runDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
                    startTime: new Date().toLocaleTimeString(),
                    endTime: new Date(Date.now() + 9000).toLocaleTimeString(),
                    duration: '9s',
                    status: 'Success',
                    user: 'Manual Run',
                    steps: liveSteps.map(s => ({ ...s, time: new Date().toLocaleTimeString(), duration: '1.5s' }))
                };
                setRuns([newRun, ...runs]);
                setIsProcessing(false);
                setIsRunModalOpen(false);
                setSelectedRun(newRun);
                setActiveTab('PnL Summary');
            }, 1000);
        }
    }, [isProcessing, currentStepIndex]);

    return (
        <div className="flex h-[calc(100vh-64px)] text-xs bg-gray-50 p-4 gap-4">
            {/* Left Panel: List */}
            <div className={`flex-1 flex flex-col min-w-0 bg-white border border-gray-200 overflow-hidden ${selectedRun ? 'hidden' : 'w-full'}`}>
                {/* Header */}
                <div className="p-4 border-b border-gray-200 space-y-3 bg-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-lg font-bold text-gray-900">SOD Runs</h1>
                            <p className="text-xs text-gray-500 mt-0.5">History of Start of Day processes</p>
                        </div>
                        <button
                            onClick={() => setIsRunModalOpen(true)}
                            className="flex items-center gap-2 px-3 py-1.5 bg-black text-white hover:bg-gray-800 transition-colors"
                        >
                            <Play size={12} />
                            Run SOD Manually
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                            <input
                                type="text"
                                placeholder="Search runs..."
                                className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:ring-1 focus:ring-black focus:border-gray-300"
                            />
                        </div>
                        <button className="p-1.5 text-gray-600 hover:bg-gray-50 border border-gray-200">
                            <Filter size={14} />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:bg-gray-50 border border-gray-200">
                            <Download size={14} />
                        </button>
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-900 sticky top-0 z-10">
                            <tr>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800 first:pl-6">Status</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800">Run ID</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800">Date & Time</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800">Duration</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800">User</th>
                                <th className="px-4 py-3 border-b border-slate-800 last:pr-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {runs.map((run) => (
                                <tr
                                    key={run.id}
                                    onClick={() => {
                                        setSelectedRun(run);
                                        setActiveTab('PnL Summary');
                                    }}
                                    className={`cursor-pointer transition-colors hover:bg-gray-50 group ${selectedRun?.id === run.id ? 'bg-blue-50/50' : ''}`}
                                >
                                    <td className="px-4 py-3 whitespace-nowrap first:pl-6">
                                        <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-medium border ${run.status === 'Success'
                                                ? 'bg-green-50 text-green-700 border-green-200'
                                                : 'bg-red-50 text-red-700 border-red-200'
                                            }`}>
                                            {run.status === 'Success' ? <CheckCircle2 size={10} className="mr-1" /> : <XCircle size={10} className="mr-1" />}
                                            {run.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-xs font-medium text-gray-900">
                                        {run.id}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-900">{run.date}</span>
                                            <span className="text-[10px] text-gray-500">{run.startTime}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={12} />
                                            {run.duration}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                                        {run.user}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-right text-gray-400 last:pr-6">
                                        <ChevronRight size={14} className={`transition-transform ${selectedRun?.id === run.id ? 'text-blue-600 translate-x-1' : 'group-hover:text-gray-600'}`} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Right Panel: Details */}
            {selectedRun && (
                <div className="w-full bg-white flex flex-col border border-gray-200 overflow-hidden h-full absolute inset-0 lg:static z-20 m-4 lg:m-0">
                    {/* Detail Header */}
                    <div className="bg-white border-b border-gray-200 p-4 flex items-start justify-between z-10">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <button
                                    onClick={() => setSelectedRun(null)}
                                    className="lg:hidden p-1 -ml-2 mr-1 text-gray-500 hover:bg-gray-100"
                                >
                                    <ChevronRight size={16} className="rotate-180" />
                                </button>
                                <h2 className="text-base font-bold text-gray-900">Run Details</h2>
                                <span className={`px-2 py-0.5 text-[10px] font-medium border ${selectedRun.status === 'Success'
                                        ? 'bg-green-50 text-green-700 border-green-200'
                                        : 'bg-red-50 text-red-700 border-red-200'
                                    }`}>
                                    {selectedRun.status}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 font-mono">{selectedRun.id}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-medium text-gray-900">{selectedRun.date}</p>
                            <p className="text-[10px] text-gray-500">{selectedRun.startTime} - {selectedRun.endTime}</p>
                        </div>
                    </div>

                    {/* Detail Content */}
                    <div className="flex-1 overflow-y-auto flex flex-col">
                        {selectedRun.error && (
                            <div className="m-4 p-3 bg-red-50 border border-red-200 flex items-start gap-2">
                                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={14} />
                                <div>
                                    <h3 className="text-xs font-bold text-red-900">Run Failed</h3>
                                    <p className="text-xs text-red-700 mt-0.5">{selectedRun.error}</p>
                                </div>
                            </div>
                        )}

                        {/* Tabs Interface */}
                        <div className="flex-1 flex flex-col bg-white border-t border-gray-200 overflow-hidden">
                            {/* Tabs Bar */}
                            <div className="border-b border-gray-200 bg-gray-50 overflow-x-auto flex-shrink-0">
                                <div className="flex items-end min-w-max">
                                    {[
                                        { id: 'PnL Summary', label: 'PnL Summary', type: 'selected' },
                                        { id: 'Income Summary', label: 'Income Summary', type: 'selected' },
                                        { id: 'Unsettled Summary', label: 'Unsettled Summary', type: 'selected' },
                                        { id: 'Cash and cash equivalents', label: 'Cash and cash equivalents', type: 'selected' },
                                        { id: 'Suspense Entries', label: 'Suspense Entries', type: 'selected' },
                                        { id: 'Trade Finance', label: 'Trade Finance', type: 'selected' },
                                        { id: 'Fixed Income Securities', label: 'Fixed Income Securities', type: 'selected' },
                                        { id: 'Payables', label: 'Payables', type: 'selected' },
                                        { id: 'Receivables', label: 'Receivables', type: 'selected' },
                                        { id: 'Amortisation Schedule', label: 'Amortisation Schedule', type: 'selected' },
                                        { id: 'Fx PnL', label: 'Fx PnL', type: 'orange' },
                                        { id: 'Fx Deals', label: 'Fx Deals', type: 'orange' },
                                        { id: 'Sheet2', label: 'Sheet2', type: 'orange' },
                                        { id: 'Fx Interdesk Balance', label: 'Fx Interdesk Balance', type: 'orange' },
                                        { id: 'Balances', label: 'Balances', type: 'grey' },
                                        { id: 'Reval Rates', label: 'Reval Rates', type: 'grey' },
                                        { id: 'trakin', label: 'trakin', type: 'grey' },
                                        { id: 'Receivables', label: 'Receivables', type: 'grey' },
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`relative px-4 py-2 text-sm font-medium transition-colors border-r border-gray-300 whitespace-nowrap ${
                                                activeTab === tab.id
                                                    ? 'bg-gray-200 text-gray-900 border-b-2 border-b-gray-400'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="flex-1 overflow-y-auto p-4">
                                {activeTab === 'PnL Summary' && <PnLSummaryTab />}
                                {activeTab === 'Income Summary' && <IncomeSummaryTab />}
                                {activeTab === 'Unsettled Summary' && <UnsettledSummaryTab />}
                                {activeTab === 'Cash and cash equivalents' && <CashAndCashEquivalentsTab />}
                                {activeTab === 'Suspense Entries' && <SuspenseEntriesTab />}
                                {activeTab === 'Trade Finance' && <TradeFinanceTab />}
                                {activeTab === 'Fixed Income Securities' && <FixedIncomeSecuritiesTab />}
                                {activeTab === 'Payables' && <PayablesTab />}
                                {activeTab === 'Receivables' && <ReceivablesTab />}

                                {activeTab === 'Amortisation Schedule' && <AmortisationScheduleTab />}

                                {activeTab === 'Fx PnL' && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Fx PnL</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Currency Pair</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Position</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">PnL</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD'].map((pair, idx) => (
                                                        <tr key={pair} className="hover:bg-gray-50">
                                                            <td className="p-3 text-sm text-gray-900">{pair}</td>
                                                            <td className="p-3 text-sm text-gray-700">{idx % 2 === 0 ? 'Long' : 'Short'}</td>
                                                            <td className={`p-3 text-sm font-medium ${idx % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                                ${(Math.random() * 10000).toFixed(2)}
                                                            </td>
                                                            <td className="p-3 text-sm text-gray-700">2024-01-{15 + idx}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Fx Deals' && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Fx Deals</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Deal ID</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Currency Pair</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Amount</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Rate</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {[1, 2, 3, 4, 5].map((deal) => (
                                                        <tr key={deal} className="hover:bg-gray-50">
                                                            <td className="p-3 text-sm text-gray-900">DEAL-{1000 + deal}</td>
                                                            <td className="p-3 text-sm text-gray-700">EUR/USD</td>
                                                            <td className="p-3 text-sm text-gray-700">${(deal * 10000).toLocaleString()}</td>
                                                            <td className="p-3 text-sm text-gray-700">1.{(850 + deal * 5) / 100}</td>
                                                            <td className="p-3">
                                                                <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                                                                    Active
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Sheet2' && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Sheet2</h3>
                                        <p className="text-sm text-gray-600">Sheet2 data content will be displayed here.</p>
                                    </div>
                                )}

                                {activeTab === 'Fx Interdesk Balance' && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Fx Interdesk Balance</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Desk</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Currency</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {['Trading Desk 1', 'Trading Desk 2', 'Trading Desk 3'].map((desk, idx) => (
                                                        <tr key={desk} className="hover:bg-gray-50">
                                                            <td className="p-3 text-sm text-gray-900">{desk}</td>
                                                            <td className="p-3 text-sm text-gray-700">USD</td>
                                                            <td className="p-3 text-sm text-gray-700">${((idx + 1) * 50000).toLocaleString()}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Balances' && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Balances</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Account</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Currency</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {['Account A', 'Account B', 'Account C'].map((account, idx) => (
                                                        <tr key={account} className="hover:bg-gray-50">
                                                            <td className="p-3 text-sm text-gray-900">{account}</td>
                                                            <td className="p-3 text-sm text-gray-700">USD</td>
                                                            <td className="p-3 text-sm text-gray-700">${((idx + 1) * 100000).toLocaleString()}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Reval Rates' && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Reval Rates</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Currency</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Rate</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {['EUR', 'GBP', 'JPY', 'AUD'].map((currency, idx) => (
                                                        <tr key={currency} className="hover:bg-gray-50">
                                                            <td className="p-3 text-sm text-gray-900">{currency}</td>
                                                            <td className="p-3 text-sm text-gray-700">1.{(850 + idx * 10) / 100}</td>
                                                            <td className="p-3 text-sm text-gray-700">2024-01-15</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'trakin' && <TrakinTab />}

                                {activeTab === 'Receivables' && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Receivables</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Invoice #</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Client</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Amount</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Due Date</th>
                                                        <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {[1, 2, 3, 4, 5].map((invoice) => (
                                                        <tr key={invoice} className="hover:bg-gray-50">
                                                            <td className="p-3 text-sm text-gray-900">INV-{2000 + invoice}</td>
                                                            <td className="p-3 text-sm text-gray-700">Client {invoice}</td>
                                                            <td className="p-3 text-sm text-gray-700">${(invoice * 5000).toLocaleString()}</td>
                                                            <td className="p-3 text-sm text-gray-700">2024-01-{20 + invoice}</td>
                                                            <td className="p-3">
                                                                <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border ${
                                                                    invoice % 2 === 0 
                                                                        ? 'bg-green-50 text-green-700 border-green-200' 
                                                                        : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                                                }`}>
                                                                    {invoice % 2 === 0 ? 'Paid' : 'Pending'}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Run SOD Modal */}
            {isRunModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md overflow-hidden border border-gray-200">
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                            <h3 className="text-base font-bold text-gray-900">Run Start of Day</h3>
                            {!isProcessing && (
                                <button onClick={() => setIsRunModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                    <X size={18} />
                                </button>
                            )}
                        </div>

                        <div className="p-6">
                            {!isProcessing ? (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Select Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                            <input
                                                type="date"
                                                value={runDate}
                                                onChange={(e) => setRunDate(e.target.value)}
                                                className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-3 bg-blue-50 border border-blue-100 text-blue-700 text-xs">
                                        <p className="font-medium mb-1">Note:</p>
                                        <p>Running SOD will generate all daily reports and archive transactions for the selected date. This process usually takes 2-3 minutes.</p>
                                    </div>

                                    <button
                                        onClick={handleStartRun}
                                        className="w-full py-2.5 bg-black text-white font-medium text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Play size={16} />
                                        Start Process
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
                                            <Loader2 size={24} className="animate-spin" />
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-900">Processing SOD...</h4>
                                        <p className="text-xs text-gray-500 mt-1">Please wait while we complete the steps</p>
                                    </div>

                                    <div className="space-y-3">
                                        {liveSteps.map((step, idx) => (
                                            <div key={idx} className="flex items-center justify-between text-xs">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 flex items-center justify-center border ${step.status === 'Success' ? 'bg-green-100 border-green-200 text-green-600' :
                                                            step.status === 'Pending' && idx === currentStepIndex ? 'bg-blue-100 border-blue-200 text-blue-600' :
                                                                'bg-gray-50 border-gray-100 text-gray-300'
                                                        }`}>
                                                        {step.status === 'Success' ? <CheckCircle2 size={12} /> :
                                                            step.status === 'Pending' && idx === currentStepIndex ? <Loader2 size={12} className="animate-spin" /> :
                                                                <span className="text-[10px] font-medium">{idx + 1}</span>}
                                                    </div>
                                                    <span className={`${step.status === 'Success' ? 'text-gray-900 font-medium' :
                                                            step.status === 'Pending' && idx === currentStepIndex ? 'text-blue-700 font-bold' :
                                                                'text-gray-400'
                                                        }`}>{step.name}</span>
                                                </div>
                                                {step.status === 'Success' && <span className="text-green-600 font-medium">Done</span>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SODRuns;
