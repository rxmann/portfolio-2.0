import { AppBar, Box, IconButton, Toolbar } from "@mui/material"


const navItems = [
  {
    title: "HOME",
    goto: "#"
  },
  {
    title: "SKILLS",
    goto: "#skills"
  },
  {
    title: "PROJECTS",
    goto: "#projects"
  },
  {
    title: "CAREER",
    goto: "#careers"
  },
]




const Header = () => {

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#191919" }} >
      <Toolbar  >

        <IconButton href="#" variant="a" sx={{ userSelect: "none", cursor: "pointer",  fontSize: "24px", fontWeight: "bold", color: "#6A98F0" }}> PORTFOLIO </IconButton>

        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", gap: "30px" }} >
          {navItems.map(nav => (
            <IconButton
              sx={{ fontSize: "14px", color: "#ccc" }}
              href={nav.goto}
              key={nav.goto}
              cursor="pointer"
              color="inherit"
              component={"a"}>
              {nav.title}
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>


  )
}

export default Header