import React from 'react'
import { Link } from 'react-router-dom'
import { type ICharacter } from '../models/character_interface'

export interface ICharacterProps {
  character: ICharacter
}

export function Character({ character }: ICharacterProps) {
  return (
    <Link className='character__card-link' to={character.id.toString()}>
      <div className='character__card'>
        <div className='character__card-pic'>
          <img
            className='character__card-img'
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className='character__card-stats'>
          <h3 className='character__card-title'>{character.name}</h3>
          <p className='character__card-desk'>{character.species}</p>
        </div>
      </div>
    </Link>
  )
}
