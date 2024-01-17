import React, { useState } from "react";
import { Box, Container, Button, TextField, Card } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "../../shared/assets/customTheme";
import useQuestions from "../../hook/useQuestions";

export const Form = () => {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    options: [],
  });

  const { saveQuestion, error, isLoading, success } = useQuestions();

  const onChange = (e, name) => {
    setFormData({
      ...formData,
      [name]: name === "options" ? e.target.value.split(",") : e.target.value
    })
  }

  const handleSubmit = () => {
    if (!formData | !formData.answer | !formData.question | formData.options.length < 0) {
      return;
    }

    saveQuestion(formData);
  }

  console.log('success: ', success)
  console.log('error: ', error)
  console.log('isLoading: ', isLoading)

  return (
    <ThemeProvider theme={customTheme}>
      <Container>
        <Box component="form" id="form-card">
          <Card sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <TextField
              variant="standard"
              onChange={(e) => onChange(e, "question")}
              value={formData.question}
              type="text"
              placeholder="Question"
            />
            <TextField
              variant="standard"
              onChange={(e) => onChange(e, "answer")}
              value={formData.answer}
              type="text"
              placeholder="Correct answer"
            />
            <TextField
              variant="standard"
              onChange={(e) => onChange(e, "options")}
              type="text"
              value={formData.options}
              placeholder="All answers (comma separated)"
              fullWidth
            ></TextField>
            <Button variant="contained" onClick={handleSubmit}>
              Add Question
            </Button>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
