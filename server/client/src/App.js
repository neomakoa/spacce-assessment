import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";

import { Dashboard } from "./pages/Dashboard";
import { Form } from "./pages/questions/Form";
import { Quiz } from "./pages/quiz/Quiz";
// import { Badge } from "./pages/quiz/Badge";
import NavBar from "./components/NavBar";
import { customTheme } from "./shared/assets/customTheme";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ backgroundColor: "whitesmoke" }}>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/badge" element={<Badge />} /> */}
            <Route path="/questions" element={<Form />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
