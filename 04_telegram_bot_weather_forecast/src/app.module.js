import { WeatherModule } from "./weather/wether.module.js";
import { TelegramModule } from "./telegram/telegram.module.js";

export async function startApp() {
    const weather = new WeatherModule().run();
    const telegram = new TelegramModule().run();

    telegram.sendTreeHoursForecast(
        weather.getWeatherForecastForEveryTreeHours.bind(weather)
    );
    telegram.sendSixHoursForecast(
        weather.getWeatherForecastForEverySixHours.bind(weather)
    );
}
