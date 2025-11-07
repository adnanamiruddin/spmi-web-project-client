export default function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  removeOuterBorder = false,
  miniLabelText = false,
  blackTheme = false,
  nonBoldText = false,
}) {
  return (
    <div
      className={`flex items-center gap-2 p-3 ${checked ? "bg-white" : ""} ${
        removeOuterBorder ? "" : "border"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`checkbox rounded-sm border-2 bg-transparent ${
          !blackTheme
            ? "border-violet-500 [--chkbg:theme(colors.violet.500)] [--chkfg:theme(colors.white)] disabled:border-violet-300 disabled:bg-violet-300"
            : "border-black [--chkbg:theme(colors.gray.700)] [--chkfg:theme(colors.white)] disabled:border-gray-500 disabled:bg-gray-500"
        }`}
      />

      {label && (
        <p
          className={`${!nonBoldText ? "font-semibold" : ""} ${
            miniLabelText && "text-sm"
          } ${
            !disabled && blackTheme
              ? "text-black"
              : disabled && blackTheme
              ? "text-gray-400"
              : !disabled
              ? "text-violet-500"
              : "text-violet-200"
          }`}
        >
          {label}
        </p>
      )}
    </div>
  );
}
