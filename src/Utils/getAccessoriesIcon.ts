import SpeedSvg from "../assets/speed.svg";
import AccelerationSvg from "../assets/acceleration.svg";
import ForceSvg from "../assets/force.svg";
import GasolineSvg from "../assets/gasoline.svg";
import ExchangeSvg from "../assets/exchange.svg";
import PeopleSvg from "../assets/people.svg";
import EnergySvg from "../assets/energy.svg";
import HybridSvg from "../assets/hybrid.svg";
import CarSvg from "../assets/car.svg";

export function getAccessoriesIcon(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg;
    case "acceleration":
      return AccelerationSvg;
    case "turning_diameter":
      return ForceSvg;
    case "gasoline":
      return GasolineSvg;
    case "exchange":
      return ExchangeSvg;
    case "seats":
      return PeopleSvg;
    case "electric_motor":
      return EnergySvg;
    case "Hybrid_motor":
      return HybridSvg;

    default:
      return CarSvg;
  }
}
