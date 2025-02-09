import { Box, Container, Grid } from '@mui/material';
import SectionHeader from '../components/SectionHeader';
import { projectsData } from '../assets/data/projectsData';
import SingleProjectCard from '../components/SingleProjectCard';


const Projects = () => {
  return (
    <Container  maxWidth={"xl"} disableGutters id="projects" sx={{ p: "50px 0px", minHeight: "80vh" }}  >

      <Box sx={{ p: 5, display: "flex", flexDirection: "column", alignItems: "center" }} >

        <SectionHeader header="Projects" />
        <Grid container  spacing={5} sx={{ display: "flex", justifyContent: "space-around",}} >
          {projectsData.map(project => (
            <Grid key={project.id}  item xs={project.xs} >
              <SingleProjectCard  project={project} />
            </Grid>
          ))}
        </Grid>

      </Box>
    </Container >
  )
}


export default Projects