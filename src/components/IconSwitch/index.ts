import cloudines from "images/cloudines.svg";
import humidity from "images/humidity.svg";
import pressure from "images/pressure.svg";
import windSpeed from "images/wind-speed.svg";

function IconSwitch(icon: string) {
  switch (icon) {
    case "cloudines":
      return cloudines;
    case "humidity":
      return humidity;
    case "pressure":
      return pressure;
    case "windSpeed":
      return windSpeed;
    default:
      return null;
  }
}

export default IconSwitch;
