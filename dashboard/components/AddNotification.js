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
  const [content, setContent] = React.useState('')

  return (
    <Paper variant='outlined'>
      <Box sx={{ padding: 5 }}>
        <h1>Add Notification</h1>
        <Stack direction='row' spacing={2} marginY={1}>
          <TextField
            fullWidth
            required
            label='Notification Content'
            margin='normal'
            multiline
            rows={5}
            value={content}
            onChange={(event) => {
              setContent(event.target.value)
            }}
          />
        </Stack>

        <InputLabel>Upload course image*</InputLabel>
        <ImageUpload />

        <Button variant='contained'>Submit</Button>
      </Box>
    </Paper>
  )
}
