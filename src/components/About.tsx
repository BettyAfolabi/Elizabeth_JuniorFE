import { Stack, Typography } from "@mui/material";

function About() {
  return (
    <Stack
      py={4}
      sx={{
        backgroundColor: "black",
        color: "white",
        paddingX: "2rem",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "30px",
          paddingY: "20px",
          color: "#fff",
        }}
      >
        About Us
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexFlow: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "30px",
          marginTop: "2rem",
          paddingX: "2rem",
        }}
      >
        <Stack sx={{ width: "520px", marginRight: "1rem", marginTop: "1rem" }}>
          <Typography
            sx={{
              lineHeight: "40px",
              fontSize: "20px",
              textAlign: "start",
            }}
          >
            Welcome to CapsFo, your go-to destination for comprehensive
            information on SpaceX capsules! Our app is designed to offer
            enthusiasts, researchers, and space aficionados a deep dive into the
            fascinating world of SpaceX's cutting-edge capsule technology.
          </Typography>
          <Typography
            sx={{
              lineHeight: "40px",
              fontSize: "20px",
              textAlign: "start",
              paddingTop: "1rem",
            }}
          >
            At CapsFo, we understand the curiosity and wonder surrounding
            SpaceX's achievements in space exploration. With our meticulously
            curated database and user-friendly interface, we strive to provide
            you with a seamless experience as you explore the various aspects of
            SpaceX capsules.
          </Typography>
        </Stack>
        <Stack
          className="stack"
          sx={{
            flexBasis: "40%",
            marginLeft: "1rem",
          }}
        >
          <img
            src="./rocketdesign.jpg"
            alt="picture of a rocket"
            className="img"
          />

          <img
            src="./space-travel.jpg"
            alt="picture of a boarding space shuttle"
            className="img"
          />

          <img
            src="./capsuleB.jpg"
            alt="picture of a capsule"
            className="img"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default About;
