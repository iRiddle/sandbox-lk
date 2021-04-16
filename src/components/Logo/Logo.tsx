import React from 'react';
import {ILogoProps } from '../../intefaces'
import logoImg from './logo-in-header.png';

const Logo = ({description}: ILogoProps) => (
    <div className="logo">
        <img className="logo__img" src={logoImg} alt="логотип Cerebro"/>
        <div className="logo__description">{description}</div>
        </div>
)

export default Logo;