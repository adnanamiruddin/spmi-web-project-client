import Container from "@/components/layouts/generals/Container";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { THEME } from "@/const/THEME";

export default function ManajemenDokumenPage() {
  return (
    <DashboardContainer
      title="Manajemen Dokumen"
      pageAddressList={["Manajemen Dokumen"]}
    >
      <Container>
        <Container theme={THEME.DARK_PURPLE}>
          <p className="text-xl font-medium text-center">Manajemen Dokumen</p>
        </Container>
      </Container>
    </DashboardContainer>
  );
}
