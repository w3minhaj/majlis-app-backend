import ImageUpload from '@/components/ImageUpload'
import Dashboard from '@/layouts/Dashboard'
import { Description } from '@mui/icons-material'
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'

export default function Page({ onSubmit }) {
  const [program, setProgram] = React.useState('')
  const [semester, setSemester] = React.useState()
  const [subject, setSubject] = React.useState('')

  return (
    <Paper variant='outlined'>
      <Box sx={{ padding: 5 }}>
        <h1>Add Materials</h1>
        <Stack direction='row' spacing={2} marginY={1}>
          <FormControl required fullWidth>
            <InputLabel>Program</InputLabel>
            <Select
              value={program}
              label='Select Program'
              onChange={(event) => {
                setProgram(event.target.value)
              }}
              fullWidth
              required
            >
              <MenuItem value={'BCA'}>BCA</MenuItem>
              <MenuItem value={'Bsc Computer Science'}>
                Bsc Computer Science
              </MenuItem>
              <MenuItem value={'Bsc Chemistry'}>Bsc Chemistry</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            required
            label='Subject'
            margin='normal'
            value={subject}
            onChange={(event) => {
              setSubject(event.target.value)
            }}
          />
          <FormControl required fullWidth>
            <InputLabel>Semester</InputLabel>
            <Select
              value={semester}
              label='Semester'
              onChange={(event) => {
                setSemester(event.target.value)
              }}
              fullWidth
              required
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={5}>6</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <InputLabel>Upload course image*</InputLabel>
        <ImageUpload />

        <Button variant='contained'>Submit</Button>
      </Box>
    </Paper>
  )
}
