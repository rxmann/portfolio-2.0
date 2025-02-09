import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SingleProjectCard = ({ project }) => {

    return (
        <Card elevation={24}
            sx={{ bgcolor: "#333", color: "#ffffff", display: "flex", flexDirection: (project.featured) ? "row" : "column" }}
        >
            <CardActionArea sx={{ flex: 1 }} >
                <CardMedia
                    component="img"
                    image={project.images[0]}
                    alt={project.alt}
                />
            </CardActionArea>
            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }} >
                <Box sx={{ flex: 1, alignSelf: "flex-start" }} >
                    <Typography gutterBottom component="div" variant="h5" > {project.title} </Typography>
                    <Typography gutterBottom variant="body3"  > {project.description} </Typography>
                </Box>
                <Box sx={{ justifySelf: "end", display: "flex", gap: 4, pt: 2 }} >
                    <ButtonBase href={project.github} target={"_blank"} > <CodeIcon /> </ButtonBase>
                    { project.live && <ButtonBase target={"_blank"} href={project.live} > <OpenInNewIcon /> </ButtonBase> }
                </Box>
            </CardContent>
        </Card>
    )
}

export default SingleProjectCard