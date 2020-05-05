import React from 'react';
import {Card, PreviousLetters} from '../../library';
import {Letter} from '../../data';

const CARD_TITLE = 'Previous letters';
const CARD_TYPE = 'rect-large';

type PreviousLettersCardProps = {
    previousLetters: Array<Letter>
};

export const PreviousLettersCard = ({previousLetters}: PreviousLettersCardProps) => (
    <Card
        content={(
            <PreviousLetters
                letters={previousLetters}
            />
        )}
        title={CARD_TITLE}
        type={CARD_TYPE}
    />
);
