import { useEffect, useState } from "react";

export function loaderLine({ progress }) {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{

  },[progress])

  return (
    <div className="w-full h-[12px] bg-gry-50">
      <div
        className="h-full bg-bl-100"
        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
      />
    </div>
  );
}
