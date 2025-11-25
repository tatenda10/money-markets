import React from 'react';
import { Download, Filter, Settings, Search, Calendar, ChevronDown } from 'lucide-react';

const CashRecon = () => {
    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 border border-gray-200">
                <div className="flex items-center gap-4">
                    <h1 className="text-lg font-bold text-gray-900">Cash Reconciliation</h1>
                    <div className="h-6 w-px bg-gray-200"></div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 border border-gray-200">
                        <Calendar size={16} />
                        <span>Today: 14 Oct 2022</span>
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
                                <th colSpan="3" className="p-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-r border-gray-200 bg-blue-50/30">Nostro Balances</th>
                                <th colSpan="3" className="p-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-r border-gray-200 bg-green-50/30">Cash Recon</th>
                                <th colSpan="3" className="p-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200 bg-purple-50/30">Difference</th>
                            </tr>
                            <tr className="bg-gray-50/50">
                                <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 border-r border-gray-200 min-w-[200px]">Account</th>
                                {/* Nostro Headers */}
                                <th className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200 bg-blue-50/10">USD</th>
                                <th className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200 bg-blue-50/10">ZAR</th>
                                <th className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200 bg-blue-50/10">ZWL</th>
                                {/* Cash Recon Headers */}
                                <th className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200 bg-green-50/10">USD</th>
                                <th className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200 bg-green-50/10">ZAR</th>
                                <th className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200 bg-green-50/10">ZWL</th>
                                {/* Difference Headers */}
                                <th className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200 bg-purple-50/10">USD</th>
                                <th className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200 bg-purple-50/10">ZAR</th>
                                <th className="p-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] border-r border-gray-200 bg-purple-50/10">ZWL</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[
                                { name: 'ABC Bank - Operating', usd_n: '1,245,000.00', zar_n: '500,000.00', zwl_n: '-', usd_c: '1,245,000.00', zar_c: '500,000.00', zwl_c: '-', usd_d: '-', zar_d: '-', zwl_d: '-' },
                                { name: 'XYZ Bank - Settlement', usd_n: '850,230.50', zar_n: '-', zwl_n: '15,000,000.00', usd_c: '850,230.50', zar_c: '-', zwl_c: '15,000,000.00', usd_d: '-', zar_d: '-', zwl_d: '-' },
                                { name: 'Global Custody', usd_n: '5,600,120.00', zar_n: '12,450,000.00', zwl_n: '-', usd_c: '5,600,120.00', zar_c: '12,450,000.00', zwl_c: '-', usd_d: '-', zar_d: '-', zwl_d: '-' },
                                { name: 'Local Suspense', usd_n: '12,500.00', zar_n: '5,000.00', zwl_n: '120,000.00', usd_c: '12,000.00', zar_c: '5,000.00', zwl_c: '120,000.00', usd_d: '500.00', zar_d: '-', zwl_d: '-', hasDiff: true },
                                { name: 'Treasury Main', usd_n: '10,000,000.00', zar_n: '25,000,000.00', zwl_n: '500,000,000.00', usd_c: '10,000,000.00', zar_c: '25,000,000.00', zwl_c: '500,000,000.00', usd_d: '-', zar_d: '-', zwl_d: '-' },
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-200">{row.name}</td>
                                    {/* Nostro */}
                                    <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100 bg-blue-50/5">{row.usd_n}</td>
                                    <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100 bg-blue-50/5">{row.zar_n}</td>
                                    <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100 bg-blue-50/5">{row.zwl_n}</td>
                                    {/* Cash Recon */}
                                    <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100 bg-green-50/5">{row.usd_c}</td>
                                    <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100 bg-green-50/5">{row.zar_c}</td>
                                    <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-100 bg-green-50/5">{row.zwl_c}</td>
                                    {/* Difference */}
                                    <td className={`p-3 text-sm text-right border-r border-gray-100 bg-purple-50/5 ${row.hasDiff ? 'text-red-600 font-bold' : 'text-gray-400'}`}>{row.usd_d}</td>
                                    <td className={`p-3 text-sm text-right border-r border-gray-100 bg-purple-50/5 ${row.hasDiff ? 'text-red-600 font-bold' : 'text-gray-400'}`}>{row.zar_d}</td>
                                    <td className={`p-3 text-sm text-right border-r border-gray-100 bg-purple-50/5 ${row.hasDiff ? 'text-red-600 font-bold' : 'text-gray-400'}`}>{row.zwl_d}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-100 font-bold">
                            <tr>
                                <td className="p-3 text-sm text-gray-900 sticky left-0 bg-gray-100 border-r border-gray-200">Total</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">17,707,850.50</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">37,955,000.00</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">515,120,000.00</td>

                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">17,707,350.50</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">37,955,000.00</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">515,120,000.00</td>

                                <td className="p-3 text-sm text-right text-red-600 border-r border-gray-200">500.00</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">-</td>
                                <td className="p-3 text-sm text-right text-gray-900 border-r border-gray-200">-</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CashRecon;
