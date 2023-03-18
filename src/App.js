import React from "react";

import Table from "./components/Table";
import Header from "./components/Header";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Table />
    </ThemeProvider>
  );
}

export default App;
