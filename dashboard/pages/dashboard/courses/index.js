import Dashboard from '@/layouts/Dashboard'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Stack } from '@mui/system'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <h1>List of courses</h1>
        <Link href={'/dashboard/courses/add'}>
          <Button
            href='/dashboard/courses/add'
            variant='contained'
            startIcon={<AddIcon />}
          >
            Add Couse
          </Button>
        </Link>
      </Stack>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>
}
