import React, { type KeyboardEvent, useState } from 'react'
import { Character } from '../components/Character'
import { ErrorMessage } from '../components/ErrorMessage'
import { Loader } from '../components/Loader'
import PaginationBar from '../components/PaginationBar'
import { useAllCharacters } from '../hooks/allCharacters'

export function MainPage() {
  const [paginationNumber, setPaginationNumber] = useState(1)
  const [filterByName, setFilterByName] = useState('');
  const { allCharacters, loading, error, info } = useAllCharacters(paginationNumber, filterByName)

  const handlePagination = (event: React.ChangeEvent<unknown>, page: number) => {
    setPaginationNumber(page)
  }

  const handleFiltrationByName = (event: KeyboardEvent<HTMLInputElement>) => {

    if (event.key === 'Enter') {
      event.preventDefault();
      console.log('212', filterByName);
    }
  }

  return (
    <div className='main-page__wrapper'>
      <div className='loader__wrap'>{loading && <Loader loading={loading} />}</div>
      <div className='error-message__wrap'>{error && <ErrorMessage error={error} />}</div>
      <div className='main-page__title'></div>
      <form className='main-page__search-form'>
        <fieldset className='main-page__search-form__wrap'>
          <span className='main-page__search-form__info'>
           { <input
              className='main-page__search-form__field'
              type='text'
              name='search-form'
              placeholder='Filter by name...'
              value={filterByName}
        onChange={event => {setFilterByName(event.target.value)}}
        onKeyDown={handleFiltrationByName}
            />}
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
      {info && (
        <div className='main-page__pagination-bar'>
          <PaginationBar handler={handlePagination} counter={info.pages} />
        </div>
      )}
    </div>
  )
}
