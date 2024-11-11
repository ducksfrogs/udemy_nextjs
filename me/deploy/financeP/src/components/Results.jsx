import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input)
    const initialInvestment = resultsData[0].valueEndOfYear - 
                        resultsData[0].interest - resultsData[0].annualInvestment;

    return (
        <>
            <table id= "result">
                <thead>

                <tr>
                    <th>year</th>
                    <th>Investment value</th>
                    <th>Total</th>
                    <th>year</th>
                    <th>year</th>
                </tr>
                </thead>
                <tbody>
                    {resultsData.map(yearData => {
                        const totalInverest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;

                        const totalAmountInvested = yearData.valueEndOfYear - totalInverest;

                        return <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInverest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>

                        </tr>
                    })}
                </tbody>
            </table>

        </>
    )
}