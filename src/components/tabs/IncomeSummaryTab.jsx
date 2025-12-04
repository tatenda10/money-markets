import React from 'react';

const IncomeSummaryTab = () => {
    const currentDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' });
    
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-gray-900">Income Summary as at</h2>
                    <span className="text-xl font-bold text-orange-600 bg-orange-100 px-3 py-1 border border-orange-300">
                        {currentDate}
                    </span>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm border border-gray-900">
                    <thead>
                        <tr>
                            <th className="text-left text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800 w-64"></th>
                            <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">YtD- previous month</th>
                            <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">Daily</th>
                            <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">MtD</th>
                            <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">YtD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Fixed Income Section */}
                        <tr>
                            <td className="bg-blue-100 text-blue-900 font-semibold p-2 border border-gray-900">Fixed Income</td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                        </tr>
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 pl-6">Net Interest Income</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">34,858.00</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">(5,722.42)</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">(47,597.65)</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">(12,739.38)</td>
                        </tr>
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 pl-6">Net Deal Fees</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">(4,962.00)</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">(4,962.00)</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-200 text-gray-900 font-bold p-2 border border-gray-900">Total Income(Loss)</td>
                            <td className="bg-gray-200 text-gray-900 font-bold p-2 border border-gray-900 text-right">29,896.00</td>
                            <td className="bg-white text-gray-900 font-bold p-2 border border-gray-900 text-right">(5,722.42)</td>
                            <td className="bg-white text-gray-900 font-bold p-2 border border-gray-900 text-right">(47,597.65)</td>
                            <td className="bg-white text-gray-900 font-bold p-2 border border-gray-900 text-right">(17,701.38)</td>
                        </tr>
                        
                        {/* FX Trading Income Section */}
                        <tr>
                            <td className="bg-blue-100 text-blue-900 font-semibold p-2 border border-gray-900">FX Trading Income</td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                        </tr>
                        <tr>
                            <td className="bg-gray-200 text-gray-700 font-medium p-2 border border-gray-900 pl-6">Total Fx Income</td>
                            <td className="bg-gray-200 text-gray-900 p-2 border border-gray-900 text-right">108,223.00</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">(1,372.58)</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">108,222.77</td>
                        </tr>
                        
                        {/* LC Issuance Income Section */}
                        <tr>
                            <td className="bg-blue-100 text-blue-900 font-semibold p-2 border border-gray-900">LC Issuance Income</td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                        </tr>
                        <tr>
                            <td className="bg-gray-200 text-gray-700 font-medium p-2 border border-gray-900 pl-6">Net Fee Income</td>
                            <td className="bg-gray-200 text-gray-900 p-2 border border-gray-900 text-right">3,162.69</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">3,162.69</td>
                        </tr>
                        
                        {/* Other Income Section */}
                        <tr>
                            <td className="bg-blue-100 text-blue-900 font-semibold p-2 border border-gray-900">Other Income</td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                        </tr>
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 pl-6"></td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                        </tr>
                        
                        {/* Other Costs Section */}
                        <tr>
                            <td className="bg-blue-100 text-blue-900 font-semibold p-2 border border-gray-900">Other Costs</td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                            <td className="bg-blue-100 border border-gray-900"></td>
                        </tr>
                        <tr>
                            <td className="bg-gray-200 text-gray-700 font-medium p-2 border border-gray-900 pl-6">Other Costs</td>
                            <td className="bg-gray-200 text-gray-900 p-2 border border-gray-900 text-right">(19,154.00)</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">3,171.62</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">(19,154.05)</td>
                        </tr>
                        
                        {/* Final Total Row */}
                        <tr>
                            <td className="bg-gray-200 text-gray-900 font-bold p-2 border border-gray-900">Total</td>
                            <td className="bg-gray-200 text-gray-900 font-bold p-2 border border-gray-900 text-right">122,127.67</td>
                            <td className="bg-white text-gray-900 font-bold p-2 border border-gray-900 text-right">(3,923.39)</td>
                            <td className="bg-white text-gray-900 font-bold p-2 border border-gray-900 text-right">(47,597.65)</td>
                            <td className="bg-white text-gray-900 font-bold p-2 border border-gray-900 text-right">74,530.03</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IncomeSummaryTab;

