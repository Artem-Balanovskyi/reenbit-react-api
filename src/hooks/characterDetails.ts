import axios, { type AxiosError } from 'axios'
import { useState, useEffect } from 'react'
import { type ICharacter } from '../models/character_interface'

export function useCharacterDetails(url: string) {
  const [characterDetails, setCharacterDetails] = useState<ICharacter>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCharacterDetails(url)
  }, [url])

  async function fetchCharacterDetails(url: string) {
    try {
      setError('')
      setLoading(true)

      const { data } = await axios.get<ICharacter>(url)

      setCharacterDetails(data)

      setLoading(false)
    } catch (err: unknown) {
      const error = err as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  return { characterDetails, loading, error }
}
