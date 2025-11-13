import Container from "@/components/layouts/generals/Container";
import { PADDING } from "@/const/PADDING";
import { THEME } from "@/const/THEME";

export default function Notification({ theme, children }) {
  return (
    <Container
      theme={theme === THEME.RED ? THEME.RED : THEME.BLUE}
      padding={PADDING.NARROW}
    >
      <Container
        theme={theme === THEME.RED ? THEME.DARK_RED : THEME.DARK_BLUE}
        padding={PADDING.NARROW}
      >
        <p className="font-medium text-lg">{children}</p>
      </Container>
    </Container>
  );
}
