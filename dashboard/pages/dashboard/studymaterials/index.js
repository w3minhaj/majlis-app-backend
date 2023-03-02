import Dashboard from '@/layouts/Dashboard'
import AddMaterial from '@/components/AddMaterials'

export default function Page() {
  return <AddMaterial />
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>
}
