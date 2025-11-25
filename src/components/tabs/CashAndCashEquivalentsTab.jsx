import React from 'react';

const CashAndCashEquivalentsTab = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-gray-900">Cash and cash equivalents recon report</h2>
                    <span className="text-sm text-gray-600">
                        {formattedDate}
                    </span>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm border border-gray-900">
                    <thead>
                        <tr>
                            <th className="text-left text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-900 sticky left-0 z-10 w-64"></th>
                            <th colSpan="3" className="text-center text-xs font-medium text-gray-700 bg-red-100 p-2 border border-gray-900">Cash</th>
                            <th colSpan="3" className="text-center text-xs font-medium text-gray-700 bg-purple-100 p-2 border border-gray-900">Transfer Domestic</th>
                            <th colSpan="3" className="text-center text-xs font-medium text-gray-700 bg-blue-100 p-2 border border-gray-900">Transfer Foreign</th>
                        </tr>
                        <tr>
                            <th className="text-left text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-900 sticky left-0 z-10"></th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-red-100 p-2 border border-gray-900">USD</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-red-100 p-2 border border-gray-900">ZWL</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-red-100 p-2 border border-gray-900">ZAR</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-purple-100 p-2 border border-gray-900">USD</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-purple-100 p-2 border border-gray-900">ZWL</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-purple-100 p-2 border border-gray-900">ZAR</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-blue-100 p-2 border border-gray-900">USD</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-blue-100 p-2 border border-gray-900">ZWL</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-blue-100 p-2 border border-gray-900">ZAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Balance as per PNL template */}
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 sticky left-0 z-10">Balance as per PNL template 29/04/2021</td>
                            <td className="bg-blue-50 text-gray-900 p-2 border border-gray-900 text-right">63,379.87</td>
                            <td className="bg-blue-50 text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-blue-50 text-gray-900 p-2 border border-gray-900 text-right">394,210.00</td>
                            <td className="bg-purple-50 text-gray-900 p-2 border border-gray-900 text-right">252.39</td>
                            <td className="bg-purple-50 text-gray-900 p-2 border border-gray-900 text-right">38,140,944.68</td>
                            <td className="bg-purple-50 text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-blue-50 text-gray-900 p-2 border border-gray-900 text-right">121,261.94</td>
                            <td className="bg-blue-50 text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-blue-50 text-gray-900 p-2 border border-gray-900 text-right">46,008.17</td>
                        </tr>
                        {/* Payables */}
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 sticky left-0 z-10">Payables</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">1.43</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                        </tr>
                        {/* In transit */}
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 sticky left-0 z-10">In transit</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                        </tr>
                        {/* Subtotal Row */}
                        <tr>
                            <td className="bg-gray-200 text-gray-700 font-semibold p-2 border border-gray-900 sticky left-0 z-10"></td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">63,378.44</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">394,210.00</td>
                            <td className="bg-purple-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">252.39</td>
                            <td className="bg-purple-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">38,140,944.68</td>
                            <td className="bg-purple-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">121,261.94</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">46,008.17</td>
                        </tr>
                        {/* Receivables */}
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 sticky left-0 z-10">Receivables</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">6,182.09</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                        </tr>
                        {/* Expenditure */}
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 sticky left-0 z-10">Expenditure</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                        </tr>
                        {/* DSTV Payment */}
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 sticky left-0 z-10">DSTV Payment</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                        </tr>
                        {/* ZAMFEE */}
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 sticky left-0 z-10">ZAMFEE</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                        </tr>
                        {/* Salaries */}
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 sticky left-0 z-10">Salaries</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                        </tr>
                        {/* COMMISSION */}
                        <tr>
                            <td className="bg-white text-gray-700 font-medium p-2 border border-gray-900 sticky left-0 z-10">COMMISSION</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-white text-gray-900 p-2 border border-gray-900 text-right">-</td>
                        </tr>
                        {/* Subtotal Row */}
                        <tr>
                            <td className="bg-gray-200 text-gray-700 font-semibold p-2 border border-gray-900 sticky left-0 z-10"></td>
                            <td className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                        </tr>
                        {/* Balance at hand */}
                        <tr>
                            <td className="bg-gray-200 text-gray-700 font-semibold p-2 border border-gray-900 sticky left-0 z-10">Balance at hand</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">57,196.35</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">394,210.00</td>
                            <td className="bg-purple-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">252.39</td>
                            <td className="bg-purple-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-38,140,944.68</td>
                            <td className="bg-purple-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">121,261.94</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">-</td>
                            <td className="bg-blue-100 text-gray-900 font-semibold p-2 border border-gray-900 text-right">46,008.17</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CashAndCashEquivalentsTab;

