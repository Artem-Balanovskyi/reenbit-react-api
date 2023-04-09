import React from 'react'
import { Link, useParams } from 'react-router-dom'
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
        <Link className='char-details__navigation-link' to='/'>
          <div className='char-details__navigation-wrap'>
            <h3 className='char-details__navigation-title'>GO BACK</h3>
          </div>
        </Link>
      </nav>
      {characterDetails && (
        <div className='char-details__content-wrap'>
          <div className='char-details__content-img-wrap'>
            <img
              className='char-details__content-pic'
              src={characterDetails.image}
              alt='character-page__img'
            />
          </div>
          <div className='char-details__content-title'>{characterDetails.name || 'Unknown'}</div>
          <div className='char-details__content-info'>Informations</div>
          <div className='char-details__content-info-block'>
            <div className='char-details__content-info-block-title'>Gender</div>
            <div className='char-details__content-info-block-data'>
              {characterDetails.gender || 'Unknown'}
            </div>
            <div className='char-details__content-info-block-hr'></div>
          </div>
          <div className='char-details__content-info-block'>
            <div className='char-details__content-info-block-title'>Status</div>
            <div className='char-details__content-info-block-data'>
              {characterDetails.status || 'Unknown'}
            </div>
            <div className='char-details__content-info-block-hr'></div>
          </div>
          <div className='char-details__content-info-block'>
            <div className='char-details__content-info-block-title'>Specie</div>
            <div className='char-details__content-info-block-data'>
              {characterDetails.species || 'Unknown'}
            </div>
            <div className='char-details__content-info-block-hr'></div>
          </div>
          <div className='char-details__content-info-block'>
            <div className='char-details__content-info-block-title'>Origin</div>
            <div className='char-details__content-info-block-data'>
              {characterDetails.origin.name || 'Unknown'}
            </div>
            <div className='char-details__content-info-block-hr'></div>
          </div>
          <div className='char-details__content-info-block'>
            <div className='char-details__content-info-block-title'>Type</div>
            <div className='char-details__content-info-block-data'>
              {characterDetails.type || 'Unknown'}
            </div>
            <div className='char-details__content-info-block-hr'></div>
          </div>
        </div>
      )}
    </div>
  )
}
