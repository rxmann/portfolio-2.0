import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import SkillsList from "../components/SkillsList";
import { useEffect, useState } from "react";

import {
  frontend,
  backend,
  tools,
  programming,
} from "../assets/data/skillsData";
import SectionHeader from "../components/SectionHeader";

const Skills = () => {
  const [active, setActive] = useState("frontend");

  const [data, setData] = useState([]);

  const skillsList = [
    {
      id: "frontend",
      title: "Frontend",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "programming",
      title: "Programming",
    },
    {
      id: "tools",
      title: "Tools",
    },
  ];

  useEffect(() => {
    switch (active) {
      case "featured":
        setData(frontend);
        break;
      case "programming":
        setData(programming);
        break;
      case "backend":
        setData(backend);
        break;
      case "tools":
        setData(tools);
        break;
      default:
        setData(frontend);
    }
  }, [active]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screen

  return (
    <Container
      maxWidth="xl"
      id="skills"
      sx={{ 
        p: "50px 0px", 
        minHeight: "80vh",  
        // border: "1px solid green" 
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 5,
          // border: "1px dashed red"
        }}
      >
        <SectionHeader header={"Skills"} />

        <SkillsList
          skillsList={skillsList}
          active={active}
          setActive={setActive}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "70px",
            mt: "30px",
            // border: "1px dashed green"
          }}
        >
          {data.map((skill) => (
            <Box
              key={skill.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                p: "10px",
              }}
            >
              <Box
                component="img"
                src={skill.image}
                sx={{
                  backgroundSize: "cover",
                  width: isMobile ? 64 : 98,
                  height: isMobile ? 64 : 98,
                  boxShadow: 10000,
                }}
              />

              <Typography
                variant="body2"
                sx={{ fontSize: "14px", fontWeight: "light" }}
              >
                {skill.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Skills;
