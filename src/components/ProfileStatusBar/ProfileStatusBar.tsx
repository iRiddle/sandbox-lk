import React from 'react';
import './ProfileStatusBar.sass';
import Button from '../Button';

const ProfileStatusBar = () => (
    <div className="profile-status-bar">
        <Button variant={["--text-icon-right--header", "--text-icon-right--header--icon-profile"]}>
            Войти
        </Button>
        <Button variant={["--text-icon-right--header", "--text-icon-right--header--icon-basket"]}>
            Корзина
        </Button>
    </div>
)

export default ProfileStatusBar