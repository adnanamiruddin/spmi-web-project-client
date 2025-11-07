import Container from "@/components/layouts/generals/Container";
import FilterDropdown from "@/components/layouts/generals/FilterDropdown";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { PADDING } from "@/const/PADDING";
import { THEME } from "@/const/THEME";

export default function DaftarTemuanPage() {
  return (
    <DashboardContainer
      title="Daftar Temuan"
      pageAddressList={["Daftar Temuan"]}
    >
      <Container>
        <p className="text-2xl font-semibold">Filter Data</p>

        <Container
          theme={THEME.DARK_PURPLE}
          padding={PADDING.NARROW}
          className="mt-4 flex justify-between items-center"
        >
          <p className="text-xl font-medium">Tahun</p>

          <div className="w-1/2">
            <FilterDropdown
              placeholder="Pilih"
              options={[
                { value: 1, label: "User 1" },
                { value: 2, label: "User 2" },
                { value: 3, label: "User 3" },
              ]}
              onChange={() => {}}
              disabled={false}
            />
          </div>
        </Container>

        <Container
          theme={THEME.DARK_PURPLE}
          padding={PADDING.NARROW}
          className="mt-4 flex justify-between items-center"
        >
          <p className="text-xl font-medium">Lembaga Akreditasi</p>

          <div className="w-1/2">
            <FilterDropdown
              placeholder="Pilih"
              options={[
                { value: 1, label: "User 1" },
                { value: 2, label: "User 2" },
                { value: 3, label: "User 3" },
              ]}
              onChange={() => {}}
              disabled={false}
            />
          </div>
        </Container>
      </Container>

      <Container className="mt-4 flex justify-between items-center">
        <Container
          theme={THEME.DARK_PURPLE}
          padding={PADDING.NARROW}
          className="flex justify-between items-center gap-4 w-[20%]"
        >
          <p className="text-xl font-medium">Per Page</p>

          <div className="w-1/2">
            <FilterDropdown
              placeholder="Pilih"
              options={[
                { value: 1, label: "User 1" },
                { value: 2, label: "User 2" },
                { value: 3, label: "User 3" },
              ]}
              onChange={() => {}}
              disabled={false}
            />
          </div>
        </Container>
      </Container>
    </DashboardContainer>
  );
}
