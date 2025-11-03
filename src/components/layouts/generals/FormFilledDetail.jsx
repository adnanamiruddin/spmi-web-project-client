import { Icon } from "@iconify/react";

export default function FormFilledDetail({
  filledFields,
  totalFields,
  isComplete,
}) {
  return (
    <div>
      <div className="bg-gray-50 px-2 py-1 rounded w-max mx-auto">
        {isComplete ? (
          <span className="flex items-center text-green-600">
            <p className="font-semibold text-sm">Sudah Lengkap</p>
            <Icon icon="icon-park-solid:check-one" className="ms-1.5 text-xl" />
          </span>
        ) : (
          <span className="flex items-center text-red-600">
            <p className="font-semibold text-sm">Belum Terisi</p>
            <Icon
              icon="zondicons:exclamation-solid"
              className="ms-1.5 text-xl"
            />
          </span>
        )}
      </div>
      <p className="mt-1 text-center text-white font-semibold text-xl">
        {filledFields}/{totalFields} Data Terisi
      </p>
    </div>
  );
}
