import React from 'react';
import './Button.sass';

import addBEMmodificator from '../../helpers/addBEMmodificator'

import { IButtonProps} from '../../intrefaces'

const Button = ({
    submit = false,
    modificators, 
    children, 
    onClick = ()=>{}
} : IButtonProps) => {
    
    let baseClass = "button";
    let classes = addBEMmodificator(baseClass, modificators);

    return (
    <button
        type={ submit ? "submit" : "button"}
        className={classes}
    >
        {children}
    </button>
)
}

export default Button;