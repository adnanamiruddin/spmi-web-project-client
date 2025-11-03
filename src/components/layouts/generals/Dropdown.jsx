import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

export default function Dropdown({
  items,
  selectedItem,
  setSelectedItem,
  getItemDetailDisplay,
  label = null,
  disabled = false,
  miniDropdown = false,
  bgTransparent = false,
  textBlack = false,
  borderWhite = false,
  borderBlack = false,
  borderGreen = false,
  dropdownTop = false,
  dropdownLeft = false,
  maxWidth = false,
  borderRoundedOnlyLeft = false,
}) {
  const dropdownRef = useRef(null);
  //
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      ref={dropdownRef}
      className={`flex items-center font-semibold ${
        !borderRoundedOnlyLeft ? "rounded" : "rounded-l"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""} ${
        miniDropdown ? "px-3 py-1" : "px-4 py-2"
      } ${bgTransparent ? "bg-transparent" : "bg-green-500"} ${
        textBlack ? "text-black" : "text-white"
      } ${borderWhite ? "border-[1.5px] border-white" : ""} ${
        borderBlack ? "border-[1.5px] border-black" : ""
      } ${borderGreen ? "border-[1.5px] border-green-500" : ""}`}
    >
      {label}
      {!miniDropdown && (
        <span className="font-semibold ms-1">{selectedItem}</span>
      )}
      <div
        className={`dropdown ${dropdownTop ? "dropdown-top" : ""} ${
          dropdownLeft ? "dropdown-left" : ""
        }`}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={
            disabled
              ? () => {}
              : () => {
                  setIsDropdownOpen(!isDropdownOpen);
                }
          }
        >
          <Icon
            icon={
              isDropdownOpen
                ? "grommet-icons:form-up"
                : "grommet-icons:form-down"
            }
            className={`text-2xl ms-1 ${disabled ? "cursor-not-allowed" : ""}`}
          />
        </div>
        {isDropdownOpen && (
          <div
            tabIndex={0}
            className={`mt-1 dropdown-content bg-white z-40 shadow text-black border border-gray-400 rounded max-h-96 overflow-auto ${
              maxWidth ? "w-max" : "w-64"
            } ${dropdownTop ? "-me-20 mb-1" : ""}`}
          >
            <div className="flex flex-col w-full py-2">
              {items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedItem(item);
                    setIsDropdownOpen(false);
                  }}
                  className="text-start py-1.5 px-5 font-normal hover:bg-green-500 hover:text-white"
                >
                  {getItemDetailDisplay(item)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
