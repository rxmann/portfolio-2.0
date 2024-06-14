import React from 'react';
import { Container, Typography, Box, Button, IconButton, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';




const Home = () => {
  return (
    <Container>
      {/* Main Home Division */}
      <Box display={"flex"} height={"700px"} overflow={"hidden"} >

        {/* Left Div */}
        <Box flex={1} height={"100%"} padding={"20px"}
          display={"flex"} alignItems={"center"} justifyContent={"left"}
        >

          
          <Box display="flex" flexDirection="column" gap={"10px"} >

            <Typography variant="h3" fontFamily={"Montserrat"} fontWeight={"bold"}> ROMAN KARKI </Typography>
            <Typography variant="body2"> Java / JS Developer  </Typography>

            <Stack direction="row" spacing={1} >
              <IconButton color="inherit" target="_blank" href="https://github.com/rxmxndai" >
                <GitHubIcon fontSize='large' height="100%" />
              </IconButton>
              <IconButton color="primary" target="_blank" href="https://www.linkedin.com/in/roman-karki-bb3338241/" >
                <LinkedInIcon fontSize='large' height="100%" />
              </IconButton>
            </Stack>

            <Box >
              <Button
                sx={{ p: "10px 20px" }}
                size="medium"
                variant='contained'
                target="_blank"
                href="https://drive.google.com/file/d/1GDJUIj_Di0m3m6SOydkxKN7K1zP4992I/view?usp=drive_link">
                View Resume
              </Button>
            </Box>

          </Box>

        </Box>


        {/* Right Div */}
        <Box flex={1} position="relative" >
          {/* Semi Circle */}
          <Box bgcolor="#6A98F0"
            sx={{
              padding: "20px",
              height: "450px",
              width: "600px",
              borderRadius: "50%",
              position: "absolute",
              top: 100,
              right: -100,

            }}
          > </Box>



        </Box>
      </Box>
    </Container>
  );
};

export default Home;