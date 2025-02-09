import { Button, Container, List, ListItem } from "@mui/material"




const TitleField = ({ active, ...props }) => (
  <Button
    {...props}
    sx={{
      backgroundColor: active ? "#6A98F0" : "transparent",
      color: active ? "#fff" : "#ccc",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "50px",
      textTransform: "none",
      '&:hover': {
        backgroundColor: active ? "#5A88E0" : "transparent",
      },
    }}
  />
);

const SkillsList = ({ skillsList, active, setActive }) => {


  return (
    <Container  sx={{ minWidth: "60%", display: "flex", alignItems: "center", justifyContent: "center" }} >
      <List sx={{display: "flex",  flexDirection: "row"}} >
        {skillsList.map(skill => (
          <ListItem  key={skill.id} onClick={() => setActive(skill.id)}>
              <TitleField active={active === skill.id} variant="body1"  > {skill.title} </TitleField>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default SkillsList