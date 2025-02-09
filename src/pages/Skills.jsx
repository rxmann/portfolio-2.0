import { Box, Container, Typography } from "@mui/material"
import SkillsList from "../components/SkillsList"
import { useEffect, useState } from "react"

import { frontend, backend, tools, programming } from "../assets/data/skillsData"
import SectionHeader from "../components/SectionHeader"




const Skills = () => {

  const [active, setActive] = useState("frontend");

  const [data, setData] = useState([]);


  const skillsList = [
    {
      id: "frontend",
      title: "Frontend"
    },
    {
      id: "backend",
      title: "Backend"
    },
    {
      id: "tools",
      title: "Tools"
    },
    {
      id: "programming",
      title: "Programming"
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






  return (
    <Container  maxWidth={"xl"} disableGutters id="skills" sx={{ p: "50px 0px", minHeight: "80vh" }}  >
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",  p: 5,  }}>
        
        <SectionHeader header={"Skills"} />

        <SkillsList skillsList={skillsList} active={active} setActive={setActive} />


        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "70px", maxWidth: "80%", mt: "30px" }}>
          {data.map((skill) => (
              <Box key={skill.id} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", p: "10px 20px" }}>
                  <Box
                    component="img"
                    src={skill.image}
                    sx={{
                      backgroundSize: "cover",
                      width: 48,
                      height: 48,
                      boxShadow: 10000
                    }}
                  />

                <Typography variant="body2" sx={{ fontSize: "14px", fontWeight: "light"}} > {skill.title} </Typography>
              </Box>
          ))}
        </Box>


      </Box>

    </Container>
  )
}

export default Skills