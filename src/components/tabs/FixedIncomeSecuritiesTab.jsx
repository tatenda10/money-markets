import React from 'react';

const FixedIncomeSecuritiesTab = () => {
    // Sample fixed income securities data
    const fixedIncomeData = [
        {
            tenor: 103,
            daysToDate: 436,
            nominal: 0.00,
            accruedInterest: 0.00,
            discountAccretion: 0.00,
            interestCashflow: 0.00,
            principalCashflow: 0.00,
            product: 'Loans',
            dealType: 'Non-Amortising',
            dealNo: 'Loan-44468-1',
            dealDate: '29-Sept-2021',
            tradingBook: '',
            dealer: 'Muchenge',
            counterparty: 'Fungile',
            invoiceIssuer: '',
            startDate: '29/Sep/2021',
            principalAmount: 4000,
            dealFees: '',
            endDate: '10-Jan-2022',
            term: '',
            interestRate: 90,
            currency: 'USD',
            securityName: 'FUNGIENE',
            amountPaidReceived: -4000,
            bank: '',
            sourceOfFunds: 'Cash'
        },
        {
            tenor: 90,
            daysToDate: 408,
            nominal: 0.00,
            accruedInterest: 0.00,
            discountAccretion: 0.00,
            interestCashflow: 0.00,
            principalCashflow: 0.00,
            product: 'Loans',
            dealType: 'Non-Amortising',
            dealNo: 'Loan-44496-2',
            dealDate: '27-Oct-2021',
            tradingBook: '',
            dealer: 'Tinashe',
            counterparty: 'ZAMFEE',
            invoiceIssuer: '',
            startDate: '27/Oct/2021',
            principalAmount: -9000000,
            dealFees: '',
            endDate: '25-Jan-2022',
            term: '',
            interestRate: 50,
            currency: 'ZWL',
            securityName: 'GUGU',
            amountPaidReceived: 9000000,
            bank: 'CABS',
            sourceOfFunds: 'Transfer Domestic'
        },
        {
            tenor: 72,
            daysToDate: 385,
            nominal: 0.00,
            accruedInterest: 0.00,
            discountAccretion: 0.00,
            interestCashflow: 0.00,
            principalCashflow: 0.00,
            product: 'Loans',
            dealType: 'Non-Amortising',
            dealNo: 'Loan-44512-3',
            dealDate: '09-Nov-2021',
            tradingBook: 'AFS',
            dealer: 'Upenyu',
            counterparty: 'kilpin',
            invoiceIssuer: '',
            startDate: '09/Nov/2021',
            principalAmount: 10500000,
            dealFees: '',
            endDate: '20-Jan-2022',
            term: '',
            interestRate: 55,
            currency: 'ZWL',
            securityName: 'kilpin',
            amountPaidReceived: -10500000,
            bank: 'NBS',
            sourceOfFunds: 'Transfer Foreign'
        },
        {
            tenor: 699,
            daysToDate: 677,
            nominal: -20000.00,
            accruedInterest: -4451.51,
            discountAccretion: 0.00,
            interestCashflow: 0.00,
            principalCashflow: 0.00,
            product: 'Loans',
            dealType: 'Non-Amortising',
            dealNo: 'Loan-44227-4',
            dealDate: '31-Jan-2021',
            tradingBook: '',
            dealer: 'Tinashe',
            counterparty: 'Gugu',
            invoiceIssuer: '',
            startDate: '31/Jan/2021',
            principalAmount: -20000,
            dealFees: '',
            endDate: '31-Dec-2022',
            term: '',
            interestRate: 12,
            currency: 'USD',
            securityName: 'GUGU',
            amountPaidReceived: 20000,
            bank: 'ZB',
            sourceOfFunds: 'Transfer Foreign'
        },
        {
            tenor: 668,
            daysToDate: 646,
            nominal: -99900.00,
            accruedInterest: -19449.02,
            discountAccretion: 0.00,
            interestCashflow: 0.00,
            principalCashflow: 0.00,
            product: 'Loans',
            dealType: 'Amortising',
            dealNo: 'Loan-44258-10',
            dealDate: '03-Mar-2021',
            tradingBook: '',
            dealer: 'Muchenge',
            counterparty: 'NKalwethu',
            invoiceIssuer: '',
            startDate: '3/Mar/2021',
            principalAmount: -99900,
            dealFees: '',
            endDate: '31-Dec-2022',
            term: '',
            interestRate: 11,
            currency: 'USD',
            securityName: 'NKalwethu',
            amountPaidReceived: 99900,
            bank: 'CABS',
            sourceOfFunds: 'Transfer Foreign'
        },
    ];

    // Summary data
    const assetsSummary = {
        nominal: 0.00,
        accruedInterest: 0.00,
        discountAccretion: 0.00,
        interestCashflow: 0.00,
        principalCashflow: 0.00
    };

    const liabilitiesSummary = {
        nominal: -119900.00,
        accruedInterest: -23900.53,
        discountAccretion: 0.00,
        interestCashflow: 0.00,
        principalCashflow: 0.00
    };

    return (
        <div className="space-y-4">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs border border-gray-300">
                    <thead>
                        <tr>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900 sticky left-0 z-10"></th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Tenor</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Days to date</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Nominal</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Accrued Interest</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Discount Accretion/(Premium Amortisation)</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Interest Cashflow</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Principal Cashflow</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Product</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Deal Type</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Deal No</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Deal Date</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Trading Book</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Dealer</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Counterparty</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Invoice Issuer</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Start Date</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Principal Amount</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Deal Fees</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">End Date</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Term (No of)</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Interest Rate (p.a)</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Currency</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Security Name</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Amount Paid/Received</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Bank</th>
                            <th className="text-left text-xs font-medium text-white p-2 border border-slate-800 bg-slate-900">Source Of Funds</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Assets Summary Row */}
                        <tr className="bg-green-50">
                            <td className="p-2 border border-gray-300 font-semibold text-gray-900 sticky left-0 z-10 bg-green-50">Assets</td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300 font-medium text-gray-900">{assetsSummary.nominal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="p-2 border border-gray-300 font-medium text-gray-900">{assetsSummary.accruedInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="p-2 border border-gray-300 font-medium text-gray-900 bg-orange-50">{assetsSummary.discountAccretion.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="p-2 border border-gray-300 font-medium text-gray-900 bg-orange-50">{assetsSummary.interestCashflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="p-2 border border-gray-300 font-medium text-gray-900 bg-orange-50">{assetsSummary.principalCashflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300 bg-red-50"></td>
                            <td className="p-2 border border-gray-300 bg-red-50"></td>
                            <td className="p-2 border border-gray-300 bg-red-50"></td>
                        </tr>
                        {/* Liabilities Summary Row */}
                        <tr className="bg-green-50">
                            <td className="p-2 border border-gray-300 font-semibold text-gray-900 sticky left-0 z-10 bg-green-50">Liabilities</td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300 font-medium text-red-600">{liabilitiesSummary.nominal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="p-2 border border-gray-300 font-medium text-red-600">{liabilitiesSummary.accruedInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="p-2 border border-gray-300 font-medium text-gray-900 bg-orange-50">{liabilitiesSummary.discountAccretion.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="p-2 border border-gray-300 font-medium text-gray-900 bg-orange-50">{liabilitiesSummary.interestCashflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="p-2 border border-gray-300 font-medium text-gray-900 bg-orange-50">{liabilitiesSummary.principalCashflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300"></td>
                            <td className="p-2 border border-gray-300 bg-red-50"></td>
                            <td className="p-2 border border-gray-300 bg-red-50"></td>
                            <td className="p-2 border border-gray-300 bg-red-50"></td>
                        </tr>
                        {/* Data Rows */}
                        {fixedIncomeData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-2 border border-gray-300 text-gray-900 sticky left-0 z-10 bg-white"></td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.tenor}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.daysToDate}</td>
                                <td className={`p-2 border border-gray-300 font-medium ${
                                    row.nominal < 0 ? 'text-red-600' : 'text-gray-900'
                                }`}>
                                    {row.nominal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </td>
                                <td className={`p-2 border border-gray-300 font-medium ${
                                    row.accruedInterest < 0 ? 'text-red-600' : 'text-gray-900'
                                }`}>
                                    {row.accruedInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-orange-50">{row.discountAccretion.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-orange-50">{row.interestCashflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-orange-50">{row.principalCashflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.product}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.dealType}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.dealNo}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.dealDate}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.tradingBook || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.dealer}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.counterparty}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.invoiceIssuer || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.startDate}</td>
                                <td className={`p-2 border border-gray-300 font-medium ${
                                    row.principalAmount < 0 ? 'text-red-600' : 'text-gray-900'
                                }`}>
                                    {row.principalAmount < 0 ? '-' : ''}{Math.abs(row.principalAmount).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                </td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.dealFees || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.endDate}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.term || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.interestRate}%</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.currency}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.securityName}</td>
                                <td className={`p-2 border border-gray-300 font-medium bg-red-50 ${
                                    row.amountPaidReceived < 0 ? 'text-red-600' : 'text-gray-900'
                                }`}>
                                    {row.amountPaidReceived < 0 ? '-' : ''}{Math.abs(row.amountPaidReceived).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                </td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-red-50">{row.bank || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-red-50">{row.sourceOfFunds}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FixedIncomeSecuritiesTab;

