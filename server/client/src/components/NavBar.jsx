import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { deepOrange, green } from "@mui/material/colors";


const NavBar = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar disableGutters>
            <Typography component="a" href="/" sx={{ color: "gray" }}>
              Workspace
            </Typography>
            
          <Box sx={{ flexGrow: 1, display: "flex" }} />

          <Box sx={{ flexGrow: 0 }}>
            <Button
              style={{
                backgroundColor: green[900],
              }}
            >
              View plans
            </Button>
            <Tooltip title="john doe">
              <IconButton sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                  <Typography>JD</Typography>
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
