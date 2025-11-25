import React from 'react';

const ReceivablesTab = () => {
    const dates = ['4-Oct', '5-Oct', '6-Oct', '7-Oct', '10-Oct', '11-Oct', '12-Oct', '13-Oct', '14-Oct', '17-Oct', '18-Oct', '19-Oct', '20-Oct', '21-Oct', '24-Oct', '25-Oct', '26-Oct', '27-Oct', '28-Oct', '31-Oct', '1-Nov', '2-Nov'];
    const dealers = ['Tinashe', 'Marongwe', 'Tatenda', 'ET', 'Muchenge', 'Upenyu', 'LC Outstanding'];

    // Sample data for USD section
    const usdData = {
        'Tinashe': {
            openingBal: 898.29,
            total: 898.29,
            cashOut: '',
            outstandingAmount: 898.29
        },
        'Marongwe': {
            openingBal: 1,
            total: 0.80,
            cashOut: '',
            outstandingAmount: 0.80
        },
        'Tatenda': {
            '12-Oct': 4644,
            openingBal: '',
            total: '',
            cashOut: 60,
            outstandingAmount: -60.00 // negative value in red
        },
        'ET': {
            openingBal: 696.00,
            total: 5340.00,
            cashOut: '',
            outstandingAmount: 5340.00
        },
        'Muchenge': {
            openingBal: '',
            total: '',
            cashOut: '',
            outstandingAmount: ''
        },
        'Upenyu': {
            openingBal: 3.00,
            total: 3.00,
            cashOut: '',
            outstandingAmount: 3.00
        },
        'LC Outstanding': {
            openingBal: '',
            total: '',
            cashOut: '',
            outstandingAmount: ''
        },
        'TOTAL': {
            '12-Oct': 4644,
            openingBal: 1598,
            total: 6242,
            cashOut: 60,
            outstandingAmount: 6182
        }
    };

    // Cells with comments (red triangles)
    const cellsWithComments = {
        'USD-Tatenda-12-Oct': true,
        'USD-ET-20-Oct': true,
        'USD-ET-24-Oct': true
    };

    const hasComment = (currency, dealer, date) => {
        return cellsWithComments[`${currency}-${dealer}-${date}`] || false;
    };

    const getCellValue = (currency, dealer, date) => {
        if (currency === 'USD' && usdData[dealer] && usdData[dealer][date] !== undefined) {
            return usdData[dealer][date];
        }
        return null;
    };

    return (
        <div className="space-y-6">
            {/* ZAR Section */}
            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">ZAR</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm border border-gray-300">
                        <thead>
                            <tr>
                                <th className="text-left text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300 sticky left-0 z-10"></th>
                                {dates.map((date) => (
                                    <th key={date} className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">
                                        {date}
                                    </th>
                                ))}
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Opening bal</th>
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Total</th>
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Cash IN</th>
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Outstanding Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dealers.map((dealer) => (
                                <tr key={dealer}>
                                    <td className="p-2 border border-gray-300 text-gray-900 font-medium sticky left-0 z-10 bg-white">{dealer}</td>
                                    {dates.map((date) => (
                                        <td key={date} className="p-2 border border-gray-300 text-center text-gray-900">
                                            -
                                        </td>
                                    ))}
                                    <td className="p-2 border border-gray-300 text-center text-gray-900"></td>
                                    <td className="p-2 border border-gray-300 text-center text-gray-900"></td>
                                    <td className="p-2 border border-gray-300 text-center text-gray-900"></td>
                                    <td className="p-2 border border-gray-300 text-center text-gray-900"></td>
                                </tr>
                            ))}
                            <tr className="bg-gray-50">
                                <td className="p-2 border border-gray-300 text-gray-900 font-bold sticky left-0 z-10 bg-gray-50">TOTAL</td>
                                {dates.map((date) => (
                                    <td key={date} className="p-2 border border-gray-300 text-center text-gray-900 font-bold">
                                        -
                                    </td>
                                ))}
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold"></td>
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold"></td>
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold"></td>
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* USD Section */}
            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">USD</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm border border-gray-300">
                        <thead>
                            <tr>
                                <th className="text-left text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300 sticky left-0 z-10"></th>
                                {dates.map((date) => (
                                    <th key={date} className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">
                                        {date}
                                    </th>
                                ))}
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Opening bal</th>
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Total</th>
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Cash out</th>
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Outstanding Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dealers.map((dealer) => {
                                const dealerData = usdData[dealer] || {};
                                return (
                                    <tr key={dealer}>
                                        <td className="p-2 border border-gray-300 text-gray-900 font-medium sticky left-0 z-10 bg-white">{dealer}</td>
                                        {dates.map((date) => {
                                            const value = getCellValue('USD', dealer, date);
                                            return (
                                                <td key={date} className="p-2 border border-gray-300 text-center text-gray-900 relative">
                                                    {hasComment('USD', dealer, date) ? (
                                                        <span className="relative">
                                                            {value !== null ? value.toLocaleString('en-US') : '-'}
                                                            <span className="absolute top-0 right-0 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-red-500 transform translate-x-1 -translate-y-1"></span>
                                                        </span>
                                                    ) : (
                                                        value !== null ? value.toLocaleString('en-US') : '-'
                                                    )}
                                                </td>
                                            );
                                        })}
                                        <td className="p-2 border border-gray-300 text-center text-gray-900">
                                            {dealerData.openingBal !== undefined && dealerData.openingBal !== '' 
                                                ? dealerData.openingBal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                                                : ''}
                                        </td>
                                        <td className="p-2 border border-gray-300 text-center text-gray-900">
                                            {dealerData.total !== undefined && dealerData.total !== '' 
                                                ? dealerData.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                                                : ''}
                                        </td>
                                        <td className="p-2 border border-gray-300 text-center text-gray-900">
                                            {dealerData.cashOut !== undefined && dealerData.cashOut !== '' 
                                                ? dealerData.cashOut.toLocaleString('en-US')
                                                : ''}
                                        </td>
                                        <td className={`p-2 border border-gray-300 text-center font-medium ${
                                            dealerData.outstandingAmount < 0 ? 'text-red-600' : 'text-gray-900'
                                        }`}>
                                            {dealerData.outstandingAmount !== undefined && dealerData.outstandingAmount !== '' 
                                                ? (dealerData.outstandingAmount < 0 ? '(' : '') + 
                                                  Math.abs(dealerData.outstandingAmount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) +
                                                  (dealerData.outstandingAmount < 0 ? ')' : '')
                                                : ''}
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr className="bg-gray-50">
                                <td className="p-2 border border-gray-300 text-gray-900 font-bold sticky left-0 z-10 bg-gray-50">TOTAL</td>
                                {dates.map((date) => {
                                    const value = getCellValue('USD', 'TOTAL', date);
                                    return (
                                        <td key={date} className="p-2 border border-gray-300 text-center text-gray-900 font-bold">
                                            {value !== null ? value.toLocaleString('en-US') : '-'}
                                        </td>
                                    );
                                })}
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold">
                                    {usdData.TOTAL.openingBal.toLocaleString('en-US')}
                                </td>
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold">
                                    {usdData.TOTAL.total.toLocaleString('en-US')}
                                </td>
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold">
                                    {usdData.TOTAL.cashOut.toLocaleString('en-US')}
                                </td>
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold">
                                    {usdData.TOTAL.outstandingAmount.toLocaleString('en-US')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ZWL Section */}
            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">ZWL</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm border border-gray-300">
                        <thead>
                            <tr>
                                <th className="text-left text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300 sticky left-0 z-10"></th>
                                {dates.map((date) => (
                                    <th key={date} className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">
                                        {date}
                                    </th>
                                ))}
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Opening bal</th>
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Total</th>
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Cash out</th>
                                <th className="text-center text-xs font-medium text-gray-700 bg-gray-100 p-2 border border-gray-300">Outstanding Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dealers.map((dealer) => (
                                <tr key={dealer}>
                                    <td className="p-2 border border-gray-300 text-gray-900 font-medium sticky left-0 z-10 bg-white">{dealer}</td>
                                    {dates.map((date) => (
                                        <td key={date} className="p-2 border border-gray-300 text-center text-gray-900">
                                            -
                                        </td>
                                    ))}
                                    <td className="p-2 border border-gray-300 text-center text-gray-900"></td>
                                    <td className="p-2 border border-gray-300 text-center text-gray-900"></td>
                                    <td className="p-2 border border-gray-300 text-center text-gray-900"></td>
                                    <td className="p-2 border border-gray-300 text-center text-gray-900"></td>
                                </tr>
                            ))}
                            <tr className="bg-gray-50">
                                <td className="p-2 border border-gray-300 text-gray-900 font-bold sticky left-0 z-10 bg-gray-50">TOTAL</td>
                                {dates.map((date) => (
                                    <td key={date} className="p-2 border border-gray-300 text-center text-gray-900 font-bold">
                                        -
                                    </td>
                                ))}
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold"></td>
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold"></td>
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold"></td>
                                <td className="p-2 border border-gray-300 text-center text-gray-900 font-bold"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReceivablesTab;

