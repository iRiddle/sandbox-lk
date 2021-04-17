import React from 'react';
import Button from '../Button';
import './ProfileInfoMenu.sass'

const ProfileInfoMenu = () => (
    <div className="profile-info">
        <ul className="profile-info__ul">
            <li>
                <Button>
                    Корзина
                </Button>
            </li>
        </ul>
    </div>
)

export default ProfileInfoMenu