import Lottie from "lottie-react";
import soccer from "../assets/soccer-lottie.json";
import useWindowSize from "../hooks/Resize";

const SoccerAnimation = () => {
  return <Lottie animationData={soccer} loop={true} />;
};

export default SoccerAnimation;
