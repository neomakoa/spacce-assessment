import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { Card } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import Modal from "@mui/material/Modal";

import { customTheme } from "../../shared/assets/customTheme";
// import { QUIZ } from "../../constants/data";
import IconBxsBadgeCheck from "./Badge";
import useQuestions from "../../hook/useQuestions";
import { MyTimer } from "../../components/MyTimer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "whitesmoke",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { questions, getQuestions, answerQuestion } = useQuestions();

  useEffect(() => {
    getQuestions();
  }, [])

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    // if (answer === correctAnswer) {
    //   setSelectedAnswer(true);
    //   console.log("true");
    // } else {
    //   setSelectedAnswer(false);
    //   console.log("false");
    // }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
        : {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

// Timer

const time = new Date();
  time.setSeconds(time.getSeconds() + 180); // 10 minutes timer

  // Modal hooks and functions
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


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
          <Card>
            <Box>
              <h1>Quiz</h1>

              <Box>
                {!showResult ? (
                  <Box>
                    <Box>
                    <MyTimer expiryTimestamp={time} />

                      <h2>
                        Question: {activeQuestion + 1}
                        <span>/{questions.length}</span>
                      </h2>
                    </Box>
                    <h3>{questions.length > 0 && questions[activeQuestion]?.question}</h3>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        {questions.length > 0 &&
                          questions[activeQuestion].options.map((answer, idx) => (
                            <FormControlLabel
                              value={answer}
                              control={
                                <Radio
                                  key={idx}
                                  onClick={() => onAnswerSelected(answer, idx)}
                                />
                              }
                              label={answer}
                            />
                          ))}
                        {checked ? (
                          <Button onClick={nextQuestion}>
                            {activeQuestion === questions[activeQuestion]?.question.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        ) : (
                          <Button onClick={nextQuestion} disabled>
                            {activeQuestion === questions[activeQuestion]?.question.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        )}
                      </RadioGroup>
                    </FormControl>
                  </Box>
                ) : (
                  <Box>
                    <Box>
                      <Typography component="h2">
                        Congratulations! You have unlocked a badge.
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IconBxsBadgeCheck />
                      </Box>
                    </Box>
                    <Button onClick={() => window.location.reload()}>
                      Restart
                    </Button>
                    <Button component="a" href="/">
                      Go to dashboard
                    </Button>

                    {/* <Button onClick={handleOpen}>See Results</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h3"
                          component="h2"
                        >
                          Results
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          <Box sx={{ backgroundColor: "whitesmoke" }}>
                            <h3>Overall {(result.score / 25) * 100}%</h3>
                            <p>
                              Total Questions: <span>{questions.length}</span>
                            </p>
                            <p>
                              Total Score: <span>{result.score}</span>
                            </p>
                            <p>
                              Correct Answers:
                              <span>{result.correctAnswers}</span>
                            </p>
                            <p>
                              Wrong Answers: <span>{result.wrongAnswers}</span>
                            </p>
                          </Box>
                        </Typography>
                      </Box>
                    </Modal> */}
                  </Box>
                )}
              </Box>
            </Box>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
