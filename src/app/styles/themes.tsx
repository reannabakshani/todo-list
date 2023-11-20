"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: "#FFF",
        contrastText: "#000",
        light: "#9F9F9F",
      },
      secondary: {
        main: "#F4F4F4",
        contrastText: "#2C67A2",
      },
    //   action: {
    //     disabledBackground: "rgba(20, 158, 84, 0.35)",
    //     disabled: "#FFF",
    //   },
    },
  
    components: {
    //   MuiButton: {
    //     styleOverrides: {
    //       root: {
    //         height: "48px",
    //         marginTop: "12px",
    //         fontWeight: 500,
    //         fontSize: "16px",
    //       },
    //     },
    //   },
      
    },
  
    // typography: {
    //   button: {
    //     textTransform: "none",
    //     fontWeight: 500,
    //   },
    // },
  });
  
  export default theme;