export default function ToggleSwitch({
  checked,
  onChange,
  disabled = false,
  className = "",
}) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      aria-label="Toggle"
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex items-center w-12 h-6 rounded-full transition-colors focus:outline-none ${
        checked ? "bg-green-500" : "bg-red-500"
      } ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      <span
        className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
        style={{ transition: "transform 0.2s cubic-bezier(.4,0,.2,1)" }}
      />
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        tabIndex={-1}
        aria-hidden="true"
      />
    </button>
  );
}
