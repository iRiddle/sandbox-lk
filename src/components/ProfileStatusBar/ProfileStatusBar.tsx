import React from 'react';
import './ProfileStatusBar.sass';
import Button from '../Button';

const ProfileStatusBar = () => (
    <div className="profile-status-bar">
        <Button modificators={["--text-icon-right--header", "--text-icon-right--header--icon-profile"]}>
            Войти
        </Button>
        <Button modificators={["--text-icon-right--header", "--text-icon-right--header--icon-basket"]}>
            Корзина
        </Button>
    </div>
)

export default ProfileStatusBar