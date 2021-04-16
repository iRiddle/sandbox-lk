import React from 'react';
import addBEMmodificator from '../../helpers/addBEMmodificator'

import { IButtonProps} from '../../intefaces'

const Button = ({submit = false, variant, children, onClick = ()=>{}} : IButtonProps) => {
    let baseClass = "button";
    let classes = addBEMmodificator(baseClass, variant);

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