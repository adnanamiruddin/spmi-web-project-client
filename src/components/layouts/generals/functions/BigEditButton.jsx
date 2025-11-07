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
      className="bg-violet-600 border border-violet-600 text-white py-3 w-[50%] rounded flex flex-col justify-center items-center transition-all duration-300 hover:bg-violet-500 hover:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 focus:bg-violet-700 disabled:bg-violet-600 disabled:brightness-75 disabled:cursor-not-allowed disabled:text-gray-100"
    >
      <Icon icon="basil:edit-outline" className="text-2xl" />
      {children || "Ubah"}
    </button>
  );
}
