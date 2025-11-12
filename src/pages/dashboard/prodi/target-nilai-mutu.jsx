import Container from "@/components/layouts/generals/Container";
import FilterDropdown from "@/components/layouts/generals/FilterDropdown";
import Button from "@/components/layouts/generals/functions/Button";
import SearchBar from "@/components/layouts/generals/functions/SearchBar";
import { Table, Th, Thead } from "@/components/layouts/generals/Table";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { PADDING } from "@/const/PADDING";
import { PAGINATION_LIMITS } from "@/const/PAGINATION";
import { THEME } from "@/const/THEME";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function TargetNilaiMutuPage() {
  // Search State
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchReset = () => {
    setSearchQuery("");
  };

  return (
    <DashboardContainer
      title="Target Nilai Mutu"
      pageAddressList={["Target Nilai Mutu"]}
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

      <Container className="mt-4">
        <div className="flex justify-between items-center gap-4">
          <Container
            theme={THEME.DARK_PURPLE}
            padding={PADDING.NARROW}
            className="flex justify-between items-center gap-4 w-[25%]"
          >
            <p className="text-xl font-medium">Per Page</p>
            <div className="w-1/2">
              <FilterDropdown
                placeholder="Pilih"
                options={PAGINATION_LIMITS}
                onChange={() => {}}
                disabled={false}
              />
            </div>
          </Container>

          <Container
            theme={THEME.DARK_PURPLE}
            padding={PADDING.NARROW}
            className="flex justify-between items-center gap-4 w-[65%]"
          >
            <p className="text-xl font-medium">Cari</p>
            <SearchBar
              fullWidth
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSubmit={handleSearchSubmit}
              onReset={handleSearchReset}
            />
          </Container>

          <Button
            onClick={() => {}}
            icon={<Icon icon="mingcute:add-fill" className="text-2xl" />}
            theme={THEME.GREEN}
            className="py-7 !w-[10%]"
          >
            Tambah
          </Button>
        </div>

        <Table className="mt-4">
          <Thead className="!items-start">
            <Th className="w-[10%]">No</Th>
            <Th className="w-[30%]">Program Studi</Th>
            <Th className="w-[60%]">Target Nilai</Th>
          </Thead>
        </Table>
      </Container>
    </DashboardContainer>
  );
}
