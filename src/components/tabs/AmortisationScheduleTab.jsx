import React, { useState } from 'react';

const AmortisationScheduleTab = () => {
    const [loanData, setLoanData] = useState(
        Array.from({ length: 30 }, (_, i) => ({
            dealNo: '',
            loanNo: '0',
            loanName: '',
            startDate: '0/1/1900',
            frequency: i < 2 ? 'monthly' : '',
            amount: '0.00',
            term: '0',
            interestRate: '0.00%',
            payment: ''
        }))
    );

    const handleInputChange = (index, field, value) => {
        const updatedData = [...loanData];
        updatedData[index] = { ...updatedData[index], [field]: value };
        setLoanData(updatedData);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Multiple Amortisation Loan Calculator</h2>
                <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors">
                    Back to Navigator
                </button>
            </div>

            <div className="flex gap-8 items-start">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Enter Loans Details:</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-slate-900">
                                    <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Deal No</th>
                                    <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Loan No</th>
                                    <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Loan Name</th>
                                    <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Start Date</th>
                                    <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Frequency</th>
                                    <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Amount</th>
                                    <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Term</th>
                                    <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Interest rate (p.a.)</th>
                                    <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loanData.map((loan, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                value={loan.dealNo}
                                                onChange={(e) => handleInputChange(index, 'dealNo', e.target.value)}
                                                className="w-full bg-transparent border-none outline-none text-sm"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                value={loan.loanNo}
                                                onChange={(e) => handleInputChange(index, 'loanNo', e.target.value)}
                                                className="w-full bg-transparent border-none outline-none text-sm"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                value={loan.loanName}
                                                onChange={(e) => handleInputChange(index, 'loanName', e.target.value)}
                                                className="w-full bg-transparent border-none outline-none text-sm"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                value={loan.startDate}
                                                onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
                                                className="w-full bg-transparent border-none outline-none text-sm"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                value={loan.frequency}
                                                onChange={(e) => handleInputChange(index, 'frequency', e.target.value)}
                                                className="w-full bg-transparent border-none outline-none text-sm"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                value={loan.amount}
                                                onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                                                className="w-full bg-transparent border-none outline-none text-sm"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                value={loan.term}
                                                onChange={(e) => handleInputChange(index, 'term', e.target.value)}
                                                className="w-full bg-transparent border-none outline-none text-sm"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                value={loan.interestRate}
                                                onChange={(e) => handleInputChange(index, 'interestRate', e.target.value)}
                                                className="w-full bg-transparent border-none outline-none text-sm"
                                            />
                                        </td>
                                        <td className="p-2 border border-gray-300">
                                            <input
                                                type="text"
                                                value={loan.payment}
                                                onChange={(e) => handleInputChange(index, 'payment', e.target.value)}
                                                className="w-full bg-transparent border-none outline-none text-sm"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="w-64 flex-shrink-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Notes:</h3>
                    <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                        <li>Don't leave "Loan No" field empty</li>
                        <li>After entering values hit Data -&gt; Refresh All</li>
                        <li>Up to 30 Loans</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AmortisationScheduleTab;

