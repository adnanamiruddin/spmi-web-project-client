export default function TextArea({
  name,
  value,
  onChange,
  label = null,
  rows = 3,
  placeholder = "Masukkan Data",
  required = false,
  shortDescription = null,
  error = false,
  helperText = "Tolong isi data ini",
  disabled = false,
  clearAutoMargin = false,
}) {
  return (
    <div className={`w-full ${!clearAutoMargin ? "mt-4" : ""}`}>
      <div className="mb-2 flex justify-between items-center">
        <p
          className={`font-semibold text-lg
          ${error ? "text-error" : "text-black"}
          `}
        >
          {label}
        </p>
        {error ? (
          <p className="text-error">{helperText}</p>
        ) : required ? (
          <p className="text-error">*wajib diisi</p>
        ) : shortDescription ? (
          <p className="text-gray-500">{shortDescription}</p>
        ) : null}
      </div>
      <textarea
        rows={rows || 3}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="w-full bg-white py-3 px-4 rounded border border-gray-400 focus:ring-[0.5px] focus:ring-gray-500 focus:outline-none disabled:bg-stone-100 disabled:cursor-not-allowed disabled:text-gray-500"
      ></textarea>
    </div>
  );
}
