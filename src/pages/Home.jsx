import {
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  Stack,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ViewResume = styled(Button)(() => ({
  backgroundColor: "#6A98F0",
  padding: "10px 20px",
  borderRadius: "50px",
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      maxWidth={"xl"}
      disableGutters
      sx={{
        display: "flex",
        minHeight: "80vh",
        p: 5,
        // border: "1px solid green",
      }}
      overflow={"hidden"}
    >
      {/* Main Home Division */}
      {/* Left  */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: isMobile ? "center" : "center",
          justifyContent: isMobile ? "center" : "left", // Always center
          textAlign: isMobile ? "center" : "left", // Ensure text aligns correctly
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={"20px"}
          sx={{
            alignItems: isMobile ? "center" : "flex-start", // Center content on mobile
            textAlign: isMobile ? "center" : "left", // Text centering
          }}
        >
          <Typography
            variant="h3"
            fontFamily={"Montserrat"}
            fontWeight={"bold"}
          >
            ROMAN KARKI
          </Typography>
          <Typography variant="body2">Associate Software Engineer</Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: isMobile ? "center" : "left",
              width: "100%", // Ensure alignment
            }}
          >
            <IconButton
              color="inherit"
              target="_blank"
              href="https://github.com/rxmxndai"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="primary"
              target="_blank"
              href="https://www.linkedin.com/in/roman-karki-bb3338241/"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Stack>

          <Box>
            <ViewResume
              sx={{ p: "10px 20px" }}
              size="medium"
              variant="contained"
              target="_blank"
              href="https://drive.google.com/file/d/1GDJUIj_Di0m3m6SOydkxKN7K1zP4992I/view?usp=drive_link"
            >
              View Resume
            </ViewResume>
          </Box>
        </Box>
      </Box>

      {/* Right Div */}
      <Box
        flex={1}
        position="relative"
        overflow="hidden"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        {/* Semi Circle */}
        <Box
          bgcolor="#6A98F0"
          sx={{
            padding: "20px",
            height: "60%",
            width: "70%",
            borderRadius: "50%",
            position: "absolute",
            top: 100,
            right: -100,
            opacity: 0.7,
          }}
        ></Box>
      </Box>
    </Container>
  );
};

export default Home;
