import React from 'react';
import {composeClassName} from '../../../utils';

export const SectionTitle = ({sectionNumber}: {sectionNumber: number}) => (
    <div className={composeClassName('game-cards__section-title')}>
        <span>Section </span>
        <span><b>{renderSectionTitle(sectionNumber)}</b></span>
    </div>
);

function renderSectionTitle(sectionNumber: number) {
    let sectionLetter: string;
    if (sectionNumber === 0) sectionLetter = 'A';
    if (sectionNumber === 1) sectionLetter = 'B';
    if (sectionNumber === 2) sectionLetter = 'C';
    return sectionLetter;
}
