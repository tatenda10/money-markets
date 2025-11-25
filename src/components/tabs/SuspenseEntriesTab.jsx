import React from 'react';

const SuspenseEntriesTab = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}-${currentDate.toLocaleDateString('en-GB', { month: 'short', year: '2-digit' })}`;
    
    // Sample suspense entries data
    const suspenseEntries = [
        {
            date: '16-Nov-2020',
            dealer: 'Marve',
            customerName: 'ABC',
            sourceOfFunds: 'Transfer Foreign',
            bank: 'CABS- CASH\nSECURITY',
            currency: 'USD',
            amount: -20000.00,
            deskTransferredTo: ''
        },
        {
            date: '18-Nov-2020',
            dealer: 'Tatenda',
            customerName: 'XYZ Corp',
            sourceOfFunds: 'Transfer Domestic',
            bank: 'STANBIC',
            currency: 'ZWL',
            amount: 50000.00,
            deskTransferredTo: 'Trading Desk 1'
        },
        {
            date: '20-Nov-2020',
            dealer: 'Tinashe',
            customerName: 'DEF Ltd',
            sourceOfFunds: 'Cash',
            bank: 'NMB',
            currency: 'USD',
            amount: -15000.00,
            deskTransferredTo: ''
        },
        {
            date: '22-Nov-2020',
            dealer: 'Upenyu',
            customerName: 'GHI Inc',
            sourceOfFunds: 'Transfer Foreign',
            bank: 'CBZ',
            currency: 'ZAR',
            amount: 75000.00,
            deskTransferredTo: 'Trading Desk 2'
        },
    ];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="bg-gray-700 text-white px-3 py-1.5 text-sm font-medium">Recon Date</div>
                    <div className="bg-blue-100 text-gray-900 px-3 py-1.5 text-sm font-medium border border-gray-300">
                        {formattedDate}
                    </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors">
                    Back to Navigator
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm border border-gray-300">
                    <thead>
                        <tr className="bg-white">
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Date</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Dealer</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Customer Name</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Source Of funds</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Bank</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Currency</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Amount</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Desk Transferred to</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suspenseEntries.map((entry, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-2 border border-gray-300 text-gray-900">{entry.date}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{entry.dealer}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{entry.customerName}</td>
                                <td className={`p-2 border border-gray-300 text-gray-900 ${
                                    entry.sourceOfFunds === 'Transfer Foreign' ? 'bg-red-100' : ''
                                }`}>
                                    {entry.sourceOfFunds}
                                </td>
                                <td className={`p-2 border border-gray-300 text-gray-900 whitespace-pre-line ${
                                    entry.bank.includes('CABS') ? 'bg-red-100' : ''
                                }`}>
                                    {entry.bank}
                                </td>
                                <td className="p-2 border border-gray-300 text-gray-900">{entry.currency}</td>
                                <td className={`p-2 border border-gray-300 font-medium ${
                                    entry.amount < 0 ? 'text-red-600' : 'text-gray-900'
                                }`}>
                                    {entry.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </td>
                                <td className="p-2 border border-gray-300 text-gray-900">{entry.deskTransferredTo || '-'}</td>
                            </tr>
                        ))}
                        {/* Empty rows for spacing */}
                        {Array.from({ length: 5 }).map((_, i) => (
                            <tr key={`empty-${i}`}>
                                <td className="p-2 border border-gray-300"></td>
                                <td className="p-2 border border-gray-300"></td>
                                <td className="p-2 border border-gray-300"></td>
                                <td className="p-2 border border-gray-300"></td>
                                <td className="p-2 border border-gray-300"></td>
                                <td className="p-2 border border-gray-300"></td>
                                <td className="p-2 border border-gray-300"></td>
                                <td className="p-2 border border-gray-300"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SuspenseEntriesTab;

