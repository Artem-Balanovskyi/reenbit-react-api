import React from 'react'
import { Link } from 'react-router-dom'
import { type ICharacter } from '../models/character_interface'

export interface ICharacterProps {
  character: ICharacter
}

export function Character({ character }: ICharacterProps) {
  const cardStyles = character.name.length > 20 ? 'character__card-title-sm' : 'character__card-title-lg'
  
  return (
    <Link className='character__card-link' to={character.id.toString()}>
      <div className='character__card'>
        <div className='character__card-pic'>
          <img className='character__card-img' src={character.image} alt={character.name} />
        </div>
        <div className='character__card-stats'>
          <div className={cardStyles}>
            <h3>{character.name}</h3>
          </div>
          <div className='character__card-desk'>
            <p>{character.species}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
