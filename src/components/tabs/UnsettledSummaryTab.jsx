import React from 'react';

const UnsettledSummaryTab = () => {
    return (
        <div className="space-y-6">
            {/* NOP Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">NOP (Net Open Position)</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm border border-gray-900">
                        <thead>
                            <tr>
                                <th className="text-left text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">Currency</th>
                                <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">Buy Position</th>
                                <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">Sell Position</th>
                                <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">Net Position</th>
                                <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">Rate</th>
                                <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">USD Equivalent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['USD', 'EUR', 'GBP', 'JPY', 'ZAR', 'ZWL'].map((currency) => {
                                const buyPosition = (Math.random() * 10000000 + 1000000).toFixed(2);
                                const sellPosition = (Math.random() * 10000000 + 1000000).toFixed(2);
                                const netPosition = (parseFloat(buyPosition) - parseFloat(sellPosition)).toFixed(2);
                                const rate = (Math.random() * 2 + 0.5).toFixed(4);
                                const usdEquivalent = (parseFloat(netPosition) * parseFloat(rate)).toFixed(2);
                                return (
                                    <tr key={currency}>
                                        <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-900">{currency}</td>
                                        <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">{parseFloat(buyPosition).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                        <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">{parseFloat(sellPosition).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                        <td className={`bg-white p-2 border border-gray-900 text-right font-medium ${parseFloat(netPosition) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {parseFloat(netPosition) >= 0 ? '+' : ''}{parseFloat(netPosition).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </td>
                                        <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">{rate}</td>
                                        <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">{parseFloat(usdEquivalent).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td className="bg-gray-200 text-gray-900 font-bold p-2 border border-gray-900">Total</td>
                                <td className="bg-gray-200 text-gray-900 font-bold p-2 border border-gray-900 text-right">-</td>
                                <td className="bg-gray-200 text-gray-900 font-bold p-2 border border-gray-900 text-right">-</td>
                                <td className="bg-gray-200 text-gray-900 font-bold p-2 border border-gray-900 text-right">-</td>
                                <td className="bg-gray-200 text-gray-900 font-bold p-2 border border-gray-900 text-right">-</td>
                                <td className="bg-gray-200 text-gray-900 font-bold p-2 border border-gray-900 text-right">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Unsettled Summary Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900 bg-blue-100 px-4 py-2 border border-purple-600">Unsettled Summary</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm border border-purple-600">
                        <thead>
                            <tr>
                                <th className="text-left text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800 sticky left-0 z-10">Currency</th>
                                {['ET', 'Marongwe', 'Muchenge', 'Tatenda', 'Tinashe', 'Upenyu', 'LC Outstanding'].map((entity) => (
                                    <React.Fragment key={entity}>
                                        <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800" colSpan="2">{entity}</th>
                                    </React.Fragment>
                                ))}
                            </tr>
                            <tr>
                                <th className="text-left text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800 sticky left-0 z-10"></th>
                                {['ET', 'Marongwe', 'Muchenge', 'Tatenda', 'Tinashe', 'Upenyu', 'LC Outstanding'].map((entity) => (
                                    <React.Fragment key={entity}>
                                        <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">Receivables</th>
                                        <th className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">Payables</th>
                                    </React.Fragment>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* USD Row */}
                            <tr>
                                <td className="bg-gray-200 text-gray-700 font-semibold p-2 border border-purple-600 sticky left-0 z-10">USD</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">5,340.00</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">0.00</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">0.80</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">0.41</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">-</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">-</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">60.00</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">-</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">898.29</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">0.19</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">3.00</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">0.82</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">-</td>
                                <td className="bg-white text-gray-900 p-2 border border-purple-600 text-right">-</td>
                            </tr>
                            {/* ZAR Row */}
                            <tr>
                                <td className="bg-gray-200 text-gray-700 font-semibold p-2 border border-purple-600 sticky left-0 z-10">ZAR</td>
                                {Array.from({ length: 14 }).map((_, i) => (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-purple-600 text-right">-</td>
                                ))}
                            </tr>
                            {/* ZWL Row */}
                            <tr>
                                <td className="bg-gray-200 text-gray-700 font-semibold p-2 border border-purple-600 sticky left-0 z-10">ZWL</td>
                                {Array.from({ length: 14 }).map((_, i) => (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-purple-600 text-right">-</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UnsettledSummaryTab;

