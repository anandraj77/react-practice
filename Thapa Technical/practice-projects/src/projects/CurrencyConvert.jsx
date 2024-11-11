import { useEffect, useState } from "react"

export const CurrencyConvert = () => {

    const API = `https://v6.exchangerate-api.com/v6/1eeccfb59edc61c8c944107e/latest/usd`

    const [apiData, setApiData] = useState("")
    const [input, setInput] = useState(1)
    const [convertedAmount, setConvertedAmount] = useState("");
    const [fromData, setFromData] = useState("USD")
    const [toData, setToData] = useState("INR")
    // const [fromFetch, setFromFetch] = useState("")

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(API)
    //         const data = await res.json()
    //         setApiData(data.conversion_rates)
    //     }
    //     fetchData()
    // }, [])

    // useEffect(() => {
    //     const fetchFromData = async () => {
    //         const res = await fetch(`https://v6.exchangerate-api.com/v6/1eeccfb59edc61c8c944107e/latest/${fromData}`)
    //         const data = await res.json();
    //         setFromFetch(data.conversion_rates);
    //     }
    //     fetchFromData();
    // }, [])

    // const objectData = Object.keys(apiData)

    // const handleFormSubmit = (e) => {
    //     e.preventDefault()
    //     setConvertedAmount(input * fromFetch[toData])
    // }
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(API);
            const data = await res.json();
            setApiData(data.conversion_rates); // Set the conversion rates
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (apiData && fromData && toData) {
            // Check if apiData is loaded
            const convert = () => {
                const fromRate = apiData[fromData]; // Get the rate for the selected 'from' currency
                const toRate = apiData[toData]; // Get the rate for the selected 'to' currency
                if (fromRate && toRate) {
                    const amountInUSD = input / fromRate; // Convert the input amount to USD
                    const result = amountInUSD * toRate; // Convert the USD amount to the 'to' currency
                    setConvertedAmount(result.toFixed(2)); // Set the result with 2 decimal points
                }
            };

            convert(); // Perform the conversion
        }
    }, [apiData, input, fromData, toData]); // Trigger conversion when input or currency changes

    const objectData = apiData ? Object.keys(apiData) : []; // Only use apiData if it's available

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Conversion is already handled automatically in the useEffect
    };
    
    return (
        <>
            <div className="currency-converter">
                <h1>Currency Converter</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="amount">Amount:</label>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="number" id="amount" name="amount" placeholder="Enter amount" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="from-currency">From:</label>
                        <select id="from-currency" name="from-currency"
                            value={fromData}
                            onChange={(e) => setFromData(e.target.value)}
                        >
                            {
                                objectData.map((curName, index) => {
                                    return (
                                        <option value={curName} key={index}>{curName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="to-currency">To:</label>
                        <select id="to-currency" name="to-currency"
                            value={toData}
                            onChange={(e) => setToData(e.target.value)}
                        >
                            {
                                objectData.map((curName, index) => {
                                    return (
                                        <option value={curName} key={index}>{curName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="submit">Convert</button>
                    </div>
                </form>

                <div className="result">
                    <p><strong>Converted Amount:</strong> <span id="converted-amount">{convertedAmount}</span></p>
                </div>
            </div>
        </>
    )
}



// {Object.entries(finalData).map(([key, value]) => (
//     <option key={key} value="USD">{key}: {String(value)}</option>
// ))}