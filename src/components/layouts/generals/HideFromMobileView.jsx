import { showInfoAlert } from "@/components/utils/alerts";
import ModalSubmitButton from "@/components/utils/modals/ModalSubmitButton";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function HideFromMobileView() {
  return (
    <div className="md:hidden bg-gradient-to-br from-green-200 to-white min-h-screen flex justify-center items-center flex-col gap-6">
      <Image
        src="/icon-shohwatul-isad.png"
        alt="Sistem Penjaminan Mutu Indonesia"
        width={500}
        height={500}
        className="w-20 object-contain"
      />
      <h1 className="font-semibold text-lg text-center px-8">
        Silahkan akses menggunakan laptop atau aktifkan mode desktop di HP
      </h1>
      <ModalSubmitButton
        onClick={() => {
          showInfoAlert({
            message:
              "Silakan aktifkan mode desktop pada browser Anda. Caranya:\n1. Tekan menu titik tiga di pojok kanan atas browser Anda.\n2. Pilih 'Situs desktop' atau 'Desktop site'.",
            duration: 15000,
          });
        }}
      >
        <div className="flex justify-center items-center gap-2">
          <p className="text-sm">Tata Cara</p>
          <Icon icon="mingcute:information-line" />
        </div>
      </ModalSubmitButton>
    </div>
  );
}
