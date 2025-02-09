import { Box, Typography } from "@mui/material"


const SectionHeader = ( {header} ) => {
    return (
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", mb:"50px"}} >
            <Typography variant="h6" sx={{ color: '#ccc', fontWeight: "bold" }}>
            {header}
        </Typography>
        </Box>
    )
}

export default SectionHeader