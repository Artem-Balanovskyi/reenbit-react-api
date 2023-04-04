import React from 'react';
export function MainPage() {
    return (
        <div className="main-page__wrapper">
            <div className="main-page__title"></div>
            <form className="search-form">
                    <fieldset className="search-form__wrap">
                        <p className="search-form__info">
                            <input type="text" name="user-like-to-do" className="search-form__field"
                                placeholder="What would you like to do?" />
                        </p>
                    </fieldset>
            </form>

            
        </div>
    )
}