import axios, { type AxiosError } from 'axios'
import { useState, useEffect } from 'react'
import { sortByName } from '../helpers/sortByName'
import { type ICharacter } from '../models/character_interface'


interface DataInterface {
  info: {
    count: number
    pages: number
    next: string
    prev: null | number
  }
  results: []
}

export function useAllCharacters(paginationNumber: number, filterByName?: string ) {
  // console.log('🚀 ~ file: allCharacters.ts:18 ~ useAllCharacters ~ filterByName:', filterByName)
  const [allCharacters, setAllCharacters] = useState<ICharacter[]>([])
  const [info, setInfo] = useState<DataInterface['info']>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const url = filterByName ? `https://rickandmortyapi.com/api/character/?name=${filterByName}` : `https://rickandmortyapi.com/api/character/?page=${paginationNumber}`

  useEffect(() => {
    fetchAllCharacters(url)
  }, [url])
  

  async function fetchAllCharacters(url: string) {
    try {
      setError('')
      setLoading(true)

      const { data } = await axios.get<DataInterface>(url)

      const sortedByName = sortByName(data.results)

      setAllCharacters(sortedByName)
      setInfo(data.info)

      setLoading(false)
    } catch (err: unknown) {
      const error = err as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  return { allCharacters, loading, error, info }
}
