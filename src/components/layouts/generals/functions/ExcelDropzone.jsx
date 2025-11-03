import { Icon } from "@iconify/react";
import { useState, useCallback, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export default function ExcelDropzone({
  label = "Dokumen",
  onUpload,
  description = "Unggah file dengan format XLSX atau XLS",
  errorAnalysistResult = [],
  resetFile = false,
  clearAutoMargin = false,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (resetFile && selectedFile) {
      handleRemove();
    }
  }, [resetFile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile({ file });
      onUpload(file);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setSelectedFile({ file });
        onUpload(file);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "text/csv": [".csv"],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    noClick: true,
    multiple: false,
  });

  const handleRemove = () => {
    setSelectedFile(null);
    onUpload(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Helper to get the appropriate Excel icon based on file extension
  const getExcelIcon = (filename) => {
    const extension = filename.split(".").pop().toLowerCase();
    if (extension === "xlsx" || extension === "xls") {
      return "vscode-icons:file-type-excel";
    } else if (extension === "csv") {
      return "vscode-icons:file-type-csv";
    }
    return "vscode-icons:file-type-excel"; // Default to Excel icon
  };

  return (
    <div className={`w-full ${!clearAutoMargin ? "mt-4" : ""}`}>
      <div>
        <div className="mb-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon icon="f7:doc-text" className="text-2xl" />
            <p className="font-semibold text-lg">{label}</p>
          </div>
          <p className="text-gray-400">{description}</p>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".xlsx,.xls,.csv"
          className="hidden"
        />

        {selectedFile ? (
          // View after upload - everything inside the dropzone
          <div className="border rounded-lg p-3">
            <div className="flex items-center justify-between border border-gray-400 bg-white rounded-md p-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="bg-gray-100 rounded p-2">
                    <Icon
                      icon={getExcelIcon(selectedFile.file.name)}
                      className="text-2xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 bg-green-600 text-white text-xs px-1 rounded">
                    {selectedFile.file.name.split(".").pop()}
                  </div>
                </div>
                <div>
                  <p className="font-medium">{selectedFile.file.name}</p>
                  <p className="text-gray-500 text-sm">
                    {(selectedFile.file.size / 1024).toFixed(0)} KB of{" "}
                    {(selectedFile.file.size / 1024).toFixed(0)} KB •
                    <span className="text-green-600 font-medium ml-1">
                      <Icon
                        icon="material-symbols:check-circle"
                        className="inline mr-1"
                      />
                      Selesai
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={handleRemove}
                className="text-red-600 border border-red-600 px-4 py-1.5 rounded hover:bg-red-50"
                type="button"
              >
                Hapus
              </button>
            </div>

            {/* Change file button inside the dropzone */}
            <button
              onClick={triggerFileInput}
              className="mt-3 text-gray-600 font-semibold border-[1.5px] border-gray-500 rounded-md py-3 w-full hover:text-black hover:border-black"
              type="button"
            >
              Ubah Dokumen
            </button>
          </div>
        ) : (
          // View before upload
          <div
            {...getRootProps()}
            className="border-2 border-gray-400 border-dashed rounded-lg flex flex-col justify-center items-center gap-2 py-10 cursor-pointer hover:border-green-500 transition"
          >
            <input {...getInputProps()} />
            <Icon icon="uil:file-upload" className="text-5xl text-gray-500" />
            <p className="text-gray-500 font-medium text-center">
              Tambahkan file Excel atau geser ke sini
            </p>
            <p className="text-gray-400 text-sm">.xlsx, .xls, atau .csv</p>
            <button
              onClick={triggerFileInput}
              className="mt-3 text-gray-600 font-semibold border-[1.5px] border-gray-500 rounded-md py-2 w-[70%] hover:text-black hover:border-black"
              type="button"
            >
              Telusuri File
            </button>
          </div>
        )}
      </div>

      {errorAnalysistResult.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <Icon icon="lucide:text" className="text-2xl" />
            <p className="font-semibold text-lg">Analisis Hasil</p>
            <p></p>
          </div>

          <div className="mt-2 ms-8 bg-red-50 text-red-500 p-3 rounded">
            <p>Ditemukan Kesalahan</p>

            {errorAnalysistResult.map((errorMessage, i) => (
              <p key={i} className="mt-2 font-semibold">
                Terdapat kesalahan pada baris ke-{errorMessage.row} dengan pesan
                error sebagai berikut:
                <div className="mt-1 bg-red-100 p-2 ps-4 rounded font-normal">
                  {errorMessage.error}
                </div>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
