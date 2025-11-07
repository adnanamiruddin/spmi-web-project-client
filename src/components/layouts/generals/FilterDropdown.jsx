import NotFound from "@/components/layouts/generals/NotFound";
import ReactSelect from "react-select";

export default function FilterDropdown({
  options,
  onChange,
  label = null,
  placeholder = "Pilih Data",
  disabled = false,
  modalId = null,
  className = "",
}) {
  const safeOptions = Array.isArray(options) ? options : [];

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="mb-2">
          <p className="font-semibold text-lg text-white">{label}</p>
        </div>
      )}

      <ReactSelect
        className="basic-single border-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-600"
        classNamePrefix="select"
        menuPlacement="auto"
        onChange={(selectedOption) => {
          if (typeof onChange === "function") {
            onChange(selectedOption);
          }
        }}
        isDisabled={disabled}
        isLoading={disabled}
        isClearable={true}
        isSearchable={true}
        options={safeOptions}
        placeholder={placeholder}
        styles={{
          control: (base, state) => ({
            ...base,
            paddingLeft: "8px",
            paddingTop: "5px",
            paddingBottom: "5px",
            borderWidth: "1px",
            borderColor: state.isFocused
              ? "rgb(124 58 237)"
              : "rgb(156 163 175)",
            borderRadius: "0.25rem",
            boxShadow: state.isFocused
              ? "0 0 5px rgba(124,58,237,0.4)"
              : "none",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused
              ? "rgb(237 233 254)"
              : state.isSelected
              ? "rgb(139 92 246)"
              : "white",
            color: state.isFocused
              ? "black"
              : state.isSelected
              ? "white"
              : "black",
          }),
        }}
        menuPortalTarget={
          typeof window !== "undefined"
            ? document.getElementById(modalId) || document.body
            : undefined
        }
        noOptionsMessage={() => <NotFound />}
      />
    </div>
  );
}
