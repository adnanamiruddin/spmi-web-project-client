export default function LoginButton({ disabled, loading }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={` ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-500 hover:bg-green-600 hover:brightness-125 focus:brightness-75"
      } mt-2 w-full border-0 text-white text-xl py-3 rounded-lg shadow-lg ${
        loading ? "brightness-90" : ""
      }`}
    >
      {loading ? (
        <div className="w-full flex justify-center items-center gap-3">
          <p>Proses Masuk</p>
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : (
        "Masuk"
      )}
    </button>
  );
}
