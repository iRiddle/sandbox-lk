import React from 'react';
import './Button.sass';

import addBEMmodificator from '../../helpers/addBEMmodificator'

import { IButtonProps} from '../../interfaces'

const Button = ({
    submit = false,
    modificators,
    activeModificator,
    isActive,
    counter,
    children, 
    onClick = ()=>{}
} : IButtonProps) => {
    
    let baseClass = "button";
    let classes = addBEMmodificator(baseClass, modificators);

    if(isActive && activeModificator) classes = classes + addBEMmodificator(baseClass, activeModificator);

    const renderCounter = counter ? ` (${counter})` : null

    return (
    <button
        type={ submit ? "submit" : "button"}
        className={classes}
    >
        {children}{renderCounter}
    </button>
)
}

export default Button;