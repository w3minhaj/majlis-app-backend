import { Button, Card, CardContent, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Login({ API_URL }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/dashboard')
    }
  }, [])

  const onSubmit = async (body) => {
    const { data } = await axios.post(`${API_URL}/users/login`, {
      ...body,
    })
    localStorage.setItem('token', data.token)
    router.push('/dashboard')
  }

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      height='100vh'
    >
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Stack spacing={2} direction='column'>
            <TextField
              label='Username'
              id='outlined-size-small'
              size='small'
              onChange={(event) => {
                setUsername(event.target.value)
              }}
            />
            <TextField
              label='Password'
              id='outlined-size-small'
              size='small'
              type='password'
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
            <Button
              variant='contained'
              onClick={onSubmit.bind(this, { username, password })}
            >
              Login
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}

export async function getStaticProps() {
  return { props: { API_URL: process.env.API_URL } }
}

export default Login
