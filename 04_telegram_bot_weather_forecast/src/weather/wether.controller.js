import { objectToForecast } from "../utils/objectToForecast.js";
import { WeatherService } from "./wether.service.js";

export class WeatherController {
    constructor(API_KEY, city) {
        this.weatherService = new WeatherService(API_KEY, city);
    }

    async getWeatherForecastForEveryTreeHours() {
        const data = (await this.weatherService.getNecessaryData()).slice(0, 5);
        const forecast = objectToForecast(data);
        return forecast;
    }

    async getWeatherForecastForEverySixHours() {
        const rawData = (await this.weatherService.getNecessaryData());
        const data = rawData.filter((_, index) => index % 2 === 0).slice(0, 5);
        const forecast = objectToForecast(data);
        return forecast;
    }

}