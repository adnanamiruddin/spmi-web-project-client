import Container from "@/components/layouts/generals/Container";
import Notification from "@/components/layouts/generals/dashboard/notification/Notification";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { BORDER_RADIUS } from "@/const/BORDER";
import { PADDING } from "@/const/PADDING";
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

      <Container autoMarginTop>
        <Container
          theme={THEME.DARK_PURPLE}
          padding={PADDING.NARROW}
          className="w-max flex justify-center items-center gap-4"
        >
          <p className="text-xl font-medium text-center">Daftar Standar Mutu</p>

          <Container
            theme={THEME.RED}
            padding={PADDING.NARROW}
            borderRadius={BORDER_RADIUS.LARGE}
            className="flex justify-center items-center"
          >
            <p className="font-semibold text-lg">340 Standar Mutu</p>
          </Container>
        </Container>

        <Container autoMarginTop theme={THEME.DARK_PURPLE}>
          <p>WOI</p>
        </Container>
      </Container>
    </DashboardContainer>
  );
}
