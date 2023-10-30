export const getProperCcy = (data, ccy) => {
    return data.find((currency) => currency.ccy === ccy);
}