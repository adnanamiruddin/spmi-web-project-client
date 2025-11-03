export default function ModalSubmitButton({
  onClick,
  children,
  loading = false,
  fullWidth = false,
}) {
  return (
    <button
      type="button"
      onClick={loading ? null : onClick}
      className={`${
        fullWidth ? "w-full py-3" : "w-36 py-1.5"
      } border border-green-600 bg-green-600 rounded text-white text-lg hover:bg-green-500 hover:border-green-500 focus:bg-green-700 focus:border-green-700 ${
        loading ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {loading ? (
        <span className="loading loading-bars loading-sm -mb-0.5"></span>
      ) : (
        children
      )}
    </button>
  );
}
