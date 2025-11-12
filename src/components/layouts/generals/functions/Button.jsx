import { THEME } from "@/const/THEME";

export default function Button({
  onClick,
  children = null,
  disabled = false,
  icon = null,
  theme = null,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-3 w-full text-white text-lg font-semibold rounded-xl flex justify-center items-center gap-1 hover:brightness-110 focus:brightness-90 disabled:brightness-75 disabled:cursor-not-allowed ${
        theme === THEME.PURPLE
          ? "bg-violet-500"
          : theme === THEME.DARK_PURPLE
          ? "bg-violet-700"
          : theme === THEME.GREEN
          ? "bg-green-500"
          : "bg-gray-50 !text-black"
      } ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
