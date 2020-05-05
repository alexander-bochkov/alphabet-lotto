import React from 'react';
import {Card, RandomLetter, RandomLetterControls} from '../../library';
import {Alphabet, Letter} from '../../data';

const CARD_TITLE = 'Random Letter';
const CARD_TYPE = 'square';

type RandomLetterCardProps = {
    currentAlphabet: Alphabet,
    currentLetter: Letter,
    previousLetters: Array<Letter>,
    onNextLetterClick: () => void,
    onResetClick: () => void
};

export const RandomLetterCard = ({
    currentAlphabet,
    currentLetter,
    previousLetters,
    onNextLetterClick,
    onResetClick
}: RandomLetterCardProps) => {
    const currentLetterCharacter = currentLetter ? currentLetter.character : null;
    const currentLetterType = currentLetter ? currentLetter.type : null;

    const allGeneratedLetters = [].concat((currentLetter || []), previousLetters);

    const disableNextLetter = currentAlphabet
        ? currentAlphabet.letters.length === allGeneratedLetters.length : true;
    const disableReset = !allGeneratedLetters.length;

    const subtitle = currentAlphabet
        ? `${allGeneratedLetters.length} out of ${currentAlphabet.letters.length}`
        : null;

    return (
        <Card
            content={(
                <>
                    <RandomLetter
                        character={currentLetterCharacter}
                        type={currentLetterType}
                    />
                    <RandomLetterControls
                        disableNextLetter={disableNextLetter}
                        disableReset={disableReset}
                        onNextLetterClick={onNextLetterClick}
                        onResetClick={onResetClick}
                    />
                </>
            )}
            subtitle={subtitle}
            title={CARD_TITLE}
            type={CARD_TYPE}
        />
    );
};
