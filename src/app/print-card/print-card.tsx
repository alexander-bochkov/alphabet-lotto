import React from 'react';
import {Card, Dropdown, Print} from '../../library';

export const PrintCard = ({
    alphabetDropdownItems,
    pagesQuantityDropdownItems,
    printAlphabet,
    printPagesQuantity,
    onAlphabetDropdownChange,
    onPrint,
    onQuantityDropdownChange
}: {
    alphabetDropdownItems: Array<string>,
    printAlphabet: string,
    printPagesQuantity: number,
    pagesQuantityDropdownItems: Array<number>,
    onAlphabetDropdownChange: (value: string) => void,
    onPrint: () => void,
    onQuantityDropdownChange: (value: number) => void
}) => {
    const AlphabetDropdown = (
        <Dropdown
            items={alphabetDropdownItems}
            value={printAlphabet}
            onChange={onAlphabetDropdownChange}
        />
    );

    const QuantityDropdown = (
        <Dropdown
            items={pagesQuantityDropdownItems}
            value={printPagesQuantity}
            onChange={onQuantityDropdownChange}
        />
    );

    return (
        <Card
            type={Card.TYPE.RECT}
            title="Print game cards"
            content={(
                <Print
                    alphabetDropdown={AlphabetDropdown}
                    quantityDropdown={QuantityDropdown}
                    onPrint={onPrint}
                />
            )}
        />
    );
};
