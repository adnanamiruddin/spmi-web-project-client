import Container from "@/components/layouts/generals/Container";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { THEME } from "@/const/THEME";

export default function VisitasiPage() {
  return (
    <DashboardContainer
      title="Standar Mutu"
      pageAddressList={["Audit", "Visitasi"]}
    >
      <Container>
        <Container theme={THEME.DARK_PURPLE}>
          <p className="text-xl font-medium text-center">
            Silahkan Pilih Lembaga Akreditasi Untuk Menampilkan Standar Mutu
          </p>
        </Container>
      </Container>
    </DashboardContainer>
  );
}
