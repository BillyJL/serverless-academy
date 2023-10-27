import { formateDate } from "../utils/formatDate.js";
import { getApiResponse } from "../utils/getApiResponse.js";

export class WeatherService {
    constructor(API_KEY, city) {
        this.api_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    }

    async getWeatherForecast() {
        return await getApiResponse(this.api_url);
    }

    async getNecessaryData() {
        const rawData = (await this.getWeatherForecast()).data.list;

        const data = rawData.map((weather) => {
            return {
                date: formateDate(weather.dt_txt),
                weather: weather.weather[0].main,
                weatherDescription: weather.weather[0].description,
                temp: weather.main.temp,
                feels_like: weather.main.feels_like,
            };
        });
        return data;
    }
}
