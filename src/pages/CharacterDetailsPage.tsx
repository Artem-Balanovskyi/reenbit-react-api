import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacterDetails } from '../hooks/characterDetails'

let url = 'https://rickandmortyapi.com/api/character/'

export function CharacterDetailsPage() {
  const { characterId } = useParams()

  if (characterId) {
    url = `https://rickandmortyapi.com/api/character/${characterId}`
  } else {
    throw new Error('Error 3!')
  }

  const { characterDetails } = useCharacterDetails(url)


  return (
    <div className='character-page__wrapper'>
      <nav className='char-details__navigation'>
        <a className='char-details__navigation-link' href='/'>
          <div className='char-details__navigation-wrap'>
          <h3 className='char-details__navigation-title'>GO BACK</h3>
          </div>
        </a>
      </nav>
    </div>
  )
}
