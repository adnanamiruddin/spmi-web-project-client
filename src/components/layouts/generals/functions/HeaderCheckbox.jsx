export default function HeaderCheckbox({
  label,
  checked,
  onChange,
  disabled = false,
}) {
  return (
    <div className="flex justify-between items-center gap-2 p-3 border bg-violet-500 rounded">
      <p className="font-semibold text-white text-lg">{label}</p>
      <input
        type="checkbox"
        checked={checked}
        readOnly
        disabled={disabled}
        onClick={onChange}
        className="checkbox rounded border-2 bg-transparent border-violet-700 [--chkbg:theme(colors.violet.800)] [--chkfg:theme(colors.white)] disabled:border-violet-300 disabled:bg-violet-300"
      />
    </div>
  );
}
