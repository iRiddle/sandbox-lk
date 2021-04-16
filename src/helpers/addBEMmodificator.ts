const addBEMmodificator = (
    blockClass : string, 
    modificatorClass : string | string[] ) => {
        if( typeof modificatorClass === 'string'){
            return `
            ${blockClass} ${blockClass}${modificatorClass}
            `;
        }

        const resultClass : string = modificatorClass.map( mod => addBEMmodificator( blockClass, mod)).join('');
        return resultClass;
    }

export default addBEMmodificator;