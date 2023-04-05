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

export function useCharacters() {
  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect(() => {
    fetchCourses()
  }, [])

  async function fetchCourses() {
    const { data } = await axios.get<DataInterface>(url)
    
    setCharacters(data.results)
  }

  return { characters }
}
