export function StepsBannerStyle(index, card) {
  switch (index) {
    case 0:
      return `${card === 1 && "rotate-[151deg]"} ${card === 2 && "rotate-[30deg]"}`;
    case 1:
      return `${card === 1 && "bottom-[7px] rotate-[332deg]"} ${card === 2 && "top-[9px] rotate-[29deg]"}`;
    case 2:
      return `${card === 1 && "bottom-[14px] rotate-[160deg]"} ${card === 2 && "top-[16px] rotate-[20deg]"}`;
    case 3:
      return `${card === 1 && "bottom-[18px] rotate-[353deg]"} ${card === 2 && "top-[20px] rotate-[12deg]"}`;
    case 4:
      return `${card === 1 && "bottom-[18px]"} ${card === 2 && "top-[22px]"}`;
    case 5:
      return `${card === 1 && "bottom-[14px] rotate-[24deg]"} ${card === 2 && "top-[20px] rotate-[348deg]"}`;
    case 6:
      return `${card === 1 && "bottom-[7px] rotate-[33deg]"} ${card === 2 && "top-[13px] rotate-[329deg]"}`;
    case 7:
      return `${card === 1 && "rotate-[36deg]"} ${card === 2 && "rotate-[313deg]"}`;
  }
}
