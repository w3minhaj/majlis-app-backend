import { useEffect, useState } from 'react'

export const useToken = () => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const currentToken = localStorage.getItem('token')
    console.log(currentToken, token)
    if (currentToken) {
      setToken(currentToken)
    }
  }, [token])

  return { token }
}
