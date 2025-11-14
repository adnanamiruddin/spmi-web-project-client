import ModalCancelButton from "@/components/utils/modals/button/ModalCancelButton";
import ModalSubmitButton from "@/components/utils/modals/ModalSubmitButton";
import { closeModal } from "@/helpers/modalActionHelper";

export default function FormModalContainer({
  id,
  title,
  children,
  buttonLoading = false,
  handleSubmit = () => {},
  hideCancelButton = false,
  submitButtonText = "Simpan",
  onClose = () => {},
  hideButton = false,
  veryBigSizeModal = false,
  bigSizeModal = false,
  smallSizeModal = false,
}) {
  return (
    <dialog id={id} className="modal">
      <div
        className={`modal-box bg-white w-11/12 rounded-lg ${
          veryBigSizeModal
            ? "max-w-7xl"
            : bigSizeModal
            ? "max-w-6xl"
            : smallSizeModal
            ? "max-w-xl"
            : "max-w-3xl"
        }`}
      >
        <form method="dialog">
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg"
          >
            ✕
          </button>
        </form>
        <p className="font-bold text-xl border-b border-gray-400 pb-4 -mt-2 -mx-6 px-6">
          {title}
        </p>

        {children}

        {!hideButton && (
          <div className="mt-6 flex justify-end items-center gap-3">
            {!hideCancelButton && (
              <ModalCancelButton
                loading={buttonLoading}
                onClick={() => closeModal(id)}
              >
                Batal
              </ModalCancelButton>
            )}
            {/*  */}
            <ModalSubmitButton
              loading={buttonLoading}
              onClick={handleSubmit}
              fullWidth={hideCancelButton}
            >
              {submitButtonText}
            </ModalSubmitButton>
          </div>
        )}
      </div>
    </dialog>
  );
}
