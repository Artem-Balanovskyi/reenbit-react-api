import axios from 'axios'
import { useState, useEffect } from 'react'
import { type ICharacter } from '../models/character_interface'

const url = 'https://rickandmortyapi.com/api/character'

interface DataInterface {
  info: {
    count: number
    pages: number
    next: string
    prev: null | number
  },
  results: []
}

export function useAllCharacters() {
  const [allCharacters, setAllCharacters] = useState<ICharacter[]>([])

  useEffect(() => {
    fetchAllCharacters()
  }, [])

  async function fetchAllCharacters() {
    const { data } = await axios.get<DataInterface>(url)
    
    setAllCharacters(data.results)
  }

  return { allCharacters }
}
