import React from 'react';

const TradeFinanceTab = () => {
    // Sample trade finance data
    const tradeFinanceData = [
        {
            dealDate: '08-Jan-2021',
            product: 'LC',
            dealType: 'Cash_Security_Funding',
            dealNo: 'LC-Cryst-44204-1',
            lcEstablishmentDate: '08-Jan-2021',
            dealer: 'Muchenge',
            counterparty: 'Crystal Candy',
            accountA: 'CABS',
            sourceOfFundsA: 'Transfer Foreign',
            currencyA: 'ZAR',
            amountA: -929983.00,
            accountB: 'CABS- CASH SECURITY',
            sourceOfFundsB: 'Transfer Foreign',
            currencyB: 'ZAR',
            amountB: 929983.00,
            feeRefundAccs1: 'CABS',
            sourceOfFunds1: 'Transfer Foreign',
            feeRefundCurre1: 'ZAR',
            feeRefundFx1: -23249.83,
            feeRefundAccount2: '',
            sourceOfFunds2: '',
            feeRefundCurrency2: '',
            feeRefundFxPnl: '',
            settlementStatus: 'Settled',
            settlementDate: ''
        },
        {
            dealDate: '08-Jan-2021',
            product: 'LC',
            dealType: 'Customer_cashCover',
            dealNo: 'LC-Cryst-44204-1',
            lcEstablishmentDate: '08-Jan-2021',
            dealer: 'Muchenge',
            counterparty: 'Crystal Candy',
            accountA: 'CABS- CASH SECURITY',
            sourceOfFundsA: 'Transfer Foreign',
            currencyA: 'ZAR',
            amountA: -929983.00,
            accountB: 'CASH SECURITY SUSPENSE',
            sourceOfFundsB: 'Transfer Foreign',
            currencyB: 'ZAR',
            amountB: 929983.00,
            feeRefundAccs1: '',
            sourceOfFunds1: '',
            feeRefundCurre1: '',
            feeRefundFx1: '',
            feeRefundAccount2: '',
            sourceOfFunds2: '',
            feeRefundCurrency2: '',
            feeRefundFxPnl: '',
            settlementStatus: 'Settled',
            settlementDate: ''
        },
        {
            dealDate: '21-Jan-2021',
            product: 'LC',
            dealType: 'Cash_Security_Funding',
            dealNo: 'LC-Boc G-44217-1',
            lcEstablishmentDate: '21-Jan-2021',
            dealer: 'Upenyu',
            counterparty: 'Boc Gases',
            accountA: 'CABS',
            sourceOfFundsA: 'Transfer Foreign',
            currencyA: 'USD',
            amountA: 63264.00,
            accountB: 'CABS- CASH SECURITY',
            sourceOfFundsB: 'Transfer Foreign',
            currencyB: 'USD',
            amountB: -63264.00,
            feeRefundAccs1: 'CABS',
            sourceOfFunds1: 'Transfer Foreign',
            feeRefundCurre1: 'USD',
            feeRefundFx1: 1581.62,
            feeRefundAccount2: 'Cash',
            sourceOfFunds2: 'Cash',
            feeRefundCurrency2: 'USD',
            feeRefundFxPnl: 210.00,
            settlementStatus: 'Settled',
            settlementDate: ''
        },
        {
            dealDate: '21-Jan-2021',
            product: 'LC',
            dealType: 'Customer_cashCover',
            dealNo: 'LC-Boc G-44217-1',
            lcEstablishmentDate: '21-Jan-2021',
            dealer: 'Upenyu',
            counterparty: 'Boc Gases',
            accountA: 'CABS- CASH SECURITY',
            sourceOfFundsA: 'Transfer Foreign',
            currencyA: 'USD',
            amountA: 63264.00,
            accountB: 'CASH SECURITY SUSPENSE',
            sourceOfFundsB: 'Transfer Foreign',
            currencyB: 'USD',
            amountB: -63264.00,
            feeRefundAccs1: '',
            sourceOfFunds1: '',
            feeRefundCurre1: '',
            feeRefundFx1: '',
            feeRefundAccount2: '',
            sourceOfFunds2: '',
            feeRefundCurrency2: '',
            feeRefundFxPnl: '',
            settlementStatus: 'Settled',
            settlementDate: ''
        },
        {
            dealDate: '04-Feb-2021',
            product: 'LC',
            dealType: 'TradeFinance loan',
            dealNo: 'LC-Invest-44225-1',
            lcEstablishmentDate: '04-Feb-2021',
            dealer: 'Marongwe',
            counterparty: 'Investments',
            accountA: 'SUSPENSE',
            sourceOfFundsA: 'Cash',
            currencyA: 'ZAR',
            amountA: -1100000.00,
            accountB: 'CABS- CASH SECURITY',
            sourceOfFundsB: 'Transfer Foreign',
            currencyB: 'ZAR',
            amountB: 1100000.00,
            feeRefundAccs1: 'CABS',
            sourceOfFunds1: 'Transfer Foreign',
            feeRefundCurre1: 'ZAR',
            feeRefundFx1: -27500.00,
            feeRefundAccount2: '',
            sourceOfFunds2: '',
            feeRefundCurrency2: '',
            feeRefundFxPnl: '',
            settlementStatus: 'Settled',
            settlementDate: ''
        },
        {
            dealDate: '01-Mar-2021',
            product: 'LC',
            dealType: 'Cash_Security_Funding',
            dealNo: 'LC-Samov-44231-1',
            lcEstablishmentDate: '01-Mar-2021',
            dealer: 'Tatenda',
            counterparty: 'Samovar',
            accountA: 'CABS',
            sourceOfFundsA: 'Transfer Foreign',
            currencyA: 'USD',
            amountA: 50000.00,
            accountB: 'CABS- CASH SECURITY',
            sourceOfFundsB: 'Transfer Foreign',
            currencyB: 'USD',
            amountB: -50000.00,
            feeRefundAccs1: 'CABS',
            sourceOfFunds1: 'Transfer Foreign',
            feeRefundCurre1: 'USD',
            feeRefundFx1: 1250.00,
            feeRefundAccount2: 'Cash',
            sourceOfFunds2: 'Cash',
            feeRefundCurrency2: 'USD',
            feeRefundFxPnl: 210.38,
            settlementStatus: 'Settled',
            settlementDate: ''
        },
    ];

    return (
        <div className="space-y-4">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs border border-gray-300">
                    <thead>
                        <tr className="bg-white">
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300 sticky left-0 z-10 bg-white">Deal Date</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Product</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Deal Type</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Deal No</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">LC Establishment Date</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Dealer</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Counterparty</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Account A</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Source Of Funds</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Currency</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Amount</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Account B</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Source Of Funds</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Currency</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Amount</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300 bg-gray-100">Fee/Refund Accs</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300 bg-gray-100">Source Of Funds</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300 bg-gray-100">Fee/Refund Curre</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300 bg-gray-100">Fee/Refund/Fx</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300 bg-blue-50">Fee/Refund Accoun</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300 bg-blue-50">Source Of Funds</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300 bg-blue-50">Fee/Refund Currency</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300 bg-blue-50">Fee/Refund/Fx Pnl</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Settlement Status</th>
                            <th className="text-left text-xs font-medium text-gray-900 p-2 border border-gray-300">Settlement date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tradeFinanceData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-2 border border-gray-300 text-gray-900 sticky left-0 z-10 bg-white">{row.dealDate}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.product}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.dealType}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.dealNo}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.lcEstablishmentDate}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.dealer}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.counterparty}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.accountA}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.sourceOfFundsA}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.currencyA}</td>
                                <td className={`p-2 border border-gray-300 font-medium ${
                                    row.amountA < 0 ? 'text-red-600' : 'text-gray-900'
                                }`}>
                                    {row.amountA < 0 ? '-' : ''}{Math.abs(row.amountA).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {row.currencyA}
                                </td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.accountB}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.sourceOfFundsB}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.currencyB}</td>
                                <td className={`p-2 border border-gray-300 font-medium ${
                                    row.amountB < 0 ? 'text-red-600' : 'text-gray-900'
                                }`}>
                                    {row.amountB < 0 ? '-' : ''}{Math.abs(row.amountB).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {row.currencyB}
                                </td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-gray-50">{row.feeRefundAccs1 || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-gray-50">{row.sourceOfFunds1 || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-gray-50">{row.feeRefundCurre1 || '-'}</td>
                                <td className={`p-2 border border-gray-300 font-medium bg-gray-50 ${
                                    row.feeRefundFx1 < 0 ? 'text-red-600' : row.feeRefundFx1 > 0 ? 'text-gray-900' : 'text-gray-500'
                                }`}>
                                    {row.feeRefundFx1 ? (row.feeRefundFx1 < 0 ? '-' : '') + Math.abs(row.feeRefundFx1).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '-'}
                                </td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-blue-50">{row.feeRefundAccount2 || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-blue-50">{row.sourceOfFunds2 || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-blue-50">{row.feeRefundCurrency2 || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900 bg-blue-50">{row.feeRefundFxPnl || '-'}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.settlementStatus}</td>
                                <td className="p-2 border border-gray-300 text-gray-900">{row.settlementDate || '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TradeFinanceTab;

