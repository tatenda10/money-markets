import React from 'react';
import { Download, Filter, Settings, Search, MoreHorizontal, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const Transactions = () => {
    const transactions = [
        { id: 'DL-2023-001', type: 'Spot', cp: 'ABC Bank', ccy: 'USD/ZAR', amt: '1,000,000.00', rate: '18.4500', date: '23 Nov 2025', status: 'Settled', dir: 'Buy' },
        { id: 'DL-2023-002', type: 'Forward', cp: 'XYZ Corp', ccy: 'GBP/USD', amt: '500,000.00', rate: '1.2450', date: '25 Nov 2025', status: 'Pending', dir: 'Sell' },
        { id: 'DL-2023-003', type: 'Swap', cp: 'Global Fund', ccy: 'EUR/USD', amt: '2,500,000.00', rate: '1.0820', date: '23 Nov 2025', status: 'Settled', dir: 'Buy' },
        { id: 'DL-2023-004', type: 'Spot', cp: 'Local Bank', ccy: 'USD/JPY', amt: '150,000.00', rate: '149.50', date: '23 Nov 2025', status: 'Failed', dir: 'Sell' },
        { id: 'DL-2023-005', type: 'Spot', cp: 'ABC Bank', ccy: 'USD/ZAR', amt: '750,000.00', rate: '18.4200', date: '23 Nov 2025', status: 'Settled', dir: 'Buy' },
        { id: 'DL-2023-006', type: 'Forward', cp: 'Tech Inc', ccy: 'USD/CNY', amt: '2,000,000.00', rate: '7.2500', date: '30 Dec 2025', status: 'Pending', dir: 'Sell' },
        { id: 'DL-2023-007', type: 'Spot', cp: 'Investment Co', ccy: 'AUD/USD', amt: '800,000.00', rate: '0.6520', date: '24 Nov 2025', status: 'Settled', dir: 'Buy' },
        { id: 'DL-2023-008', type: 'Swap', cp: 'Merchant Bank', ccy: 'CHF/USD', amt: '1,200,000.00', rate: '1.1150', date: '23 Nov 2025', status: 'Settled', dir: 'Sell' },
        { id: 'DL-2023-009', type: 'Forward', cp: 'Trade Corp', ccy: 'CAD/USD', amt: '950,000.00', rate: '0.7280', date: '28 Nov 2025', status: 'Pending', dir: 'Buy' },
        { id: 'DL-2023-010', type: 'Spot', cp: 'Finance Ltd', ccy: 'NZD/USD', amt: '600,000.00', rate: '0.5980', date: '23 Nov 2025', status: 'Settled', dir: 'Sell' },
    ];

    return (
        <div className="space-y-4">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 border border-gray-200">
                <div className="flex items-center gap-4">
                    <h1 className="text-lg font-bold text-gray-900">Transactions</h1>
                    <div className="h-6 w-px bg-gray-200"></div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 border border-gray-200">
                        <Search size={16} />
                        <input type="text" placeholder="Search transactions..." className="bg-transparent border-none focus:outline-none text-sm w-48" />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-200">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-200">
                        <Settings size={16} />
                        Columns
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors">
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </div>

            <div className="bg-white border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-900 sticky top-0 z-10">
                            <tr>
                                <th className="w-10 px-4 py-3 border-b border-slate-800">
                                    <input type="checkbox" className="border-gray-300 text-black focus:ring-black rounded" />
                                </th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800">Deal ID</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800">Type</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800">Counterparty</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800">Currency</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800 text-right">Amount</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800 text-right">Rate</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800">Value Date</th>
                                <th className="px-4 py-3 text-[10px] font-semibold text-white uppercase tracking-wider border-b border-slate-800">Status</th>
                                <th className="w-10 px-4 py-3 border-b border-slate-800"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {transactions.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 group transition-colors">
                                    <td className="px-4 py-3">
                                        <input type="checkbox" className="border-gray-300 text-black focus:ring-black rounded" />
                                    </td>
                                    <td className="px-4 py-3 text-xs font-medium text-gray-900">{row.id}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <span className={`p-1 rounded ${row.dir === 'Buy' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                {row.dir === 'Buy' ? <ArrowDownLeft size={12} /> : <ArrowUpRight size={12} />}
                                            </span>
                                            <span className="text-xs text-gray-700">{row.type}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-xs text-gray-700">{row.cp}</td>
                                    <td className="px-4 py-3 text-xs text-gray-700 font-mono">{row.ccy}</td>
                                    <td className="px-4 py-3 text-xs text-right font-medium text-gray-900">{row.amt}</td>
                                    <td className="px-4 py-3 text-xs text-right text-gray-500 font-mono">{row.rate}</td>
                                    <td className="px-4 py-3 text-xs text-gray-500">{row.date}</td>
                                    <td className="px-4 py-3">
                                        <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-medium border ${row.status === 'Settled' 
                                                ? 'bg-green-50 text-green-700 border-green-200' 
                                                : row.status === 'Pending' 
                                                ? 'bg-blue-50 text-blue-700 border-blue-200' 
                                                : 'bg-red-50 text-red-700 border-red-200'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between bg-gray-50">
                    <p className="text-xs text-gray-500">Showing 10 of 128 transactions</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 hover:bg-white transition-colors">Previous</button>
                        <button className="px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 hover:bg-white transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
