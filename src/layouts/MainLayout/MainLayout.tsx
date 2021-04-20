import React from 'react';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import ProfileMainMenu from '../../components/ProfileMainMenu';

import {IMainLayoutProps} from '../../interfaces'

// MainContainer can have only one or two children, first children to right bar, second to main page content. If you want more wrapp it in React.Fragment: <> ... </>

const MainLayout = ({children}:IMainLayoutProps) => (
    <>
        <Header/>
        <MainContainer>  
            <>
                <ProfileMainMenu/>
            </>
            <>
                {children ? children : null }
            </>

        </MainContainer>
    </>
)

export default MainLayout