export default function Input({
  name,
  value,
  onChange,
  label = null,
  placeholder = "Masukkan Data",
  type = "text",
  required = false,
  unit = null,
  shortDescription = null,
  error = false,
  helperText = "Tolong isi data ini",
  disabled = false,
  clearAutoMargin = false,
  emptyLabel = false,
}) {
  return (
    <div className={`w-full ${!clearAutoMargin ? "mt-4" : ""}`}>
      <div
        className={`mb-2 flex justify-between items-center ${
          emptyLabel && (required || error || shortDescription)
            ? "mb-3"
            : emptyLabel && "mb-9"
        }`}
      >
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
      <div className="relative w-full">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className={`w-full bg-white py-3 px-4 rounded border border-gray-400 focus:ring-[0.5px] focus:ring-violet-500 focus:outline-none focus:shadow-sm focus:shadow-violet-500 disabled:bg-stone-100 disabled:cursor-not-allowed disabled:text-gray-500 text-black ${
            type === "time" ? "custom-time-input" : "pr-12"
          }`}
        />
        {unit && (
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 font-semibold">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}
