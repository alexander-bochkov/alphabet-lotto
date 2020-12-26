import React from 'react';
import {Card, PreviousLetters} from '../../library';
import {Letter} from '../../data';

const CARD_TITLE = 'Previous letters';

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
        type={Card.TYPE.LARGE_RECT}
    />
);
