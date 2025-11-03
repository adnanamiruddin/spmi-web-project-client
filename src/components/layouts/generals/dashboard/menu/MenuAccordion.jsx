import { useState } from "react";

export default function MenuAccordion({ label, children, className = "" }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`collapse collapse-arrow rounded-none ${className}`}>
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
      <div className="collapse-content p-0">{children}</div>
    </div>
  );
}
