import Notification from "@/components/layouts/generals/dashboard/notification/Notification";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { THEME } from "@/const/THEME";
import { useRouter } from "next/router";

export default function EvaluasiDiriProdiDetailPage() {
  const router = useRouter();
  const { prodiId } = router.query;

  return (
    <DashboardContainer
      title="Evaluasi Diri"
      pageAddressList={["Evaluasi Diri"]}
    >
      <Notification theme={THEME.RED}>
        Total Instrumen yang Belum Dinilai Adalah 15, Silahkan Dicek Kembali
      </Notification>

      <p>{prodiId}</p>
    </DashboardContainer>
  );
}
