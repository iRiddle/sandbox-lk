import React from 'react';
import './ProfileMainMenu.sass'

import ProfileInfoMenu from '../ProfileInfoMenu';
import ProfileStatusMenu from '../ProfileStatusMenu';

const ProfileMainMenu = () => (
    <div className="profile-menu">
        <ProfileStatusMenu
            name="Александрова Александра"
        />
        <ProfileInfoMenu/>
    </div>
)

export default ProfileMainMenu