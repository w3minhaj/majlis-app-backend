import { useRouter } from 'next/router'
import Edit from '@/components/CourseForm'
import Dashboard from '@/layouts/Dashboard'
import useFetch from '@/hooks/useFetch'

export default function Page({ API_URL }) {
  const router = useRouter()
  const { id } = router.query
  const { response, error, loading } = useFetch(`${API_URL}/course/${id}`)

  const onSubmit = async (body) => {
    const form = new FormData()
    Object.keys(body).forEach((key) => {
      form.append(key, body[key])
    })

    await axios.post(`${API_URL}/api/v1/course`, form, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    router.push('/dashboard/courses')
  }

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {response && (
        <Edit
          onSubmit={onSubmit}
          formValues={response.data.course}
          formType='edit'
        />
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
