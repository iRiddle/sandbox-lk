import React from 'react';
import './Logo.sass';
import logoImg from './logo-in-header.png';

const Logo = () => (
    <div className="logo">
        <img className="logo__img" src={logoImg} alt="логотип Cerebro"/>
        <div className="logo__description">Комплексный подход 
									к ведению онлайн бизнеса</div>
        </div>
)

export default Logo;