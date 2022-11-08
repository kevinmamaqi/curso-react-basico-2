import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setData(null)
    setError(false)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch(() => {
        setError(error)
      })
  }, [url])

  return { data, loading, error, isError: !!error, isSuccess: !!data }
}

export default useFetch
