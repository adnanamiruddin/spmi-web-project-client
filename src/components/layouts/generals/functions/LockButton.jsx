import { Icon } from "@iconify/react";

export default function LockButton({
  onClick,
  children = null,
  disabled = false,
  lockWidth = false,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`bg-black border border-black text-white py-2 px-3 rounded flex items-center transition-all duration-300 hover:brightness-200 focus:brightness-75 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50 disabled:bg-gray-500 disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed disabled:hover:brightness-100  ${
        lockWidth ? "w-28 flex justify-center" : ""
      } ${className}`}
    >
      <Icon
        icon="si:unlock-line"
        className={`text-xl me-2 ${lockWidth && "shrink-0"}`}
      />
      {children || "Kunci"}
    </button>
  );
}
