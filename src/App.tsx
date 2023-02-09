import User from "./features/User";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Button, Container } from "@mui/material";

function App() {
  return (
    <>
    <Container maxWidth='xl'>
    <React.Fragment>
    <CssBaseline enableColorScheme/> 
      <main className="App">
        <User />
      </main>
    </React.Fragment>
    </Container>


    </>
  );
}
// maybe yo have to delete the CssBaseline because you have it in the themeconfig
export default App;
