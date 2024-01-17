import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        size: "small",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "inherit",
          margin: 4,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          height: 30,
          width: 30,
          margin: 4,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiAppBar: {
      defaultProps: {
        position: "static",
      },
      styleOverrides: {
        root: {
          backgroundColor: "white",
          p: 0,
          borderBottom: 1,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          height: "60vh",
          marginTop: "5vh",
          marginBottom: "5vh",
          marginRight: "15vw",
          marginLeft: "15vw",
          padding: 40,
        },
      },
    },
  },
});
