import NotFound from "@/components/layouts/generals/NotFound";
import ReactSelect from "react-select";

export default function Select({
  name,
  options,
  dataForm,
  dataFormValue,
  label = null,
  shortDescription = null,
  placeholder = "Pilih Data",
  error = false,
  helperText = "Tolong isi data ini",
  disabled = false,
  required = false,
  modalId = null,
  isArrayValue = false,
  onChangeArrayValue = (selectedOption) => {
    selectedOption;
  },
  clearAutoMargin = false,
  emptyLabel = false,
}) {
  const safeOptions = Array.isArray(options) ? options : [];

  const determineValue = () => {
    if (
      dataFormValue &&
      typeof dataFormValue === "object" &&
      dataFormValue.value
    ) {
      return (
        safeOptions.find((option) => option.value === dataFormValue.value) ||
        null
      );
    }
    return safeOptions.find((option) => option.value === dataFormValue) || null;
  };

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
      <ReactSelect
        className="basic-single border-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-600"
        classNamePrefix="select"
        menuPlacement="auto"
        name={name}
        onChange={(selectedOption) => {
          if (!isArrayValue) {
            dataForm.setFieldValue(
              name,
              selectedOption ? selectedOption.value : ""
            );
          } else {
            onChangeArrayValue(selectedOption);
          }
        }}
        value={determineValue()}
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
              ? "rgb(22 163 74)"
              : "rgb(156 163 175)",
            borderRadius: "0.25rem",
            boxShadow: state.isFocused
              ? "0 0 5px rgba(34, 197, 94, 0.5)"
              : "none",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused
              ? "rgb(187 247 208)"
              : state.isSelected
              ? "rgb(34 197 94)"
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
