const addBEMmodificator = (blockClass : string, modificatorClass : string) => `
${blockClass} ${blockClass}${modificatorClass}
`;

export default addBEMmodificator;