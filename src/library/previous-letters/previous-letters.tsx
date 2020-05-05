import React from 'react';
import {PreviousLetter} from './components/previou-letter';
import {Letter} from '../../data';
import './previous-letters.scss';

type PreviousLettersProps = {
    letters: Array<Letter>
};

export const PreviousLetters = ({
    letters
}: PreviousLettersProps) => (
    <div className="previous-letters">
        {
            remainLastTwentyLetters(letters).map(({character, type}) => (
                <PreviousLetter
                    key={character}
                    character={character}
                    type={type}
                />
            ))
        }
    </div>
);

function remainLastTwentyLetters(letters: Array<Letter>) {
    if (letters.length <= 20) return letters;
    return letters.slice(letters.length - 20);
}
