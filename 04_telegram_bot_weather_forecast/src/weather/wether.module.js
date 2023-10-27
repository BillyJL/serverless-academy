import { weatherConfig } from "../../config/weather.js";
import { WeatherController } from "./wether.controller.js";

export class WeatherModule {
    API_KEY = weatherConfig.apiKey
    city = weatherConfig.city
    weatherController = new WeatherController(this.API_KEY, this.city);

    run() {
        return this.weatherController;
    }
}