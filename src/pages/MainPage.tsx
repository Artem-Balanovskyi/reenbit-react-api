import React from 'react'
import { Character } from '../components/Character'
import { ErrorMessage } from '../components/ErrorMessage'
import { Loader } from '../components/Loader'
import { useAllCharacters } from '../hooks/allCharacters'
export function MainPage(props: any) {
  console.log('🚀 ~ file: MainPage.tsx:5 ~ MainPage ~ props:', props)
  const { allCharacters, loading, error } = useAllCharacters()

  return (
    <div className='main-page__wrapper'>
      <div className='loader__wrap'>{loading && <Loader loading={loading} />}</div>
      <div className='error-message__wrap'>{error && <ErrorMessage error={error} />}</div>
      <div className='main-page__title'></div>
      <form className='main-page__search-form'>
        <fieldset className='main-page__search-form__wrap'>
          <span className='main-page__search-form__info'>
            <input
              className='main-page__search-form__field'
              type='text'
              name='search-form'
              placeholder='Filter by name...'
            />
          </span>
        </fieldset>
      </form>
      <section className='main-page__content'>
        <div className='main-page__content__container'>
          {allCharacters.length > 0 &&
            allCharacters.map((character) => (
              <Character character={character} key={character.id} />
            ))}
        </div>
      </section>
    </div>
  )
}
