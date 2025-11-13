import Container from "@/components/layouts/generals/Container";
import AccreditationInstituteItem from "@/components/layouts/generals/dashboard/accreditation-institute/AccreditationInstituteItem";
import { THEME } from "@/const/THEME";

export default function AccreditationInstitute() {
  return (
    <Container className="mt-4">
      <Container
        theme={THEME.DARK_PURPLE}
        className="w-max flex justify-center items-center gap-4"
      >
        <p className="text-xl font-medium text-center">
          Total Lembaga Akreditasi
        </p>

        <Container className="!p-0 !rounded-md w-12 h-12 flex justify-center items-center !bg-red-500">
          <p className="font-semibold text-lg">1</p>
        </Container>
      </Container>

      <div className="mt-4 flex flex-col gap-2">
        <AccreditationInstituteItem />
        <AccreditationInstituteItem />
      </div>
    </Container>
  );
}
