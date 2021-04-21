import React from 'react';
import './SearchInput.sass';

const SearchInput = () => (
    <>
    <div className="search-input">
        <input id="search" className="search-input__input" type="text" placeholder="Поиск |"/>
        <label htmlFor="search" className="search-input__label"/>
    </div>
    </>
)

export default SearchInput