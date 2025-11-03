import { Icon } from "@iconify/react";

export default function BigEditButton({
  onClick,
  children = null,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-green-600 border border-green-600 text-white py-3 w-[50%] rounded flex flex-col justify-center items-center transition-all duration-300 hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:bg-green-700 disabled:bg-green-600 disabled:brightness-75 disabled:cursor-not-allowed disabled:text-gray-100"
    >
      <Icon icon="basil:edit-outline" className="text-2xl" />
      {children || "Ubah"}
    </button>
  );
}
