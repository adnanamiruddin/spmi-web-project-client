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
      } border border-violet-600 bg-violet-600 rounded text-white text-lg hover:brightness-110 focus:brightness-90 disabled:brightness-75 ${
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
