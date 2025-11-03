import { showErrorAlert } from "@/components/utils/alerts";
import { Icon } from "@iconify/react";
import { useState, useCallback, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageDropzone({
  label,
  onUpload,
  description = "Unggah gambar dengan format PNG, JPG, JPEG, atau WEBP",
  clearAutoMargin = false,
  maxImage = 5,
  resetPhoto = false,
  canMultipleUpload = false,
}) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (resetPhoto && selectedFiles.length > 0) {
      // Revoke all object URLs to avoid memory leaks
      selectedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
      setSelectedFiles([]);
      onUpload([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [resetPhoto]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      if (canMultipleUpload) {
        // Check if adding these files would exceed the maximum
        if (selectedFiles.length + files.length > maxImage) {
          showErrorAlert({
            message: `Maksimal ${maxImage} gambar yang dapat diunggah`,
            showAsNotification: true,
          });

          // Only add files up to the maximum allowed
          const availableSlots = maxImage - selectedFiles.length;
          if (availableSlots <= 0) return;

          const filesToAdd = files.slice(0, availableSlots);
          const newFiles = filesToAdd.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
          }));

          setSelectedFiles((prev) => [...prev, ...newFiles]);
          onUpload([...selectedFiles.map((f) => f.file), ...filesToAdd]);
        } else {
          // Add all files if under the limit
          const newFiles = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
          }));
          setSelectedFiles((prev) => [...prev, ...newFiles]);
          onUpload([...selectedFiles.map((f) => f.file), ...files]);
        }
      } else {
        // Handle single file only
        const file = files[0];
        const newFile = {
          file,
          preview: URL.createObjectURL(file),
        };
        setSelectedFiles([newFile]);
        onUpload(file);
      }
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        if (canMultipleUpload) {
          // Check if adding these files would exceed the maximum
          if (selectedFiles.length + acceptedFiles.length > maxImage) {
            showErrorAlert({
              message: `Maksimal ${maxImage} gambar yang dapat diunggah`,
              showAsNotification: true,
            });

            // Only add files up to the maximum allowed
            const availableSlots = maxImage - selectedFiles.length;
            if (availableSlots <= 0) return;

            const filesToAdd = acceptedFiles.slice(0, availableSlots);
            const newFiles = filesToAdd.map((file) => ({
              file,
              preview: URL.createObjectURL(file),
            }));

            setSelectedFiles((prev) => [...prev, ...newFiles]);
            onUpload([...selectedFiles.map((f) => f.file), ...filesToAdd]);
          } else {
            // Add all files if under the limit
            const newFiles = acceptedFiles.map((file) => ({
              file,
              preview: URL.createObjectURL(file),
            }));
            setSelectedFiles((prev) => [...prev, ...newFiles]);
            onUpload([...selectedFiles.map((f) => f.file), ...acceptedFiles]);
          }
        } else {
          // Handle single file only
          const file = acceptedFiles[0];
          const newFile = {
            file,
            preview: URL.createObjectURL(file),
          };
          setSelectedFiles([newFile]);
          onUpload(file);
        }
      }
    },
    [onUpload, selectedFiles, canMultipleUpload, maxImage]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".webp"] },
    maxSize: 10 * 1024 * 1024, // 10MB
    noClick: true,
    multiple: canMultipleUpload,
  });

  const handleRemove = (index) => {
    const newFiles = [...selectedFiles];

    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(newFiles[index].preview);

    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);

    // Update parent component with remaining files
    if (canMultipleUpload) {
      onUpload(newFiles.map((f) => f.file));
    } else if (newFiles.length > 0) {
      onUpload(newFiles[0].file);
    } else {
      onUpload(null);
    }

    if (fileInputRef.current && newFiles.length === 0) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={`w-full ${!clearAutoMargin ? "mt-4" : ""}`}>
      <div className="mb-2 flex justify-between items-center">
        <p className="font-semibold text-lg">{label}</p>
        <p className="text-gray-400">
          {description}
          {canMultipleUpload && ` (Maksimal ${maxImage} gambar)`}
        </p>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".png,.jpg,.jpeg,.webp,image/*"
        className="hidden"
        multiple={canMultipleUpload}
      />

      {selectedFiles.length > 0 ? (
        // View after upload
        <div>
          <div className="border rounded-lg p-3 bg-transparent">
            {selectedFiles.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between border border-gray-400 p-2 rounded-md mb-3 last:mb-0"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={file.preview}
                    alt="preview"
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-medium">{file.file.name}</p>
                    <div className="mt-1 flex items-center gap-4">
                      <p className="text-gray-500 text-sm">
                        {(file.file.size / 1024).toFixed(2)} KB •
                      </p>
                      <p className="text-gray-600 text-sm flex items-center gap-1">
                        <Icon
                          icon="teenyicons:tick-circle-solid"
                          className="text-green-500 size-4"
                        />
                        Selesai
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(i)}
                  className="text-red-600 font-semibold border border-red-600 px-3 py-1 rounded-md"
                  type="button"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-3">
            {canMultipleUpload && selectedFiles.length < maxImage ? (
              <button
                onClick={triggerFileInput}
                className="flex-1 text-gray-600 font-semibold border-[1.5px] border-gray-600 rounded-lg py-2 hover:text-black hover:border-black"
                type="button"
              >
                Tambah Gambar ({selectedFiles.length}/{maxImage})
              </button>
            ) : !canMultipleUpload ? (
              <button
                onClick={triggerFileInput}
                className="flex-1 text-gray-600 font-semibold border-[1.5px] border-gray-600 rounded-lg py-2 hover:text-black hover:border-black"
                type="button"
              >
                Ubah Gambar
              </button>
            ) : null}

            {canMultipleUpload && selectedFiles.length > 1 && (
              <button
                onClick={() => {
                  // Revoke all object URLs
                  selectedFiles.forEach((file) =>
                    URL.revokeObjectURL(file.preview)
                  );
                  setSelectedFiles([]);
                  onUpload([]);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                  }
                }}
                className="flex-1 text-red-600 font-semibold border-[1.5px] border-red-600 rounded-lg py-2 hover:text-red-700 hover:border-red-700"
                type="button"
              >
                Hapus Semua
              </button>
            )}
          </div>
        </div>
      ) : (
        // View before upload
        <div
          {...getRootProps()}
          className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-10 cursor-pointer hover:border-green-500 transition"
        >
          <input {...getInputProps()} />
          <Icon
            icon="fluent:image-add-24-regular"
            className="text-5xl text-gray-500"
          />
          <p className="text-gray-500 font-medium text-center">
            {canMultipleUpload
              ? `Tambahkan foto (maks. ${maxImage}) atau geser ke sini`
              : "Tambahkan foto atau geser ke sini"}
          </p>
          <button
            onClick={triggerFileInput}
            className="mt-3 text-gray-600 font-semibold border-[1.5px] border-gray-600 rounded-md py-2 w-[70%] hover:text-black hover:border-black"
            type="button"
          >
            Telusuri Gambar
          </button>
        </div>
      )}
    </div>
  );
}
