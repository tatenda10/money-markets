import React from 'react';
import { Download, Filter, Settings, Search } from 'lucide-react';

const PnLSummary = () => {
    const dates = ['4-OCT', '5-OCT', '6-OCT', '7-OCT', '10-OCT', '11-OCT', '12-OCT', '13-OCT', '14-OCT'];

    return (
        <div className="space-y-4">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3 border border-gray-200">
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
                    <table className="min-w-full border-collapse text-xs">
                        <thead>
                            <tr>
                                <th scope="col" className="px-4 py-3 text-left text-[10px] font-semibold text-white bg-slate-900 uppercase tracking-wider sticky left-0 z-10 border-r border-slate-800 min-w-[150px]">
                                    METRIC
                                </th>
                                {dates.map(date => (
                                    <th key={date} scope="col" className="px-4 py-3 text-center text-[10px] font-semibold text-white bg-slate-900 uppercase tracking-wider min-w-[80px] border border-slate-800">
                                        {date}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Total Trading Book PnL */}
                            <tr className="bg-slate-900">
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-white sticky left-0 bg-slate-900 border-r border-slate-800">
                                    Total Trading book PnL
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-700 pl-6 sticky left-0 bg-white border-r border-gray-200">Realised PnL</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+56,319.24</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-98,261.16</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-59,717.35</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-91,556.90</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+24,442.64</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+27,427.58</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+69,203.61</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-15,122.39</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+43,321.71</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-700 pl-6 sticky left-0 bg-white border-r border-gray-200">Unrealised PnL</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+11,823.78</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+61,721.28</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+1,136.83</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-45,234.97</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-575.12</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+44,114.86</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-64,629.21</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-57,785.46</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+63,988.71</td>
                            </tr>

                            {/* NOP Revaluation */}
                            <tr className="bg-slate-900">
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-white sticky left-0 bg-slate-900 border-r border-slate-800">
                                    NOP (T-1) Revaluation PnL
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-700 pl-6 sticky left-0 bg-white border-r border-gray-200">NOP (T-1) Revaluation PnL</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-7,228.36</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+2,640.05</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+18,172.85</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+3,613.64</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+23,749.99</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+16,867.03</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-11,324.81</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+6,539.75</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+8,931.78</td>
                            </tr>

                            {/* Spacer */}
                            <tr className="h-4 bg-gray-50"><td colSpan={dates.length + 1}></td></tr>

                            {/* Totals */}
                            <tr className="bg-slate-900">
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-white sticky left-0 bg-slate-900 border-r border-slate-800">PnL after IMMT</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-white text-center bg-slate-900">-</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-medium text-gray-900 sticky left-0 bg-gray-100 border-r border-gray-200">Total PnL</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 font-medium text-center">-66,336.64</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 font-medium text-center">+12,355.44</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 font-medium text-center">+24,985.64</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 font-medium text-center">-101,641.88</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 font-medium text-center">-61,163.31</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 font-medium text-center">+97,760.87</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 font-medium text-center">+51,911.65</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 font-medium text-center">-87,385.68</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 font-medium text-center">+153,280.33</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-medium text-gray-700 sticky left-0 bg-white border-r border-gray-200">IMMT</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+13,181.60</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+11,118.04</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-5,939.22</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+4,098.45</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+14,601.03</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-1,226.34</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-2,928.09</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">-1,024.68</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900 text-center">+2,928.28</td>
                            </tr>
                            <tr className="bg-slate-900 text-white">
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold sticky left-0 bg-slate-900 border-r border-slate-800">Total PnL after IMMT</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-center bg-slate-900">+45,074.18</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-center bg-slate-900">+71,947.23</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-center bg-slate-900">-139,384.49</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-center bg-slate-900">-88,444.28</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-center bg-slate-900">-5,586.54</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-center bg-slate-900">+19,866.64</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-center bg-slate-900">+29,176.94</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-center bg-slate-900">+13,135.04</td>
                                <td className="px-4 py-3 whitespace-nowrap text-xs font-semibold text-center bg-slate-900">-89,562.47</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PnLSummary;
