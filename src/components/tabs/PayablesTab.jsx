import React from 'react';

const PayablesTab = () => {
    const dates = ['4-Oct', '5-Oct', '6-Oct', '7-Oct', '10-Oct', '11-Oct', '12-Oct', '13-Oct', '14-Oct', '17-Oct', '18-Oct', '19-Oct', '20-Oct', '21-Oct', '24-Oct', '25-Oct', '26-Oct', '27-Oct', '28-Oct', '31-Oct', '1-Nov', '2-Nov'];
    const dealers = ['Tinashe', 'Marongwe', 'Tatenda', 'ET', 'Muchenge', 'Upenyu'];

    // Cells with comments (red triangles) - Tatenda in USD section
    const cellsWithComments = {
        'USD-Tatenda-13-Oct': true,
        'USD-Tatenda-14-Oct': true,
        'USD-Tatenda-2-Nov': true
    };

    const hasComment = (currency, dealer, date) => {
        return cellsWithComments[`${currency}-${dealer}-${date}`] || false;
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
                                <th className="text-left text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800 sticky left-0 z-10"></th>
                                {dates.map((date) => (
                                    <th key={date} className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">
                                        {date}
                                    </th>
                                ))}
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
                                </tr>
                            ))}
                            <tr className="bg-gray-50">
                                <td className="p-2 border border-gray-300 text-gray-900 font-bold sticky left-0 z-10 bg-gray-50">TOTAL</td>
                                {dates.map((date) => (
                                    <td key={date} className="p-2 border border-gray-300 text-center text-gray-900 font-bold">
                                        -
                                    </td>
                                ))}
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
                                <th className="text-left text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800 sticky left-0 z-10"></th>
                                {dates.map((date) => (
                                    <th key={date} className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">
                                        {date}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {dealers.map((dealer) => (
                                <tr key={dealer}>
                                    <td className="p-2 border border-gray-300 text-gray-900 font-medium sticky left-0 z-10 bg-white">{dealer}</td>
                                    {dates.map((date) => (
                                        <td key={date} className="p-2 border border-gray-300 text-center text-gray-900 relative">
                                            {hasComment('USD', dealer, date) ? (
                                                <span className="relative">
                                                    -
                                                    <span className="absolute top-0 right-0 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-red-500 transform translate-x-1 -translate-y-1"></span>
                                                </span>
                                            ) : (
                                                '-'
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
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
                                <th className="text-left text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800 sticky left-0 z-10"></th>
                                {dates.map((date) => (
                                    <th key={date} className="text-center text-xs font-medium text-white bg-slate-900 p-2 border border-slate-800">
                                        {date}
                                    </th>
                                ))}
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
                                </tr>
                            ))}
                            <tr className="bg-gray-50">
                                <td className="p-2 border border-gray-300 text-gray-900 font-bold sticky left-0 z-10 bg-gray-50">Total</td>
                                {dates.map((date) => (
                                    <td key={date} className="p-2 border border-gray-300 text-center text-gray-900 font-bold">
                                        -
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PayablesTab;

