export default function ModalCancelButton({
  onClick,
  children,
  loading = false,
  fullWidth = false,
}) {
  return (
    <button
      onClick={loading ? null : onClick}
      className={`${
        fullWidth ? "w-full py-3" : "w-36 py-1.5"
      } border border-gray-900 rounded font-medium text-lg text-gray-500 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-600 focus:bg-gray-200 focus:border-gray-600 focus:text-black ${
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
