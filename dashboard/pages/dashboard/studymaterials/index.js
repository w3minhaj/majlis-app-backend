import Dashboard from '@/layouts/Dashboard'
import AddMaterial from '@/components/AddMaterials'
import MaterialsList from '@/components/MaterialsList'

export default function Page({ API_URL }) {
  return (
    <>
      <AddMaterial API_URL={API_URL} />
      <MaterialsList API_URL={API_URL} />
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>
}

export async function getStaticProps() {
  return { props: { API_URL: process.env.API_URL } }
}
