import React from 'react';
import './TabBar.sass';

import { TABS } from '../../constants/tabs';
import Button from '../Button';

const TabBar = () => {

    const renderTabs = TABS.map( tab => (
        <li className="tab-bar__li" key={tab.label}>
            <Button modificators="--tab-header">
                {tab.label}
            </Button>
        </li>
    ))

    return (
    <nav className="tab-bar">
        <ul className="tab-bar__ul">
            {renderTabs}
        </ul>
    </nav>
)
}

export default TabBar