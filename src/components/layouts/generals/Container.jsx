import { THEME } from "@/const/THEME";
import { PADDING } from "@/const/PADDING";
import { BORDER_RADIUS } from "@/const/BORDER";

export default function Container({
  theme = THEME.PURPLE,
  padding = PADDING.NORMAL,
  borderRadius = BORDER_RADIUS.LARGE,
  className = "",
  autoMarginTop = false,
  children,
}) {
  return (
    <div
      className={`${autoMarginTop && "mt-4"} text-white ${
        theme === THEME.PURPLE
          ? "bg-violet-500"
          : theme === THEME.DARK_PURPLE
          ? "bg-violet-700"
          : theme === THEME.BLUE
          ? "bg-sky-500"
          : theme === THEME.DARK_BLUE
          ? "bg-sky-600"
          : theme === THEME.RED
          ? "bg-red-500"
          : theme === THEME.DARK_RED
          ? "bg-red-700"
          : theme === THEME.YELLOW
          ? "bg-amber-500"
          : "bg-gray-50 !text-black"
      } ${padding === PADDING.NARROW ? "p-4" : "p-6"} ${
        borderRadius === BORDER_RADIUS.LARGE
          ? "rounded-xl"
          : borderRadius === BORDER_RADIUS.SMALL
          ? "rounded"
          : borderRadius === BORDER_RADIUS.NONE
          ? "rounded-none"
          : "rounded-md"
      }  ${className}`}
    >
      {children}
    </div>
  );
}
