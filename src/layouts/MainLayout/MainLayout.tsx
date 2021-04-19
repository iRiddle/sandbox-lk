import React from 'react';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import ProfileMainMenu from '../../components/ProfileMainMenu';

import {IMainLayoutProps} from '../../interfaces'

const MainLayout = ({children}:IMainLayoutProps) => (
    <>
        <Header/>
        <MainContainer>
            <ProfileMainMenu/>
            {children ? children : null }

        </MainContainer>
    </>
)

export default MainLayout