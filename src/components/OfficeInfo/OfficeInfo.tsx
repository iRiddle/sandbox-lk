import React from 'react';
import Button from '../Button';

const OfficeInfo = () => (
    <div className="office-info">
        <div className="office-info__adress">Офис в Краснодаре: ул. Северная, 327, оф. 711</div>
        <a className="office-info__tel" href="tel:+78000000">8 (800) 800-00-00</a>
       <Button variant="--text-underlined--header" onClick={()=>{}}>
       Заказать звонок
       </Button>
    </div>
);

export default OfficeInfo;