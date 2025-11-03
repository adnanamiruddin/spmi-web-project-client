import { Icon } from "@iconify/react";

export default function DetailDropdown({
  label = null,
  children,
  dropdownTop = false,
}) {
  return (
    <div className="dropdown dropdown-end relative group">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center cursor-pointer"
      >
        {label}
        <Icon icon="mdi:chevron-down" className="text-2xl" />
      </div>
      <div
        className={`dropdown-content bg-black text-white rounded z-40 w-max py-3 px-4 shadow-sm absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 
        ${dropdownTop ? "bottom-full mb-2 -me-3.5" : "top-full mt-2"}`}
      >
        <div
          className={`absolute w-4 h-4 bg-black rotate-45 
          ${dropdownTop ? "-bottom-2 right-3" : "-top-2 right-3"}`}
        ></div>
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </div>
  );
}
