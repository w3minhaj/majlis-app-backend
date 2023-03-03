import { useState } from 'react'
import axios from 'axios'
import Add from '@/components/CourseForm'
import Dashboard from '@/layouts/Dashboard'
import { Alert, AlertTitle } from '@mui/material'

export default function Page() {
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
