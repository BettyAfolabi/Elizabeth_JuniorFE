import {
  Stack,
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Button,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Stack
      px={3}
      sx={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",

        height: { xs: "500px", md: "600px" },
      }}
    >
      {/* Begining of NavBar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          marginBottom: "5rem",
          marginX: "1rem",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            marginRight: "2rem",
          }}
          disableGutters
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Libre Bodoni, serif",
              fontSize: "24px",
              textTransform: "italics",
            }}
          >
            CapsFo
          </Typography>

          {/* Start of Mobile Nav */}
          <Stack
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                p={2}
                width="250px"
                textAlign="center"
                role="presentation"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: "26px",
                  marginRight: "0",
                  marginTop: "0",
                  display: "flex",
                  flexDirection: "column",
                  height: "100vh",
                }}
              >
                <Button
                  variant="text"
                  href="#"
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  About Us
                </Button>
                <Button
                  variant="text"
                  href="#"
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Explore
                </Button>
                <Button
                  variant="text"
                  href="#"
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Drawer>
          </Stack>
          {/* End of Mobile Nav */}

          {/* Start of desktop Nav */}
          <Stack
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "24px",
            }}
          >
            <Button
              variant="text"
              href="#"
              color="inherit"
              sx={{
                textTransform: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              About Us
            </Button>
            <Button
              variant="text"
              href="#"
              color="inherit"
              sx={{
                textTransform: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Explore
            </Button>
            <Button
              variant="text"
              href="#"
              color="inherit"
              sx={{
                textTransform: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* End of Desktop Nav */}

      <Stack
        spacing={2}
        my={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            color: "#fff",
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          Exploring the Capsules Together
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f6f6f6",
            color: "#000",
            borderRadius: "15px",
            paddingY: "10px",
            paddingX: "20px",
            width: "200px",
            marginX: "auto",
          }}
        >
          Explore
        </Button>
      </Stack>
    </Stack>
  );
}

export default Home;
