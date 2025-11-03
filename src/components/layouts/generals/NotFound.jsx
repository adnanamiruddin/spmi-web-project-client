import Image from "next/image";

export default function NotFound({
  message = "Data Tidak Ditemukan",
  button = false,
  buttonTitle = "Tambah Data",
  buttonOnClick = () => {},
  buttonDisabled = false,
  pageIcon = false,
}) {
  return (
    <div className="bg-white flex flex-col justify-center items-center gap-3 py-12">
      <Image
        src="/icon-not-found.png"
        alt="Not Found"
        width={500}
        height={500}
        className="w-1/4"
      />
      {message && (
        <p
          className={`text-center font-semibold ${
            pageIcon ? "my-3 text-black text-2xl" : "text-gray-400 text-lg"
          }`}
        >
          {message}
        </p>
      )}
      {button && (
        <button
          disabled={buttonDisabled}
          className="text-white px-12 py-1.5 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-violet-500 hover:bg-violet-400 disabled:bg-violet-700 focus:ring-violet-500 focus:bg-violet-600"
          onClick={buttonOnClick}
        >
          {buttonTitle}
        </button>
      )}
    </div>
  );
}
