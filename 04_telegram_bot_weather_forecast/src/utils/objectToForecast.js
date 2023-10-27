export function objectToForecast(obj) {
    const forecast = obj.reduce((accumulator, data) => {
        const formattedString = `Time: ${data.date}\nWeather: ${data.weather}\nDescription: ${data.weatherDescription}\nTemperature: ${data.temp}\nTemperature feels like: ${data.feels_like}\n\n`;
        return accumulator + formattedString;
    }, '');
    return forecast;
}