import React from 'react';
import { Download, Filter, Settings, Search, MoreHorizontal, ChevronDown } from 'lucide-react';

const PnLSummary = () => {
    const dates = ['4-Oct', '5-Oct', '6-Oct', '7-Oct', '10-Oct', '11-Oct', '12-Oct', '13-Oct', '14-Oct'];

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 border border-gray-200">
                <div className="flex items-center gap-4">
                    <h1 className="text-lg font-bold text-gray-900">PnL Summary</h1>
                    <div className="h-6 w-px bg-gray-200"></div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 border border-gray-200">
                        <Search size={16} />
                        <input type="text" placeholder="Search data..." className="bg-transparent border-none focus:outline-none text-sm w-40" />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-200">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-200">
                        <Settings size={16} />
                        Customize
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors">
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </div>

            {/* Main Table Card */}
            <div className="bg-white border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 border-r border-gray-200 min-w-[200px]">
                                    Metric
                                </th>
                                {dates.map(date => (
                                    <th key={date} scope="col" className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                                        {date}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Total Trading Book PnL */}
                            <tr className="bg-blue-50/30">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 sticky left-0 bg-blue-50/30 border-r border-blue-100">
                                    Total Trading book PnL
                                </td>
                                {dates.map((_, i) => <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>)}
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 pl-10 sticky left-0 bg-white border-r border-gray-200">Realised PnL</td>
                                {dates.map((_, i) => <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>)}
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 pl-10 sticky left-0 bg-white border-r border-gray-200">Unrealised PnL</td>
                                {dates.map((_, i) => <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>)}
                            </tr>

                            {/* NOP Revaluation */}
                            <tr className="bg-blue-50/30">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 sticky left-0 bg-blue-50/30 border-r border-blue-100">
                                    NOP (T-1) Revaluation PnL
                                </td>
                                {dates.map((_, i) => <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>)}
                            </tr>

                            {/* Spacer */}
                            <tr className="h-8 bg-gray-50/50"><td colSpan={dates.length + 1}></td></tr>

                            {/* Totals */}
                            <tr className="bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 sticky left-0 bg-gray-100 border-r border-gray-200">Total PnL</td>
                                {dates.map((_, i) => <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium text-center">-</td>)}
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-200">IMMT</td>
                                {dates.map((_, i) => <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>)}
                            </tr>
                            <tr className="bg-gray-800 text-white">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold sticky left-0 bg-gray-800 border-r border-gray-700">Total PnL after IMMT</td>
                                {dates.map((_, i) => <td key={i} className="px-6 py-4 whitespace-nowrap text-sm font-bold text-center">-</td>)}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PnLSummary;
