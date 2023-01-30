import ImageUpload from "@/components/ImageUpload";
import Dashboard from "@/layouts/Dashboard";
import { Description } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

export default function Page() {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [duration, setDuration] = React.useState();
  const [outcome, setOutcome] = React.useState("");
  const [description, setDescription] = React.useState();

  return (
    <Paper variant="outlined">
      <Box sx={{ padding: 5 }}>
        <h1>Add new Course</h1>
        <TextField
          required
          fullWidth
          label="Program Name"
          id="fullWidth"
          margin="normal"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Stack direction="row" spacing={2} marginY={1}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              Type of Course
            </InputLabel>
            <Select
              value={type}
              label="Type of course"
              onChange={(event) => {
                setType(event.target.value);
              }}
              fullWidth
              required
            >
              <MenuItem value={"UG"}>UG</MenuItem>
              <MenuItem value={"PG"}>PG</MenuItem>
            </Select>
          </FormControl>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              Course Duration
            </InputLabel>
            <Select
              value={duration}
              label="Course Duration"
              onChange={(event) => {
                setDuration(event.target.value);
              }}
              fullWidth
              required
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          margin="normal"
          value={description}
        />
        <TextField
          fullWidth
          label="Program Outcome"
          multiline
          rows={4}
          margin="normal"
          value={outcome}
        />
        <ImageUpload />
      </Box>
    </Paper>
  );
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};
