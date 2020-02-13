const apiKey = () => "e8faecef1e5c6087aa86ae7bbb97fb84";
const openWeatherMapApi = () => "https://api.openweathermap.org/";

export const currentWeatherApi = (city: string) =>
  `${openWeatherMapApi()}/data/2.5/weather?q=${city}&cnt=6&units=metric&appid=${apiKey()}`;
export const forecastWeatherApi = (city: string) =>
  `${openWeatherMapApi()}/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey()}`;
