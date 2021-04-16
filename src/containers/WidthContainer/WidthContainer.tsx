import React from 'react';
import './WidthContainer.sass';

import { IWidthCoontainerProps} from '../../intefaces'

const WidthContainer = ({children} : IWidthCoontainerProps) => (
    <div className="container">
        {children}
    </div>
)

export default WidthContainer;