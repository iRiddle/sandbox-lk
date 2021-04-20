import React from 'react';
import './CityBar.sass';

const CITYIES = [
    'Кременчуг-Константиновское',
    'Санкт-Петербург',
    'Москва'
]

const CityBar = () => {
    
    const renderOptions = CITYIES.map( city => (
        <option key={city} className="city-bar__option">{city}</option>
    ))

    return (
    <div className="city-bar">
        <div className="city-bar__title city-bar--mr">Ваш город:</div>
        <div className="city-bar__select-wrapper">
        <select className="city-bar__select" size={1}>
           {renderOptions}
        </select>
        </div>
    </div>
)}

export default CityBar