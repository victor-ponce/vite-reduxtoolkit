import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./authSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const User = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  /*const role = window.localStorage.getItem('user')
  const output = JSON.parse(role)
  console.log(output)
  const dispatch = useDispatch()
  const handleLogin = () => {
    dispatch(loginUser ({email, password}))
  }*/

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <Grid2
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      rowSpacing={2}
    >
      <h3>Login System</h3>
      <h5>User email</h5>
      <Grid2>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </Grid2>
      <Grid2>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </Grid2>
      <Grid2>
        <Button onClick={handleLogin} variant="outlined">
          Login
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default User;

//<h5>{output.email}</h5>
