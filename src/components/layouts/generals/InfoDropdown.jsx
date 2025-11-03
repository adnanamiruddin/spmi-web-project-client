import { Icon } from "@iconify/react";

export default function InfoDropdown({
  children,
  disabled = false,
  orangeIcon = false,
  bgTransparent = false,
  largeDropdown = false,
  extraPadding = false,
}) {
  return (
    <div
      className={`dropdown dropdown-end relative group ${
        disabled ? "pointer-events-none opacity-50" : ""
      }`}
    >
      <div
        tabIndex={disabled ? -1 : 0}
        role="button"
        className="flex items-center"
      >
        <button
          className={`rounded ${extraPadding ? "p-4" : "p-2"} ${
            disabled
              ? "bg-gray-100"
              : `${
                  bgTransparent && !orangeIcon
                    ? "bg-transparent"
                    : orangeIcon && !bgTransparent
                    ? "bg-orange-100"
                    : "bg-gray-50"
                } hover:brightness-110 focus:brightness-90`
          }`}
        >
          <Icon
            icon="material-symbols:info-rounded"
            className={`size-6 ${
              disabled
                ? "text-gray-400"
                : `${orangeIcon ? "text-orange-400" : "text-green-500"}`
            }`}
          />
        </button>
      </div>

      {!disabled && (
        <div
          className={`dropdown-content bg-black text-white rounded z-40 py-3 px-4 shadow-sm absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 top-full mt-2 ${
            largeDropdown ? "w-96" : "w-max max-w-64"
          }`}
        >
          <div className="absolute w-4 h-4 bg-black rotate-45 -top-2 right-3"></div>
          {children}
        </div>
      )}
    </div>
  );
}
