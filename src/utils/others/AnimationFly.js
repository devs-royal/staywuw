import React from "react";
import Lottie from "lottie-react";

import animationData from "../../assets/animations/animated-page-transitions.json";

export default function AnimationFly() {
  return (
    <div className="modal-backdrop modal-loading">
      <div className="modal-box">
          <Lottie className="transition-royal" animationData={animationData} />
      </div>
    </div>
  );
}
