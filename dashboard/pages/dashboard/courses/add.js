import axios from 'axios'
import Add from '@/components/CourseForm'
import Dashboard from '@/layouts/Dashboard'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  const onSubmit = async (body) => {
    const form = new FormData()
    Object.keys(body).forEach((key) => {
      form.append(key, body[key])
    })

    await axios.post(`http://localhost:5000/api/v1/course`, form, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    router.push('/dashboard/courses')
  }

  return (
    <>
      <Add onSubmit={onSubmit} />
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>
}
