import Dashboard from '@/layouts/Dashboard'
import AddGallery from '@/components/AddGallery'
export default function Page() {
  return <AddGallery />
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>
}
