import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";

function Login() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      height="100vh"
    >
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Stack spacing={2} direction="column">
            <TextField label="Username" id="outlined-size-small" size="small" />
            <TextField
              label="Password"
              id="outlined-size-small"
              size="small"
              type="password"
            />
            <Button variant="contained">Login</Button>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default Login;
