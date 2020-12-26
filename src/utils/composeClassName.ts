type Modifiers = {
    [key: string]: boolean
};

export const composeClassName = (
    className: string,
    modifiers?: Modifiers
): string => {
    if (!modifiers) return className;

    const modifiersKeys = Object.keys(modifiers);
    if (!modifiersKeys.length) return className;

    const validModifiersKeys = modifiersKeys.filter(key => modifiers[key]);
    if (!validModifiersKeys.length) return className;

    return `${className} ${validModifiersKeys.join(' ')}`;
};
