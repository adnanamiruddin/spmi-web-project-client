import Container from "@/components/layouts/generals/Container";
import FilterDropdown from "@/components/layouts/generals/FilterDropdown";
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

      <Container className="mt-4">
        <Container
          theme={THEME.DARK_PURPLE}
          className="w-max flex justify-center items-center gap-4"
        >
          <p className="text-xl font-medium text-center">
            Total Lembaga Akreditasi
          </p>

          <Container className="!p-0 !rounded-md w-12 h-12 flex justify-center items-center !bg-red-500">
            <p>1</p>
          </Container>
        </Container>

        <Container
          theme={THEME.DARK_PURPLE}
          className="mt-4 flex justify-between items-start"
        >
          <p className="text-xl font-medium w-[20%]">SPMI-BANPT</p>

          <p className="text-xl w-[30%]">
            Standar Nasional: <br />
            <span className="font-medium">Memiliki 340 Standar Mutu</span>
          </p>

          <FilterDropdown
            placeholder="Pilih Program Studi/Unit Penunjang"
            options={[
              { value: 1, label: "User 1" },
              { value: 2, label: "User 2" },
              { value: 3, label: "User 3" },
            ]}
            onChange={() => {}}
            disabled={false}
            className="!w-[50%]"
          />
        </Container>
      </Container>
    </DashboardContainer>
  );
}
