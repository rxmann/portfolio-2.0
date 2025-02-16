import {
  Button,
  Container,
  List,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const TitleField = ({ active, ...props }) => (
  <Button
    {...props}
    sx={{
      backgroundColor: active ? "#6A98F0" : "#303030",
      color: active ? "#fff" : "#ccc",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "50px",
      textTransform: "none",
      "&:hover": {
        backgroundColor: active ? "#5A88E0" : "#404040",
      },
    }}
  />
);

const SkillsList = ({ skillsList, active, setActive }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screen

  return (
    <Container
      sx={{
        minWidth: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignSelf: 'center',
          justifyContent: 'space-between',
          gap: {
            xs: "18px", // Default for extra small screens
            sm: "24px", // Small screens
            md: "48px", // Medium screens (≥730px)
            lg: "62px", // Large screens and up
          },
          // border: '1px solid green'
        }}
      >
        {skillsList.map((skill) => (
          <TitleField
            active={active === skill.id}
            variant="body1"
            key={skill.id}
            onClick={() => setActive(skill.id)}
          >
            {skill.title}
          </TitleField>
        ))}
      </List>
    </Container>
  );
};

export default SkillsList;
