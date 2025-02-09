import {  Container } from "@mui/material";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Academics from "./pages/Academics";

function App() {
  
  return (
    <Container maxWidth={"xl"}  sx={{ bgcolor: "#191919" }} >
      <Header />
        <Home />
        <Skills />
        <Projects />
        <Career />
        <Academics />
    </Container>
  );
}

export default App;
