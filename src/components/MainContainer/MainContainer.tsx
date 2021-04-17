import React from 'react';
import WidthContainer from '../WidthContainer';
import './MainContainer.sass';
import {IMainContainerProps} from '../../intrefaces';

const MainContainer = ({children} : IMainContainerProps) => (
    <WidthContainer>
        <div className="main-container">
            <div className="main-container__manu-bar">
                { Array.isArray(children) ? children[0] : children }
            </div>
            <main className="main-container__main">
               { Array.isArray(children) ? children[1] : null }
            </main>
        </div>
    </WidthContainer>
)

export default MainContainer