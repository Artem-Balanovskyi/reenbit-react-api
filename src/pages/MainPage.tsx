import React from 'react';
import { Character } from '../components/Character';
import { useCharacters } from '../hooks/characters';
export function MainPage() {
    const { characters } = useCharacters()    

    return (
        <div className="main-page__wrapper">
            <div className="main-page__title"></div>
            <form className="search-form">
                    <fieldset className="search-form__wrap">
                        <span className="search-form__info">
                            <input type="text" name="search-form" className="search-form__field"
                                placeholder="Filter by name..." />
                        </span>
                    </fieldset>
            </form>
        <section className='content'>
            <div className='content__container'>
            {characters.length > 0 && characters.map(character => <Character character={character} key={character.id} />)}
            </div>
        </section>
            
        </div>
    )
}