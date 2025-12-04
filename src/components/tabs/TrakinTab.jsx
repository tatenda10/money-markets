import React from 'react';

const TrakinTab = () => {
    const trakinData = [
        {
            date: '30/6/2020',
            customer: 'UPS',
            riskRate: 17.32,
            transactingRate: 17.75,
            usdAmount: 135.21,
            cabs: '',
            zarCash: 2400.00
        },
        {
            date: '2/7/2020',
            customer: 'OAKFIN',
            riskRate: 17.10,
            transactingRate: 17.44,
            usdAmount: 991.97,
            cabs: 17300.00,
            zarCash: ''
        },
        {
            date: '3/7/2020',
            customer: 'OAKFIN',
            riskRate: 16.90,
            transactingRate: 17.38,
            usdAmount: 1832.57,
            cabs: 31850.00,
            zarCash: ''
        },
        {
            date: '6/7/2020',
            customer: 'UPS',
            riskRate: 16.90,
            transactingRate: 17.32,
            usdAmount: 131.06,
            cabs: '',
            zarCash: 2270.00
        },
        {
            date: '7/7/2020',
            customer: 'TAPIWA',
            riskRate: 17.07,
            transactingRate: 17.50,
            usdAmount: 3846.86,
            cabs: '',
            zarCash: 67320.00
        },
    ];

    return (
        <div className="space-y-4">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm border border-gray-300">
                    <thead>
                        <tr className="bg-slate-900">
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">DATE</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">CUSTOMER</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">RISK RATE</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">TRANSACTING RATE</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">USD AMOUNT</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">CABS</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">ZAR CASH</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trakinData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50 bg-white">
                                <td className="p-2 border border-gray-300 text-gray-900">{row.date}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.customer}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.riskRate.toFixed(2)}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.transactingRate.toFixed(2)}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.usdAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">
                                    {row.cabs ? row.cabs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}
                                </td>
                                <td className="p-2 border border-gray-300 text-gray-900">
                                    {row.zarCash ? row.zarCash.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TrakinTab;


