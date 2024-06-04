import { useEffect, useState } from "react";

export default function NotificationType(props) {
  const { type, title, message, duration, onClose } = props;
  const [progress, setProgress] = useState(0);

  const icons = {
    success: "success.svg",
    warning: "warning.svg",
    error: "error.svg",
    info: "info.svg",
  };

  const colors = {
    success: "#10AC61",
    warning: "#FCB41E",
    error: "#ED2630",
    info: "#2743A6",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    const interval = setInterval(() => {
      setProgress((prev) => prev + 100 / (duration / 100));
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration, onClose]);

  return (
    <div className="w-[369px] fixed top-5 right-5 z-50 bg-white shadow-xl py-[12px] px-[20px] rounded-t transform transition-transform translate-x-0 animate-slide-in">
      <div className="flex justify-between items-center">
        {/* ICON NOTIFICATION */}
        <div className="mr-[11.5px]">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}notifications/${icons[type]}`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} - ${title}`}
          />
        </div>

        <div className="w-[1px] h-[20px] bg-[#ebebeb] mr-[11.5px]"></div>

        {/* TEXT NOTIFICATION */}
        <div className="pr-[18px]">
          <div className="text-fs-16">{title}</div>
          <div className="text-fs-12 text-gry-70">{message}</div>
        </div>

        {/* CLOSE ICON */}
        <div>
          <img
            className="cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-50.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} - Close`}
            width={10}
            height={10}
            onClick={onClose}
          />
        </div>
      </div>
      {/* LINE PROGRESS */}
      <div
        className="fixed bottom-0 left-0 h-1"
        style={{
          width: `${progress}%`,
          backgroundColor: colors[type],
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
