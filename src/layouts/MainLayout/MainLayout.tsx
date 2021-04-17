import React from 'react';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import ProfileMainMenu from '../../components/ProfileMainMenu';

const MainLayout = () => (
    <>
        <Header/>
        <MainContainer>
            <ProfileMainMenu/>
            {/* content here, only two children avalible in MainContainer */}
        </MainContainer>
    </>
)

export default MainLayout