import Badge from "@/components/layouts/generals/Badge";
import storageKey from "@/const/storageKey";
import { decrypt } from "@/helpers/cryptoHelper";
import storage from "local-storage-fallback";

export default function SemesterBadge({ className = "" }) {
  const activeSemester = JSON.parse(
    decrypt(storage.getItem(storageKey.activeSemester))
  );

  const getPeriodOrder = () => {
    if (activeSemester?.period === "Ganjil") {
      return 1;
    } else if (activeSemester?.period === "Genap") {
      return 2;
    } else {
      return "-";
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Badge>Tahun Ajaran {activeSemester?.academicYear}</Badge>
      <Badge>
        Semester {getPeriodOrder()} ({activeSemester?.period})
      </Badge>
    </div>
  );
}
