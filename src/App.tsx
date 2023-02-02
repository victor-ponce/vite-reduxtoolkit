import User from "./features/User";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

function App() {
  return (
    <>
    <React.Fragment>
    <CssBaseline enableColorScheme/>
      <main className="App">
        <User />
      </main>
    </React.Fragment>

    </>
  );
}

export default App;
