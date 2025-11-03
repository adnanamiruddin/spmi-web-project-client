import { Icon } from "@iconify/react";

export default function AddDataButton({
  onClick,
  children = null,
  disabled = false,
  lockWidth = false,
  withoutBorder = false,
  blackTheme = false,
  className = "",
}) {
  // Define color classes based on blackTheme prop
  const colorClasses = blackTheme
    ? "bg-white font-semibold text-[#2C3442] border-[#2C3442] hover:bg-[#f3f4f6] focus:ring-[#2C3442] disabled:text-[#8A929E] disabled:border-[#8A929E]"
    : "bg-white border-green-700 text-green-700 hover:brightness-125 focus:brightness-90 focus:ring-green-300 focus:ring-opacity-50 disabled:bg-gray-300 disabled:text-green-500 disabled:border-green-500";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        py-2 px-3 rounded flex items-center transition-all duration-300
        ${colorClasses}
        ${lockWidth ? "w-28 flex justify-center" : ""}
        ${!withoutBorder ? "border-[1.5px] focus:ring-2" : "border-0"}
        ${className}
      `}
    >
      <Icon
        icon={
          blackTheme && withoutBorder
            ? "mingcute:add-fill"
            : "basil:add-outline"
        }
        className={`text-2xl me-2 ${lockWidth && "shrink-0"} ${
          blackTheme ? "text-black" : ""
        }`}
      />
      {children || "Tambah"}
    </button>
  );
}
