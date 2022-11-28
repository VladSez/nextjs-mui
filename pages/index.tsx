import { Container } from "@mui/material";
import { Search } from "../src/features/github-search";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Search />
    </Container>
  );
}
