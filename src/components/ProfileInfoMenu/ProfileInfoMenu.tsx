import React from 'react';
import Button from '../Button';
import './ProfileInfoMenu.sass'

const ProfileInfoMenu = () => (
    <div className="profile-info">
        <ul className="profile-info__ul">
            <li>
                <Button 
                    modificators={['--text-icon-left' , '--text-icon-left--icon-basket']}
                    activeModificator='--text-icon-left--icon-basket--active'
                    counter={3}
                >
                    Корзина
                </Button>
            </li>
            <li>
                <Button 
                    modificators={['--text-icon-left' , '--text-icon-left--icon-bookmarks']}
                    activeModificator='--text-icon-left--icon-bookmarks--active'
                    counter={5}
                >
                    Закладки
                </Button>
            </li>
            <li>
                <Button 
                    modificators={['--text-icon-left' , '--text-icon-left--icon-downloads']}
                    activeModificator='--text-icon-left--icon-downloads--active'
                    counter={1}
                    isActive
                >
                    Загрузки
                </Button>
            </li>
            <li>
                <Button 
                    modificators={['--text-icon-left' , '--text-icon-left--icon-requests']}
                    activeModificator='--text-icon-left--icon-requests--active'
                    counter={0}
                >
                    Заявки
                </Button>
            </li>
            <li>
                <Button 
                    modificators={['--text-icon-left' , '--text-icon-left--icon-documents']}
                    activeModificator='--text-icon-left--icon-documents--active'
                    counter={3}
                >
                    Документы
                </Button>
            </li>
            <li>
                <Button 
                    modificators={['--text-icon-left' , '--text-icon-left--icon-settings']}
                    activeModificator='--text-icon-left--icon-settings--active'
                    counter={3}
                >
                    Настройки
                </Button>
            </li>
        </ul>
    </div>
)

export default ProfileInfoMenu