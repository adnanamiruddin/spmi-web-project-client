import Container from "@/components/layouts/generals/Container";
import FilterDropdown from "@/components/layouts/generals/FilterDropdown";

export default function ProdiHomePageComp() {
  return (
    <>
      <Container className="flex justify-center gap-4">
        <FilterDropdown
          label="Filter Lembaga Akreditasi"
          placeholder="Pilih"
          options={[
            { value: 1, label: "User 1" },
            { value: 2, label: "User 2" },
            { value: 3, label: "User 3" },
          ]}
          onChange={() => {}}
          disabled={false}
        />

        <FilterDropdown
          label="Filter Tahun"
          placeholder="Pilih"
          options={[
            { value: 1, label: "User 1" },
            { value: 2, label: "User 2" },
            { value: 3, label: "User 3" },
          ]}
          onChange={() => {}}
          disabled={false}
        />
      </Container>
    </>
  );
}
