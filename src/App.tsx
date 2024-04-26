import Home from "./components/Home";
import Data from "./components/Data";
import About from "./components/About";

import { Stack } from "@mui/material";

function App() {
  return (
    <Stack sx={{ margin: "0", padding: "0" }}>
      <Home />
      <About />
      <Data />
    </Stack>
  );
}

export default App;
