import axios from 'axios'
import { useState, useEffect } from 'react'
import { type ICharacter } from '../models/character_interface'

export function useCharacterDetails(url: string) {
  const [characterDetails, setCharacterDetails] = useState<ICharacter>()

  useEffect(() => {
    fetchCharacterDetails(url)
  }, [url])

  async function fetchCharacterDetails(url: string) {
    const { data } = await axios.get<ICharacter>(url)
    setCharacterDetails(data)
  }

  return { characterDetails }
}
