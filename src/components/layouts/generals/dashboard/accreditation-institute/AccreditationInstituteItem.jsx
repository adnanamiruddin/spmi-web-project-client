import Container from "@/components/layouts/generals/Container";
import FilterDropdown from "@/components/layouts/generals/FilterDropdown";
import { THEME } from "@/const/THEME";
import { useRouter } from "next/router";

export default function AccreditationInstituteItem() {
  const router = useRouter();

  return (
    <Container
      theme={THEME.DARK_PURPLE}
      className="flex justify-between items-start"
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
        onChange={(e) => {
          router.push(`/dashboard/fakultas-prodi/evaluasi-diri/${e.value}`);
        }}
        disabled={false}
        className="!w-[50%]"
      />
    </Container>
  );
}
