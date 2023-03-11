import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function CourseTable({ courses, API_URL }) {
  const router = useRouter()

  const deleteCourse = async (id) => {
    await axios.delete(`${API_URL}/course/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    router.reload()
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Course Name</TableCell>
              <TableCell align='left'>Type</TableCell>
              <TableCell align='left'>Duration</TableCell>
              <TableCell align='left'>Fees</TableCell>
              <TableCell align='left'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow
                key={course._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='left'>{course.program}</TableCell>
                <TableCell align='left'>{course.type}</TableCell>
                <TableCell align='left'>{course.duration} years</TableCell>
                <TableCell align='left'>{course.fee}</TableCell>
                <TableCell align='left'>
                  <Link href={`/dashboard/courses/edit/${course._id}`}>
                    <IconButton color='primary'>
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton
                    color='error'
                    onClick={() => deleteCourse(course._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
