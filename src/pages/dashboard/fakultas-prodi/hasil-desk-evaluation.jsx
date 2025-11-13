import Container from "@/components/layouts/generals/Container";
import AccreditationInstitute from "@/components/layouts/generals/dashboard/accreditation-institute/AccreditationInstitute";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { THEME } from "@/const/THEME";

export default function HasilDeskEvaluationPage() {
  return (
    <DashboardContainer
      title="Hasil Desk Evaluation"
      pageAddressList={["Hasil Desk Evaluation"]}
    >
      <Container>
        <Container theme={THEME.DARK_PURPLE}>
          <p className="text-xl font-medium text-center">
            Silahkan Pilih Lembaga Akreditasi Untuk Menampilkan Standar Mutu
          </p>
        </Container>
      </Container>

      <AccreditationInstitute />
    </DashboardContainer>
  );
}
