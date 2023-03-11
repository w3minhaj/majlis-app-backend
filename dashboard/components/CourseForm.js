import ImageUpload from '@/components/ImageUpload'
import {
  Alert,
  AlertTitle,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useState } from 'react'

export default function CourseForm({ onSubmit, formValues = {}, formType }) {
  const [name, setName] = useState(formValues.program ?? '')
  const [type, setType] = useState(formValues.type ?? 'UG')
  const [duration, setDuration] = useState(formValues.duration ?? 3)
  const [outcome, setOutcome] = useState(formValues.outcome ?? '')
  const [description, setDescription] = useState(formValues.description ?? '')
  const [image, setImage] = useState([])
  const [fee, setFee] = useState(formValues.fee ?? 0)
  const [error, setError] = useState(null)

  const onFormSubmit = async () => {
    try {
      if (name && type && duration && outcome && description && image && fee) {
        return await onSubmit({
          program: name,
          type,
          duration,
          outcome,
          description,
          image: image[0],
          fee,
        })
      }
    } catch (err) {
      console.log(err)
      setError(err.response.data.message.message)
    }
  }

  return (
    <Paper variant='outlined'>
      <Box sx={{ padding: 5 }}>
        <h1>
          {formType === 'edit'
            ? `Edit course - ${formValues.program}`
            : 'Add new Course'}
        </h1>
        <TextField
          required
          fullWidth
          label='Program Name'
          id='fullWidth'
          margin='normal'
          value={name}
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <Stack direction='row' spacing={2} marginY={1}>
          <FormControl required fullWidth>
            <InputLabel>Type of Course</InputLabel>
            <Select
              value={type}
              label='Type of course'
              onChange={(event) => {
                setType(event.target.value)
              }}
              fullWidth
              required
            >
              <MenuItem value={'UG'}>UG</MenuItem>
              <MenuItem value={'PG'}>PG</MenuItem>
            </Select>
          </FormControl>
          <FormControl required fullWidth>
            <InputLabel>Course Duration</InputLabel>
            <Select
              value={duration}
              label='Course Duration'
              onChange={(event) => {
                setDuration(event.target.value)
              }}
              fullWidth
              required
            >
              <MenuItem value={1}>1 Years</MenuItem>
              <MenuItem value={2}>2 Years</MenuItem>
              <MenuItem value={3}>3 Years</MenuItem>
              <MenuItem value={4}>4 Years</MenuItem>
              <MenuItem value={5}>5 Years</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <TextField
          fullWidth
          required
          label='Description'
          multiline
          rows={4}
          margin='normal'
          value={description}
          onChange={(event) => {
            setDescription(event.target.value)
          }}
        />
        <TextField
          fullWidth
          required
          label='Program Outcome'
          multiline
          rows={4}
          margin='normal'
          value={outcome}
          onChange={(event) => {
            setOutcome(event.target.value)
          }}
        />
        <InputLabel>Upload course image*</InputLabel>
        <ImageUpload files={image} setFiles={setImage} numFiles={1} />
        <TextField
          fullWidth
          required
          label='Course Fee'
          margin='normal'
          value={fee}
          onChange={(event) => {
            const regex = /^[0-9\b]+$/
            if (event.target.value === '' || regex.test(event.target.value)) {
              setFee(event.target.value)
            }
          }}
          InputProps={{
            startAdornment: <InputAdornment position='start'>₹</InputAdornment>,
          }}
        />
        {error && (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        <Button variant='contained' onClick={onFormSubmit}>
          Submit
        </Button>
      </Box>
    </Paper>
  )
}
