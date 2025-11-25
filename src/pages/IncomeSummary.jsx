import React from 'react';
import { Download, Filter, Settings, Search, Calendar } from 'lucide-react';

const IncomeSummary = () => {
    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 border border-gray-200">
                <div className="flex items-center gap-4">
                    <h1 className="text-lg font-bold text-gray-900">Income Summary</h1>
                    <div className="h-6 w-px bg-gray-200"></div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 border border-gray-200">
                        <Calendar size={16} />
                        <span>Dec 2022</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-200">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors">
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </div>

            <div className="bg-white border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border-collapse">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="p-3 border-b border-r border-gray-200 bg-white sticky left-0 z-20"></th>
                                <th colSpan="4" className="p-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-r border-gray-200">Overnight Balances</th>
                                <th colSpan="4" className="p-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-r border-gray-200">Movement</th>
                                <th colSpan="4" className="p-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">EOD Balances</th>
                            </tr>
                            <tr className="bg-gray-50/50">
                                <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 border-r border-gray-200 min-w-[200px]">Category</th>
                                {['USD', 'ZAR', 'ZWL', 'USD Consol'].map((curr, i) => (
                                    <th key={`ob-${i}`} className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200">{curr}</th>
                                ))}
                                {['USD', 'ZAR', 'ZWL', 'USD Consol'].map((curr, i) => (
                                    <th key={`mv-${i}`} className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200">{curr}</th>
                                ))}
                                {['USD', 'ZAR', 'ZWL', 'USD Consol'].map((curr, i) => (
                                    <th key={`eod-${i}`} className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200">{curr}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Fixed Income Section */}
                            <tr className="bg-blue-50/30">
                                <td className="p-3 text-sm font-bold text-gray-900 sticky left-0 bg-blue-50/30 border-r border-blue-100">Fixed Income</td>
                                <td colSpan="12"></td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-200 pl-6">Interest Income</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100">30,415.72</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100">6,965,315.74</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100">36,794.10</td>
                                {/* Movement */}
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                {/* EOD */}
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100 font-medium">30,415.72</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100">6,965,315.74</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100">17,639.49</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-3 text-sm text-gray-500 sticky left-0 bg-white border-r border-gray-200 pl-10 italic">Interest Receivable</td>
                                <td colSpan="12"></td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-200 pl-6">Interest Paid</td>
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-100">(23,946.88)</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-100">(567,651.03)</td>
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-100">(26,217.48)</td>
                                {/* Movement */}
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-100">(5,722.42)</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-100">(5,722.42)</td>
                                {/* EOD */}
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-100 font-medium">(29,669.30)</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-100">(567,651.03)</td>
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-100">(30,378.86)</td>
                            </tr>

                            {/* FX Trading Income Section */}
                            <tr className="bg-blue-50/30">
                                <td className="p-3 text-sm font-bold text-gray-900 sticky left-0 bg-blue-50/30 border-r border-blue-100">FX Trading Income</td>
                                <td colSpan="12"></td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-200 pl-6">Total Fx Income</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100">109,624.74</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100">109,624.74</td>
                                {/* Movement */}
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-100">(1,372.58)</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-100">(1,372.58)</td>
                                {/* EOD */}
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100 font-medium">108,252.16</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-100">-</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100">108,252.16</td>
                            </tr>
                        </tbody>
                        <tfoot className="bg-gray-100 font-bold">
                            <tr>
                                <td className="p-3 text-sm text-gray-900 sticky left-0 bg-gray-100 border-r border-gray-200">Total Operating Income</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">108,659.29</td>
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-200">(242,148.36)</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">6,397,664.71</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">96,076.38</td>
                                {/* Movement */}
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-200">(3,923.39)</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-200">-</td>
                                <td className="p-3 text-sm text-right text-gray-500 border-r border-gray-200">-</td>
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-200">(3,923.39)</td>
                                {/* EOD */}
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">104,735.90</td>
                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-200">(242,148.36)</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">6,397,664.71</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">74,559.42</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default IncomeSummary;
