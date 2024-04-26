import Home from "./components/Home";
import Data from "./components/Data";
import About from "./components/About";
import Footer from "./components/Footer";

import { Stack } from "@mui/material";

function Landing() {
  return (
    <Stack sx={{ margin: "0", padding: "0" }}>
      <Home />
      <About />
      <Data />
      <Footer />
    </Stack>
  );
}

export default Landing;
