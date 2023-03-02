import Dashboard from '@/layouts/Dashboard'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { id } = router.query

  return <p>edit {id}</p>
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>
}
