import React from "react";
import "./App.css";

import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import Settings from '../Settings/index';
import Dashboard from "../Dashboard";

import { AppProvider } from "./AppProvider";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
        <Dashboard />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
