import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
         body1{
             font-weight: 700 !important;
          }
          body2{
              color:gray;
          }
        `,
    },
  },
});

export default theme;
