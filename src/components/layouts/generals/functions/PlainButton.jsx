export default function PlainButton({
  onClick,
  children,
  disabled = false,
  lockWidth = false,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border border-violet-600 text-violet-600 py-2 px-3 rounded flex items-center transition-all duration-300 hover:brightness-125 focus:brightness-90 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed disabled:brightness-75 disabled:hover:brightness-75 ${
        lockWidth ? "w-28 flex justify-center" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
