export default function HeaderRadio({
  label,
  checked,
  onChange,
  disabled = false,
  name = "HeaderRadioGroup",
}) {
  return (
    <div className="flex justify-between items-center gap-2 p-3 border bg-violet-500 rounded">
      <p className="font-semibold text-white text-lg">{label}</p>
      <input
        type="radio"
        checked={checked}
        readOnly
        disabled={disabled}
        name={name}
        onClick={onChange}
        className="radio radio-success !border-2 !border-violet-600"
      />
    </div>
  );
}
