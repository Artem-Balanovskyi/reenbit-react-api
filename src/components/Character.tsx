import React from 'react'
import { type ICharacter } from '../models/character_interface'

interface CharacterProps {
  character: ICharacter
}

export function Character({ character }: CharacterProps) {
  return (
    <div className='content__card'>
      <div className='content__card-pic'>
        <img src={character.image} alt={character.name} className='content__card-img' />
        <div className='content__card-stats'>
          <h3 className='content__card-title'>{character.name}</h3>
        </div>
      </div>
      <p className='content__card-desk'>{character.species}</p>
    </div>
  )
}
