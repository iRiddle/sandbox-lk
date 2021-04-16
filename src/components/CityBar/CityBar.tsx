import React from 'react';
import './CityBar.sass';

const CityBar = () => (
    <div className="city-bar">
        <div className="city-bar__title city-bar--mr">Ваш город:</div>
        <div className="city-bar__select-wrapper">
        <select className="city-bar__select" size={1}>
            <option className="city-bar__option">Кременчуг-Константиновское</option>
            <option className="city-bar__option">Санкт-Петербург</option>
            <option className="city-bar__option">Москва</option>
        </select>
        </div>
    </div>
)

export default CityBar