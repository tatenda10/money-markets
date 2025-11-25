import React, { useState } from 'react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Amortisation Schedule');

    return (
        <div>
            {/* Tabs Interface */}
            <div className="bg-white border border-gray-200 overflow-hidden">
                {/* Tabs Bar */}
                <div className="border-b border-gray-200 bg-gray-50 overflow-x-auto">
                    <div className="flex items-end min-w-max">
                        {[
                            { id: 'Amortisation Schedule', label: 'Amortisation Schedule', type: 'selected' },
                            { id: 'Fx PnL', label: 'Fx PnL', type: 'orange' },
                            { id: 'Fx Deals', label: 'Fx Deals', type: 'orange' },
                            { id: 'Sheet2', label: 'Sheet2', type: 'orange' },
                            { id: 'Fx Interdesk Balance', label: 'Fx Interdesk Balance', type: 'orange' },
                            { id: 'Balances', label: 'Balances', type: 'grey' },
                            { id: 'Reval Rates', label: 'Reval Rates', type: 'grey' },
                            { id: 'trakin', label: 'trakin', type: 'grey' },
                            { id: 'Receivables', label: 'Receivables', type: 'grey' },
                        ].map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors border-r border-gray-300 whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? 'bg-red-50 text-green-700 border-b-2 border-b-green-600'
                                        : tab.type === 'orange'
                                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                    {activeTab === 'Amortisation Schedule' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Amortisation Schedule</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Period</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Principal</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Interest</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Total Payment</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Remaining Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {[1, 2, 3, 4, 5].map((row) => (
                                            <tr key={row} className="hover:bg-gray-50">
                                                <td className="p-3 text-sm text-gray-900">Period {row}</td>
                                                <td className="p-3 text-sm text-gray-700">${(10000 - row * 1000).toLocaleString()}</td>
                                                <td className="p-3 text-sm text-gray-700">${(500 - row * 50).toFixed(2)}</td>
                                                <td className="p-3 text-sm text-gray-700">${(10500 - row * 1050).toFixed(2)}</td>
                                                <td className="p-3 text-sm text-gray-700">${(100000 - row * 10000).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Fx PnL' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Fx PnL</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Currency Pair</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Position</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">PnL</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD'].map((pair, idx) => (
                                            <tr key={pair} className="hover:bg-gray-50">
                                                <td className="p-3 text-sm text-gray-900">{pair}</td>
                                                <td className="p-3 text-sm text-gray-700">{idx % 2 === 0 ? 'Long' : 'Short'}</td>
                                                <td className={`p-3 text-sm font-medium ${idx % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    ${(Math.random() * 10000).toFixed(2)}
                                                </td>
                                                <td className="p-3 text-sm text-gray-700">2024-01-{15 + idx}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Fx Deals' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Fx Deals</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Deal ID</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Currency Pair</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Amount</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Rate</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {[1, 2, 3, 4, 5].map((deal) => (
                                            <tr key={deal} className="hover:bg-gray-50">
                                                <td className="p-3 text-sm text-gray-900">DEAL-{1000 + deal}</td>
                                                <td className="p-3 text-sm text-gray-700">EUR/USD</td>
                                                <td className="p-3 text-sm text-gray-700">${(deal * 10000).toLocaleString()}</td>
                                                <td className="p-3 text-sm text-gray-700">1.{(850 + deal * 5) / 100}</td>
                                                <td className="p-3">
                                                    <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                                                        Active
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Sheet2' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Sheet2</h3>
                            <p className="text-sm text-gray-600">Sheet2 data content will be displayed here.</p>
                        </div>
                    )}

                    {activeTab === 'Fx Interdesk Balance' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Fx Interdesk Balance</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Desk</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Currency</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {['Trading Desk 1', 'Trading Desk 2', 'Trading Desk 3'].map((desk, idx) => (
                                            <tr key={desk} className="hover:bg-gray-50">
                                                <td className="p-3 text-sm text-gray-900">{desk}</td>
                                                <td className="p-3 text-sm text-gray-700">USD</td>
                                                <td className="p-3 text-sm text-gray-700">${((idx + 1) * 50000).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Balances' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Balances</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Account</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Currency</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {['Account A', 'Account B', 'Account C'].map((account, idx) => (
                                            <tr key={account} className="hover:bg-gray-50">
                                                <td className="p-3 text-sm text-gray-900">{account}</td>
                                                <td className="p-3 text-sm text-gray-700">USD</td>
                                                <td className="p-3 text-sm text-gray-700">${((idx + 1) * 100000).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Reval Rates' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Reval Rates</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Currency</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Rate</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {['EUR', 'GBP', 'JPY', 'AUD'].map((currency, idx) => (
                                            <tr key={currency} className="hover:bg-gray-50">
                                                <td className="p-3 text-sm text-gray-900">{currency}</td>
                                                <td className="p-3 text-sm text-gray-700">1.{(850 + idx * 10) / 100}</td>
                                                <td className="p-3 text-sm text-gray-700">2024-01-15</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'trakin' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">trakin</h3>
                            <p className="text-sm text-gray-600">Trakin data content will be displayed here.</p>
                        </div>
                    )}

                    {activeTab === 'Receivables' && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Receivables</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Invoice #</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Client</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Amount</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Due Date</th>
                                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider p-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {[1, 2, 3, 4, 5].map((invoice) => (
                                            <tr key={invoice} className="hover:bg-gray-50">
                                                <td className="p-3 text-sm text-gray-900">INV-{2000 + invoice}</td>
                                                <td className="p-3 text-sm text-gray-700">Client {invoice}</td>
                                                <td className="p-3 text-sm text-gray-700">${(invoice * 5000).toLocaleString()}</td>
                                                <td className="p-3 text-sm text-gray-700">2024-01-{20 + invoice}</td>
                                                <td className="p-3">
                                                    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border ${
                                                        invoice % 2 === 0 
                                                            ? 'bg-green-50 text-green-700 border-green-200' 
                                                            : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                                    }`}>
                                                        {invoice % 2 === 0 ? 'Paid' : 'Pending'}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
