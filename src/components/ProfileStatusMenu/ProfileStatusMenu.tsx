import React from 'react';
import './ProfileStatusMenu.sass'
import {IProfileStatusMenuProps} from './../../intrefaces';
import Button from '../Button';

const ProfileStatusMenu = ({ name, imgUrl}:IProfileStatusMenuProps) => (
    <div className="profile-status">
        <div className="profile-status__img">
            { imgUrl && <img src={imgUrl} alt="profile avatar" />}
        </div>
        <div className="profile-status__description">
            <div className="profile-status__name">
                {name}
            </div>
            <Button modificators={'--text'}>
                 Выйти из личного кабинета
            </Button>
        </div>
    </div>
)

export default ProfileStatusMenu