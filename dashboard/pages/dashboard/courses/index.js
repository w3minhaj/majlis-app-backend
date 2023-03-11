import Dashboard from '@/layouts/Dashboard'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Stack } from '@mui/system'
import Link from 'next/link'
import CourseTable from '@/components/CourseTable'
import useFetch from '@/hooks/useFetch'

export default function Page({ API_URL }) {
  const { response, error, loading } = useFetch(`${API_URL}/course`)

  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <h1>List of courses</h1>
        <Link href={'/dashboard/courses/add'}>
          <Button variant='contained' startIcon={<AddIcon />}>
            Add Course
          </Button>
        </Link>
      </Stack>
      {loading && <h2>Loading...</h2>}
      {response && (
        <CourseTable courses={response.data.course} API_URL={API_URL} />
      )}
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>
}

export async function getStaticProps() {
  return { props: { API_URL: process.env.API_URL } }
}
