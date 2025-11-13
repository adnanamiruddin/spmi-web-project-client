import Container from "@/components/layouts/generals/Container";
import FilterDropdown from "@/components/layouts/generals/FilterDropdown";
import SearchBar from "@/components/layouts/generals/functions/SearchBar";
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
} from "@/components/layouts/generals/Table";
import DashboardContainer from "@/components/utils/generals/DashboardContainer";
import { PADDING } from "@/const/PADDING";
import { PAGINATION_LIMITS } from "@/const/PAGINATION";
import { THEME } from "@/const/THEME";
import { useState } from "react";

export default function DaftarTemuanPage() {
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
            className="flex justify-between items-center gap-4 w-[75%]"
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
        </div>

        <Table className="mt-4">
          <Thead>
            <Th className="w-[5%]">No</Th>
            <Th className="w-[25%]">Standar Mutu</Th>
            <Th className="w-[25%]">
              Daftar Temuan
              <br /> Auditor 1
            </Th>
            <Th className="w-[25%]">
              Daftar Temuan
              <br /> Auditor 2
            </Th>
            <Th className="w-[25%]">
              Daftar Temuan
              <br /> Auditor 2
            </Th>
          </Thead>
          <Tbody>
            <Td>1</Td>
            <Td>
              Program studi mengimplementasikan visi, misi, tujuan, dan sasaran
              dengan didukung oleh data yang konsisten dan searah serta
              bersinerji dengan visi, tujuan, dan strategi fakultas dan
              universitas
            </Td>
            <Td>
              <p className="font-semibold">
                (Prof. Dr. Yusring) 4 (Sangat Baik)
              </p>
              <p>
                Ada dokumen lain yang perlu diupload, renstra dan laporan
                kinerja Departemen Sastra Arab
              </p>
              <p className="font-semibold">Jenis/Kategori Temuan :</p>
              <p>Temuan Positif / Kesesuaian</p>
            </Td>
            <Td>
              <p className="font-semibold">
                (Prof. Dr. Yusring) 4 (Sangat Baik)
              </p>
              <p>
                Ada dokumen lain yang perlu diupload, renstra dan laporan
                kinerja Departemen Sastra Arab
              </p>
              <p className="font-semibold">Jenis/Kategori Temuan :</p>
              <p>Temuan Positif / Kesesuaian</p>
            </Td>
            <Td>
              <p></p>
            </Td>
          </Tbody>
        </Table>
      </Container>
    </DashboardContainer>
  );
}
