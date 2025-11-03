export default function WhiteButton({
  onClick,
  disabled = false,
  className = "",
  children,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`bg-gray-50 py-2 px-8 rounded font-semibold hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 focus:bg-gray-100 disabled:bg-gray-50 disabled:brightness-75 disabled:cursor-not-allowed disabled:text-gray-400 ${className}`}
    >
      {children || "Preview Data"}
    </button>
  );
}
