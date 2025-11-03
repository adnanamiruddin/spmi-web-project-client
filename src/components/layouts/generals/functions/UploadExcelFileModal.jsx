import ExcelDropzone from "@/components/layouts/generals/functions/ExcelDropzone";
import { showSuccessAlert } from "@/components/utils/alerts";
import FormModalContainer from "@/components/utils/modals/form-modal-container";
import { closeModal, showModal } from "@/helpers/modalActionHelper";
import { useFormik } from "formik";
import { useState } from "react";

export default function UploadExcelFileModal({
  handleSubmitExcelFile = ({ file }) => {
    file;
  },
  modalId = "",
}) {
  const [errorAnalysistResult, setErrorAnalysistResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shouldResetFile, setShouldResetFile] = useState(false);

  const dataForm = useFormik({
    initialValues: {
      file: null,
    },
    onSubmit: async (values) => {
      if (loading) return;

      setLoading(true);
      const response = await handleSubmitExcelFile({
        file: values.file,
      });
      // @ts-ignore
      if (response.data.errorCount > 0) {
        // @ts-ignore
        setErrorAnalysistResult(response.data.errors);
        setLoading(false);
        return;
      }

      closeModal(modalId);
      showSuccessAlert({
        // @ts-ignore
        title: response.data.message,
        // @ts-ignore
        message: `${response.data.successfulCount} data berhasil diunggah`,
        canNotClose: true,
      });

      // Reset everything
      dataForm.resetForm();
      setErrorAnalysistResult([]);
      setShouldResetFile((prev) => !prev);
      setLoading(false);
      closeModal("UploadExcelFileModal");

      setTimeout(() => {
        showModal(modalId);
      }, 3000);
    },
  });

  const handleFileChange = (file) => {
    if (errorAnalysistResult.length > 0) {
      setErrorAnalysistResult([]);
    }
    dataForm.setFieldValue("file", file);
  };

  return (
    <FormModalContainer
      id="UploadExcelFileModal"
      title="Isi Data Otomatis"
      submitButtonText={
        errorAnalysistResult.length > 0 ? "Unggah Ulang" : "Kirim Data"
      }
      hideCancelButton
      handleSubmit={dataForm.handleSubmit}
      buttonLoading={loading}
    >
      <ExcelDropzone
        label="Dokumen"
        description="JPEG, PNG format maks 10MB"
        onUpload={handleFileChange}
        errorAnalysistResult={errorAnalysistResult}
        resetFile={shouldResetFile}
      />
    </FormModalContainer>
  );
}
