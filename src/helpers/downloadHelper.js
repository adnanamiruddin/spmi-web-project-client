export const downloadFile = ({ filePath, downloadName = null }) => {
  const link = document.createElement("a");
  link.href = filePath;

  // If downloadName is not provided, use the original file name
  link.download = downloadName || filePath.split("/").pop();

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadFileFromServer = ({ file, downloadName = "download" }) => {
  let url;
  if (typeof file === "string") {
    // file is a URL string
    url = file;
  } else if (file instanceof Blob) {
    // file is a Blob object
    url = URL.createObjectURL(file);
  } else {
    throw new Error("file must be a string URL or a Blob");
  }

  const link = document.createElement("a");
  link.href = url;
  link.download = downloadName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up URL if it was a Blob
  if (file instanceof Blob) {
    URL.revokeObjectURL(url);
  }
};
