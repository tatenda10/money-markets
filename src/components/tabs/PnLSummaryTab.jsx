import React from 'react';

const PnLSummaryTab = () => {
    const dates = ['4-OCT', '5-OCT', '6-OCT', '7-OCT', '10-OCT', '11-OCT', '12-OCT', '13-OCT', '14-OCT'];

    return (
        <div className="space-y-1">
            <div className="flex items-center justify-between mb-1">
                <h2 className="text-xs font-bold text-gray-900">Lincoln Capital Fx PnL Summary</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[9px]">
                    <thead>
                        <tr>
                            <th className="text-left text-[9px] font-medium text-white bg-slate-900 p-1 border border-slate-800 sticky left-0 z-10">METRIC</th>
                            {dates.map((date) => (
                                <th key={date} className="text-center text-[9px] font-medium text-white bg-slate-900 p-1 border border-slate-800">
                                    {date}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Total Trading book PnL Section */}
                        <tr>
                            <td colSpan="10" className="bg-slate-900 text-white font-semibold p-1 border border-slate-800 text-[9px]">Total Trading book PnL</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-1 border border-gray-300 text-[9px]">Realised PnL</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+56,319.24</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-98,261.16</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-59,717.35</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-91,556.90</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+24,442.64</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+27,427.58</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+69,203.61</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-15,122.39</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+43,321.71</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-1 border border-gray-300 text-[9px]">Unrealised PnL</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+11,823.78</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+61,721.28</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+1,136.83</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-45,234.97</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-575.12</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+44,114.86</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-64,629.21</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-57,785.46</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+63,988.71</td>
                        </tr>
                        
                        {/* NOP (T-1) Revaluation PnL Section */}
                        <tr>
                            <td colSpan="10" className="bg-slate-900 text-white font-semibold p-1 border border-slate-800 text-[9px]">NOP (T-1) Revaluation PnL</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-1 border border-gray-300 text-[9px]">NOP (T-1) Revaluation PnL</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-7,228.36</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+2,640.05</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+18,172.85</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+3,613.64</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+23,749.99</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+16,867.03</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-11,324.81</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+6,539.75</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+8,931.78</td>
                        </tr>
                        
                        {/* PnL after IMMT Section */}
                        <tr>
                            <td colSpan="10" className="bg-slate-900 text-white font-semibold p-1 border border-slate-800 text-[9px]">PnL after IMMT</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-1 border border-gray-300 text-[9px]">Total PnL</td>
                            <td className="bg-gray-50 text-gray-900 p-1 border border-gray-300 text-center text-[9px] font-medium">-66,336.64</td>
                            <td className="bg-gray-50 text-gray-900 p-1 border border-gray-300 text-center text-[9px] font-medium">+12,355.44</td>
                            <td className="bg-gray-50 text-gray-900 p-1 border border-gray-300 text-center text-[9px] font-medium">+24,985.64</td>
                            <td className="bg-gray-50 text-gray-900 p-1 border border-gray-300 text-center text-[9px] font-medium">-101,641.88</td>
                            <td className="bg-gray-50 text-gray-900 p-1 border border-gray-300 text-center text-[9px] font-medium">-61,163.31</td>
                            <td className="bg-gray-50 text-gray-900 p-1 border border-gray-300 text-center text-[9px] font-medium">+97,760.87</td>
                            <td className="bg-gray-50 text-gray-900 p-1 border border-gray-300 text-center text-[9px] font-medium">+51,911.65</td>
                            <td className="bg-gray-50 text-gray-900 p-1 border border-gray-300 text-center text-[9px] font-medium">-87,385.68</td>
                            <td className="bg-gray-50 text-gray-900 p-1 border border-gray-300 text-center text-[9px] font-medium">+153,280.33</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-1 border border-gray-300 text-[9px]">IMMT</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+13,181.60</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+11,118.04</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-5,939.22</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+4,098.45</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+14,601.03</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-1,226.34</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-2,928.09</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">-1,024.68</td>
                            <td className="bg-white text-gray-900 p-1 border border-gray-300 text-center text-[9px]">+2,928.28</td>
                        </tr>
                        <tr>
                            <td colSpan="10" className="bg-slate-900 text-white font-semibold p-1 border border-slate-800 text-[9px]">Total PnL after IMMT</td>
                        </tr>
                        <tr>
                            <td className="bg-slate-900 text-white font-medium p-1 border border-gray-300 text-[9px]">Total PnL after IMMT</td>
                            <td className="bg-slate-900 text-white p-1 border border-gray-300 text-center text-[9px] font-medium">+45,074.18</td>
                            <td className="bg-slate-900 text-white p-1 border border-gray-300 text-center text-[9px] font-medium">+71,947.23</td>
                            <td className="bg-slate-900 text-white p-1 border border-gray-300 text-center text-[9px] font-medium">-139,384.49</td>
                            <td className="bg-slate-900 text-white p-1 border border-gray-300 text-center text-[9px] font-medium">-88,444.28</td>
                            <td className="bg-slate-900 text-white p-1 border border-gray-300 text-center text-[9px] font-medium">-5,586.54</td>
                            <td className="bg-slate-900 text-white p-1 border border-gray-300 text-center text-[9px] font-medium">+19,866.64</td>
                            <td className="bg-slate-900 text-white p-1 border border-gray-300 text-center text-[9px] font-medium">+29,176.94</td>
                            <td className="bg-slate-900 text-white p-1 border border-gray-300 text-center text-[9px] font-medium">+13,135.04</td>
                            <td className="bg-slate-900 text-white p-1 border border-gray-300 text-center text-[9px] font-medium">-89,562.47</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PnLSummaryTab;
