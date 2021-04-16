import React from 'react';
import './SearhInput.sass';

const SearhInput = () => (
    <>
    <div className="search-input">
        <input id="search" className="search-input__input" type="text" placeholder="Поиск |"/>
        <label htmlFor="search" className="search-input__label"/>
    </div>
    </>
)

export default SearhInput