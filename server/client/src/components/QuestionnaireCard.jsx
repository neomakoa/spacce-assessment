// import RemoveBtn from "./RemoveBtn";
// import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Paper, Typography } from "@mui/material";

const QuestionnaireCard = () => {

  return (
    <>
        <Paper
          sx={{
            my: 3,
            p: 4,
            border: 1,
            borderColor: "slategray",
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            alignItems: "start",
          }}
        >
          <Box>
            <Typography component="h2" sx={{ fontWeight: 700 }}>
              Questionnaire 
            </Typography>
            <Button component="a" href={'/quiz'}>Start Quiz</Button>
          </Box>

          <Box 
          sx={{ display: "flex", gap: "2" }} 
          >
            {/* <RemoveBtn id={'#'} /> */}
            {/* <Button component="a" href={'/form'}>
              <EditIcon size={24} />
            </Button> */}
          </Box>
        </Paper>
    </>
  );
}

export default QuestionnaireCard;