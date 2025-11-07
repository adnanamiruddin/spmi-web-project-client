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
      } border border-violet-600 bg-violet-600 rounded text-white text-lg hover:bg-violet-500 hover:border-violet-500 focus:bg-violet-700 focus:border-violet-700 ${
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
