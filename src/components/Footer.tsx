import { Box, Stack, Typography, Divider } from "@mui/material";
import { Instagram, Twitter, FacebookRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const FooterList = styled(Stack)({
  paddingX: "2rem",
  textAlign: "start",
});
const FooterTitle = styled(Typography)({
  color: "#ECF1F0",
  paddingBottom: "12px",
  fontWeight: "bold",
  fontSize: "13px",
});
const FooterContent = styled(Typography)({
  color: "#B6B6B6",
  paddingBottom: "12px",
  fontWeight: "normal",
  fontSize: "12px",
});

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <Divider />
      <Box
        sx={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          paddingX: "2rem",
          paddingY: "3.5rem",
          "@media (max-width: 768px)": {
            flexDirection: "column-reverse",
          },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "self-start",
            flexBasis: "50%",
            "@media (max-width: 768px)": {
              marginY: "2rem",
              marginLeft: "1.5rem",
            },
          }}
        >
          <Typography
            variant="h6"
            color="#FFFFFF"
            sx={{
              fontFamily: "Libre Bodoni, serif",
              fontSize: "24px",
              textTransform: "italics",
            }}
          >
            CapsFo
          </Typography>
          <Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                color: "#B6B6B6",
                paddingY: "2rem",
                width: "20px",
                height: "20px",
              }}
            >
              <Instagram />
              <FacebookRounded />
              <Twitter />
            </Stack>
            <Typography sx={{ color: "#B6B6B6", fontSize: "16px" }}>
              {`© ${year} CapsFo. All rights reserved.`}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "20px",
            paddingLeft: "30px",
            flexBasis: "50%",
          }}
        >
          <FooterList>
            <FooterTitle>About Us</FooterTitle>
            <FooterContent>About</FooterContent>
            <FooterContent>Careers</FooterContent>
            <FooterContent>Blog</FooterContent>
            <FooterContent>Legal & privacy</FooterContent>
          </FooterList>
          <FooterList>
            <FooterTitle>Services</FooterTitle>
            <FooterContent>Applications</FooterContent>
            <FooterContent>Buy Merch</FooterContent>
            <FooterContent>Institutional Services</FooterContent>
          </FooterList>
          <FooterList>
            <FooterTitle>Learn</FooterTitle>
            <FooterContent>What are Capsules?</FooterContent>
            <FooterContent>Space Basics</FooterContent>
            <FooterContent>Tips and Tutorials</FooterContent>
            <FooterContent>Space Trivia</FooterContent>
          </FooterList>
        </Stack>
      </Box>
    </>
  );
}

export default Footer;
