import { useState } from "react";

export default function Accordion({
  label,
  children,
  withoutBorderOnOpen = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`collapse collapse-arrow border-2 border-gray-300 rounded-lg p-2 bg-white ${className}`}
    >
      <input
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div
        className="collapse-title text-xl font-bold cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </div>
      <div
        className={`collapse-content ${
          isOpen
            ? `${!withoutBorderOnOpen && "border-t-2 border-gray-300"} mx-4 p-0`
            : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
