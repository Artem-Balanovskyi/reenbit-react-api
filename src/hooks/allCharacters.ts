import axios, { type AxiosError } from 'axios'
import { useState, useEffect } from 'react'
import { sortByName } from '../helpers/sortByName'
import { type ICharacter } from '../models/character_interface'

const url = 'https://rickandmortyapi.com/api/character/?page=1'

interface DataInterface {
  info: {
    count: number
    pages: number
    next: string
    prev: null | number
  }
  results: []
}

export function useAllCharacters() {
  const [allCharacters, setAllCharacters] = useState<ICharacter[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchAllCharacters()
  }, [])

  async function fetchAllCharacters() {
    try {
      setError('')
      setLoading(true)

      const { data } = await axios.get<DataInterface>(url)

      const sortedByName = sortByName(data.results)

      setAllCharacters(sortedByName)

      setLoading(false)
    } catch (err: unknown) {
      const error = err as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  return { allCharacters, loading, error }
}
