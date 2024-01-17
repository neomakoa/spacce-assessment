import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

import { customTheme } from "../shared/assets/customTheme";
import QuestionnaireCard from "../components/QuestionnaireCard";

export const Dashboard = () => {


  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          backgroundColor: "whitesmoke",
          border: 1,
          borderColor: "lightgray",
        }}
      >
        <Container>
          <Button
            component="a"
            href="/questions"
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            <AddIcon /> Add a question
          </Button>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "whitesmoke" }}>
        <Container><QuestionnaireCard /></Container>
      </Box>
    </ThemeProvider>
  );
};
