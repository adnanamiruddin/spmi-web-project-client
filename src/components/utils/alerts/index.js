import Swal from "sweetalert2";

// SUCCESS ALERT ✅
export const showSuccessAlert = ({
  title = "Berhasil",
message = "Data berhasil ditampilkan!",
  showAsNotification = false,
  canNotClose = false,
  duration = 3000,
}) => {
  Swal.fire({
    icon: "success",
    title: title,
    text: message,
    timer: duration,
    showConfirmButton: false,
    toast: showAsNotification,
    position: `${showAsNotification ? "top-end" : "center"}`,
    allowOutsideClick: !canNotClose,
    allowEscapeKey: !canNotClose,
    timerProgressBar: canNotClose,
  });
};

// ERROR ALERT ❌
export const showErrorAlert = ({
  title = "Error",
  message = "Terjadi kesalahan!",
  showAsNotification = false,
  duration = 3000,
}) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: message,
    timer: duration,
    showConfirmButton: false,
    toast: showAsNotification,
    position: `${showAsNotification ? "top-end" : "center"}`,
  });
};

// INFO ALERT ℹ️
export const showInfoAlert = ({
  title = "Info",
  message = "Data tidak ditemukan!",
  showAsNotification = false,
  duration = 3000,
}) => {
  Swal.fire({
    icon: "info",
    title: title,
    text: message,
    timer: duration,
    showConfirmButton: false,
    toast: showAsNotification,
    position: `${showAsNotification ? "top-end" : "center"}`,
  });
};

// CONFIRMATION ALERT ❔
export const showConfirmationAlert = async ({
  title = "Apakah kamu yakin?",
  message = "Tindakan ini tidak dapat dibatalkan!",
  confirmButtonText = "Iya",
  cancelButtonText = "Tidak",
}) => {
  const result = await Swal.fire({
    title,
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#12B76A",
    confirmButtonText,
    cancelButtonText,
    showCloseButton: true,
  });

  return result.isConfirmed;
};
