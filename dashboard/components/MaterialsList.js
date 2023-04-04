import useFetch from '@/hooks/useFetch'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'

export default function MaterialsList({ API_URL }) {
  const [program, setProgram] = useState('')
  const [semester, setSemester] = useState(1)
  const [materials, setMaterials] = useState({})
  const { response: courses } = useFetch(`${API_URL}/course`)

  useEffect(() => {
    const doFetch = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/material?program=${program}&semester=${semester}`
        )
        const json = await res.data
        setMaterials(json)
      } catch (e) {
        console.log(e)
      }
      doFetch()
    }
  }, [program, semester])

  return (
    <Paper variant='outlined' sx={{ marginTop: 5 }}>
      <Box sx={{ padding: 5 }}>
        <h1>List of all materials</h1>
        <p>select a program and semester from dropdown</p>
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
              {courses?.data?.course?.map((course) => {
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
        {materials?.data?.materials?.map((material) => {
          return (
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant='h5' component='div'>
                  {material.material}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' variant='contained' color='error'>
                  Delete
                </Button>
              </CardActions>
            </Card>
          )
        })}
      </Box>
    </Paper>
  )
}
