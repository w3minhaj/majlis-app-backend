import ImageUpload from '@/components/ImageUpload'
import Dashboard from '@/layouts/Dashboard'

import { Button, InputLabel, Paper } from '@mui/material'

import { Box } from '@mui/system'
import React from 'react'

export default function Page({ onSubmit }) {
  return (
    <Paper variant='outlined'>
      <Box sx={{ padding: 5 }}>
        <h1>Add Images to Gallery</h1>
        <InputLabel>Upload course image*</InputLabel>
        <ImageUpload />
        <Button variant='contained'>Submit</Button>
      </Box>
    </Paper>
  )
}
