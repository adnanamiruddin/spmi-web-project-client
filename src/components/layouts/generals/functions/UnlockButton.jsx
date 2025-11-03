import { Icon } from "@iconify/react";

export default function UnlockButton({
  onClick,
  children = null,
  disabled = false,
  onlyIcon = false,
  lockWidth = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-white border-[1.5px] border-green-500 py-3 text-green-500 font-semibold rounded-md flex flex-col justify-center items-center hover:brightness-125 focus:brightness-90 disabled:bg-gray-300 disabled:text-green-300 disabled:border-green-300 disabled:cursor-not-allowed ${
        lockWidth ? "w-28" : "w-[50%]"
      }`}
    >
      <Icon icon="mingcute:lock-line" className="text-3xl" />
      {!onlyIcon && `${children || "Buka Kunci"}`}
    </button>
  );
}
