import { THEME } from "@/const/THEME";
import { PADDING } from "@/const/PADDING";

export default function Container({
  theme = THEME.PURPLE,
  padding = PADDING.NORMAL,
  className = "",
  children,
}) {
  return (
    <div
      className={`rounded-xl text-white ${
        theme === THEME.PURPLE
          ? "bg-violet-500"
          : theme === THEME.DARK_PURPLE
          ? "bg-violet-700"
          : "bg-gray-50"
      } ${padding === PADDING.NARROW ? "p-4" : "p-6"} ${className}`}
    >
      {children}
    </div>
  );
}
