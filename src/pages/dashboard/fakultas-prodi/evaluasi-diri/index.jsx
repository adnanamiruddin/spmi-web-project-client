import AccreditationInstitute from "@/components/layouts/generals/dashboard/accreditation-institute/AccreditationInstitute";
import Notification from "@/components/layouts/generals/dashboard/notification/Notification";
import NotAllowedToDoEvaluation from "@/components/layouts/page-components/dashboard/fakultas-prodi/evaluasi-diri/NotAllowedToDoEvaluation";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { THEME } from "@/const/THEME";

export default function EvaluasiDiriPage() {
  return (
    <DashboardContainer
      title="Evaluasi Diri"
      pageAddressList={["Evaluasi Diri"]}
    >
      {/* <NotAllowedToDoEvaluation /> */}
      <Notification theme={THEME.BLUE}>
        Silahkan Pilih Lembaga Akreditasi Untuk Menampilkan Standar Mutu
      </Notification>

      <AccreditationInstitute />
    </DashboardContainer>
  );
}
