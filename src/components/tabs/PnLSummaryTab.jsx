import React from 'react';

const PnLSummaryTab = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Lincoln Capital Fx PnL Summary</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr>
                            <th className="text-left text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300 sticky left-0 z-10">Date</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">4-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">5-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">6-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">7-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">10-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">11-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">12-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">13-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">14-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">17-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">18-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">19-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">20-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">21-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">24-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">25-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">26-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">27-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">28-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">31-Oct</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">1-Nov</th>
                            <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">2-Nov</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Total Trading book PnL Section */}
                        <tr>
                            <td colSpan="23" className="bg-blue-100 text-blue-900 font-semibold p-2 border border-gray-300">Total Trading book PnL</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">Realised PnL</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const value = (Math.random() * 200000 - 100000).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {parseFloat(value) >= 0 ? '+' : ''}{parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">Unrealised PnL</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const value = (Math.random() * 150000 - 75000).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {parseFloat(value) >= 0 ? '+' : ''}{parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">Total PnL</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const realised = Math.random() * 200000 - 100000;
                                const unrealised = Math.random() * 150000 - 75000;
                                const value = (realised + unrealised).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {parseFloat(value) >= 0 ? '+' : ''}{parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                );
                            })}
                        </tr>
                        
                        {/* NOP (T-1) Revaluation PnL Section */}
                        <tr>
                            <td colSpan="23" className="bg-blue-100 text-blue-900 font-semibold p-2 border border-gray-300">NOP (T-1) Revaluation PnL</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">NOP (T-1) Revaluation PnL</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const value = (Math.random() * 50000 - 25000).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {parseFloat(value) >= 0 ? '+' : ''}{parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                );
                            })}
                        </tr>
                        
                        {/* PnL after IMMT Section */}
                        <tr>
                            <td colSpan="23" className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-300">PnL after IMMT</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">Total PnL</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const realised = Math.random() * 200000 - 100000;
                                const unrealised = Math.random() * 150000 - 75000;
                                const value = (realised + unrealised).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {parseFloat(value) >= 0 ? '+' : ''}{parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">IMMT</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const value = (Math.random() * 30000 - 15000).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {parseFloat(value) >= 0 ? '+' : ''}{parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">Total PnL after IMMT</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const realised = Math.random() * 200000 - 100000;
                                const unrealised = Math.random() * 150000 - 75000;
                                const immt = Math.random() * 30000 - 15000;
                                const value = (realised + unrealised + immt).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {parseFloat(value) >= 0 ? '+' : ''}{parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                );
                            })}
                        </tr>
                        
                        {/* Trade Values Section */}
                        <tr>
                            <td colSpan="23" className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-300">Trade Values</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">Total value of trades Buy</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const value = (Math.random() * 50000000 + 10000000).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">Total value of trades Sell</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const value = (Math.random() * 50000000 + 10000000).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                );
                            })}
                        </tr>
                        
                        {/* Average Margin Section */}
                        <tr>
                            <td colSpan="23" className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-300">Average Margin</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">Total Average Margin Buy</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const value = (Math.random() * 5 + 1).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {value}%
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">Total Average Margin Sell</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const value = (Math.random() * 5 + 1).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {value}%
                                    </td>
                                );
                            })}
                        </tr>
                        
                        {/* Total Volume Section */}
                        <tr>
                            <td colSpan="23" className="bg-gray-200 text-gray-900 font-semibold p-2 border border-gray-300">Total Volume</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 text-gray-700 font-medium p-2 border border-gray-300">Total Volume of trades</td>
                            {Array.from({ length: 22 }).map((_, i) => {
                                const value = (Math.random() * 100000000 + 50000000).toFixed(2);
                                return (
                                    <td key={i} className="bg-white text-gray-900 p-2 border border-gray-300 text-center">
                                        {parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PnLSummaryTab;

