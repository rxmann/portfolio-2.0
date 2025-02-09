import { Box, Container, Typography } from "@mui/material"
import SectionHeader from "../components/SectionHeader"
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"
import { careerList } from "../assets/data/careerData"





const Career = () => {
  return (
    <Container  maxWidth={"xl"} disableGutters id="careers" sx={{ p: "50px 0px", minHeight: "50vh" }}  >
      <Box sx={{ p: 5, display: "flex", flexDirection: "column", alignItems: "center" }} >
        <SectionHeader header={"Career"} />

        <Timeline position="alternate-reverse" >
          {careerList.map(career => (
            <TimelineItem key={career.startDate} >

              <TimelineOppositeContent sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.success" > {career.startDate} </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot sx={{ padding: "20px" }} color={career.themeColor} variant="outlined">
                  {career.icon && <career.icon />}
                </TimelineDot>

                <TimelineConnector sx={{ height: "100px", }} />
              </TimelineSeparator>

              <TimelineContent  >
                <Typography variant="h6" component={"div"} > {career.role} </Typography>
                <Typography variant="body3" > {career.organization} </Typography>
              </TimelineContent>
            </TimelineItem>

          ))}

          <TimelineItem  >
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>

        </Timeline>
      </Box>
    </Container >
  )
}

export default Career