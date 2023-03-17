import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

import Table from "./Table";

function App() {
  const theme = createTheme({});

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          display="flex"
          flex={1}
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Table />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
