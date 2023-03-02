import React, { useEffect } from 'react'
import axios from 'axios'
import Add from '@/components/AddCourse'
import Dashboard from '@/layouts/Dashboard'

export default function Page() {
  const onSubmit = (body) => {
    axios.post(`http://localhost:5000/api/v1/course`, {
      ...body,
    })
  }

  return <Add onSubmit={onSubmit} />
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>
}
