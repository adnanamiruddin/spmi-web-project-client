export default function RadioInput({
  label,
  checked,
  onChange,
  disabled = false,
  name = "HeaderRadioGroup",
}) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        checked={checked}
        readOnly
        disabled={disabled}
        name={name}
        onClick={onChange}
        className="radio !border-2 !border-white checked:bg-white"
      />
      <p>{label}</p>
    </div>
  );
}
