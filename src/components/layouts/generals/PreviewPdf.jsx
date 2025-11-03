import NotFound from "@/components/layouts/generals/NotFound";
import { useEffect, useState } from "react";

export default function PreviewPdf({
  pdfData,
  pdfUrl = null,
  fileName = "Dokumen.pdf",
}) {
  const [pdfObjectUrl, setPdfObjectUrl] = useState(null);

  useEffect(() => {
    if (pdfData) {
      const url = URL.createObjectURL(pdfData);
      setPdfObjectUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, []);

  const sourcePdf = pdfUrl || pdfObjectUrl;

  if (!sourcePdf) return <NotFound message="File PDF Tidak Ditemukan" />;

  return (
    <div className="mt-4">
      <embed
        className="w-full h-[70vh] border-none"
        src={sourcePdf}
        type="application/pdf"
      />

      <p className="text-center p-4">
        Jika PDF tidak muncul,{" "}
        <a
          download={fileName}
          href={sourcePdf}
          className="text-blue-500 underline"
        >
          klik di sini untuk mengunduh PDF
        </a>
        .
      </p>
    </div>
  );
}
