import Container from "@/components/layouts/generals/Container";
import AccreditationInstituteItem from "@/components/layouts/generals/dashboard/accreditation-institute/AccreditationInstituteItem";
import { BORDER_RADIUS } from "@/const/BORDER";
import { THEME } from "@/const/THEME";

export default function AccreditationInstitute() {
  return (
    <Container autoMarginTop>
      <Container
        theme={THEME.DARK_PURPLE}
        className="w-max flex justify-center items-center gap-4"
      >
        <p className="text-xl font-medium text-center">
          Total Lembaga Akreditasi
        </p>

        <Container
          theme={THEME.RED}
          borderRadius={BORDER_RADIUS.LARGE}
          className="w-12 h-12 flex justify-center items-center"
        >
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
