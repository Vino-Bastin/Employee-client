/**
 * @file App.js
 * @description This file contains the main component of the application.
 */
import React from "react";
import { Toaster } from "react-hot-toast";

import Table from "./components/Table";
import Header from "./components/Header";
import ThemeProvider from "./theme";
import { EmployeeProvider } from "./context/EmployeeContext";

function App() {
  return (
    <EmployeeProvider>
      <ThemeProvider>
        <Toaster />
        <Header />
        <Table />
      </ThemeProvider>
    </EmployeeProvider>
  );
}

export default App;
