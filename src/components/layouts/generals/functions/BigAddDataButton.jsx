import { Icon } from "@iconify/react";

export default function BigAddDataButton({
  onClick,
  children = null,
  disabled = false,
  onlyIcon = false,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-white border-[1.5px] border-violet-700 py-3 w-[50%] text-violet-700 font-semibold rounded-md flex flex-col justify-center items-center hover:brightness-125 focus:brightness-90 disabled:bg-gray-300 disabled:text-violet-500 disabled:border-violet-500 disabled:cursor-not-allowed ${className}`}
    >
      <Icon icon="basil:add-outline" className="text-3xl" />
      {!onlyIcon && (children || "Tambah")}
    </button>
  );
}
