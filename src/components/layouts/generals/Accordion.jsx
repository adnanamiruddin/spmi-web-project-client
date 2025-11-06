import { useState } from "react";

export default function Accordion({
  label,
  children,
  withoutBorderOnOpen = false,
  theme = "",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`collapse collapse-arrow border-2 rounded-lg p-2 h-max ${
        theme === "purple"
          ? "border-violet-300 bg-violet-50"
          : "border-gray-300 bg-white"
      } ${className}`}
    >
      <input
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div
        className={`collapse-title text-3xl font-bold cursor-pointer ${
          theme === "purple" ? "text-violet-600" : "text-black"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </div>
      <div
        className={`collapse-content ${
          isOpen
            ? `${!withoutBorderOnOpen && "border-t-2"} mx-4 p-0 ${
                theme === "purple" ? "border-violet-300" : "border-gray-300"
              }`
            : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
