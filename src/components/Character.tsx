import React from 'react'
import { Link } from 'react-router-dom'
import { type ICharacter } from '../models/character_interface'

export interface ICharacterProps {
  character: ICharacter
}

export function Character({ character }: ICharacterProps) {
  return (
    <div className='character__content__card'>
      <div className='character__content__card-pic'>
        <img className='character__content__card-img' src={character.image} alt={character.name} />
      </div>
      <div className='character__content__card-stats'>
      <Link to={(character.id.toString())}>
        <span className='character__content__card-link'>
          Push here!
        </span>
      </Link>
        <h3 className='character__content__card-title'>{character.name}</h3>
      </div>
      <p className='content__card-desk'>{character.species}</p>
    </div>
  )
}
