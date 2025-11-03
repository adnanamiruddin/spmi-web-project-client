export default function HeaderCheckbox({
  label,
  checked,
  onChange,
  disabled = false,
}) {
  return (
    <div className="flex justify-between items-center gap-2 p-3 border bg-green-500 rounded">
      <p className="font-semibold text-white text-lg">{label}</p>
      <input
        type="checkbox"
        checked={checked}
        readOnly
        disabled={disabled}
        onClick={onChange}
        className="checkbox rounded border-2 bg-transparent border-green-700 [--chkbg:theme(colors.green.800)] [--chkfg:theme(colors.white)] disabled:border-green-300 disabled:bg-green-300"
      />
    </div>
  );
}
