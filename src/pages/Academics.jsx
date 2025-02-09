import { Box, Container, Typography } from "@mui/material"
import SectionHeader from "../components/SectionHeader"
import { educationList } from "../assets/data/educationData"

const Academics = () => {
  return (
    <Container maxWidth={"xl"} id="academics" sx={{ p: "50px 0px" }} >

      <Box sx={{ p: 5, display: "flex", flexDirection: "column", alignItems: "center" }} >

        <SectionHeader header="Education" />

        {educationList.map(({ education, institution, date, coreModules }) => (
          <Box  key={date}
            sx={{ width: "60%", bgcolor: "#333", cominHeight: "100px", mb: "20px", p: "20px", display: "flex", flexDirection: "column", gap: "20px", boxShadow: 200 }} >

            <section>
              <Typography component="div" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} > {education} </Typography>
              <Typography variant="body3" sx={{fontSize: "14px", color: "text.success"}} > {institution} </Typography>
            </section>

            <Typography  variant="body3" sx={{ fontSize: "16px" }} > {coreModules} </Typography>
          </Box>
        ))}

      </Box>

    </Container>
  )
}


export default Academics