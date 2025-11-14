import { PADDING } from "@/const/PADDING";
import { THEME } from "@/const/THEME";

export default function Badge({
  theme = THEME.PURPLE,
  padding = PADDING.NORMAL,
  className = "",
  children,
}) {
  return (
    <div
      className={`rounded font-medium text-sm ${
        theme === THEME.BLUE
          ? "bg-sky-500"
          : theme === THEME.GREEN
          ? "bg-green-600"
          : "bg-gray-50"
      } ${
        padding === PADDING.NARROW ? "px-3 py-0.5" : "px-4 py-2"
      } ${className}`}
    >
      {children}
    </div>
  );
}
