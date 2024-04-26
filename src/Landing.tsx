import Home from "./components/Home";
import Data from "./components/Data";
import About from "./components/About";
import Footer from "./components/Footer";
import { Stack } from "@mui/material";

// interface Capsule {
//   id: string;
//   status: string;
//   type: string;
//   serial: string;
//   water_landings: string;
//   land_landings: string;
//   last_update: string;
//   reuse_count: string;
//   launches: string;
// }

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
// {
//   capsules,
//   setCapsules,
// }: {
//   capsules: Capsule[];
//   setCapsules: (capsules: Capsule[]) => void;
// }

// capsules={capsules} setCapsules={setCapsules}
