import ImageUpload from '@/components/ImageUpload'
import useFetch from '@/hooks/useFetch'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material'
import { Box, Stack } from '@mui/system'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Page({ API_URL }) {
  const [program, setProgram] = useState('')
  const [semester, setSemester] = useState(1)
  const [material, setMaterial] = useState([])
  const { response: courses } = useFetch(`${API_URL}/course`)
  const router = useRouter()

  const onSubmit = async (body) => {
    try {
      const form = new FormData()
      Object.keys(body).forEach((key) => {
        form.append(key, body[key])
      })

      await axios.post(`${API_URL}/material`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      setProgram('')
      setSemester(1)
      setMaterial([])

      router.push('/dashboard/studymaterials')
    } catch (error) {
      console.log(error)
    }
  }

  const accept = {
    'application/pdf': ['.pdf'],
  }

  return (
    courses && (
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
                {courses?.data.course.map((course) => {
                  return (
                    <MenuItem key={course._id} value={course.program}>
                      {course.program}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
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
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <InputLabel>Upload course image*</InputLabel>
          <ImageUpload
            files={material}
            setFiles={setMaterial}
            numFiles={1}
            accept={accept}
          />

          <Button
            variant='contained'
            onClick={() => {
              onSubmit({ program, semester, material: material[0] })
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    )
  )
}
