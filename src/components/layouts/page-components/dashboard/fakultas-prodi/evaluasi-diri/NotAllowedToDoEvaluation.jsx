import Container from "@/components/layouts/generals/Container";
import { THEME } from "@/const/THEME";

export default function NotAllowedToDoEvaluation() {
  return (
    <Container >
      <Container
        theme={THEME.DARK_PURPLE}
        className="w-max flex justify-center items-center gap-4"
      >
        <p className="text-xl font-medium text-center">
          Total Lembaga Akreditasi
        </p>

        <Container className="!p-0 !rounded-md w-12 h-12 flex justify-center items-center !bg-red-500">
          <p>0</p>
        </Container>
      </Container>

      <Container className="mt-4 !bg-amber-500">
        <p className="text-xl font-medium text-center">
          Belum Waktunya Melakukan Evaluasi Diri
        </p>
      </Container>
    </Container>
  );
}
