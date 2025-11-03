import PlainButton from "@/components/layouts/generals/functions/PlainButton";
import { Icon } from "@iconify/react";

export default function NoData({
  onClickAddDataButton = () => {},
  hideAddDataButton = false,
  titleOnAddDataButton = "Tambah Data",
  extraHeight = false,
}) {
  return (
    <div
      className={`w-full bg-gray-100 rounded flex flex-col justify-center items-center gap-2 ${
        extraHeight ? "h-96" : "h-44"
      }`}
    >
      <p className="text-gray-400">Belum Ada Data</p>

      {!hideAddDataButton && (
        <PlainButton
          onClick={onClickAddDataButton}
          className="border-dashed bg-white py-3"
        >
          <Icon icon="mingcute:add-fill" className="text-2xl me-2 shrink-0" />
          <p className="font-semibold">{titleOnAddDataButton}</p>
        </PlainButton>
      )}
    </div>
  );
}
