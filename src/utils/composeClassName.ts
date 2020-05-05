type Modifiers = {
    [key: string]: boolean
};

export const composeClassName = (
    primaryClassName: string,
    modifiers?: Modifiers
): string => {
    if (!modifiers) return primaryClassName;

    const modifiersKeys = Object.keys(modifiers);
    if (!modifiersKeys.length) return primaryClassName;

    const validModifiersKeys = modifiersKeys.filter(key => modifiers[key] === true);

    if (!validModifiersKeys.length) return primaryClassName;

    return `${primaryClassName} ${validModifiersKeys.join(' ')}`;
};
