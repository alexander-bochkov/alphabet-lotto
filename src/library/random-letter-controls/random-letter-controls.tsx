import React from 'react';
import {Buttons} from '../buttons';
import {composeClassName} from '../../utils';
import './random-letter-controls.scss';

type RandomLetterControlsProps = {
    disableNextLetter?: boolean,
    disableReset?: boolean,
    onNextLetterClick: () => void,
    onResetClick: () => void
}

export const RandomLetterControls = ({
    disableNextLetter,
    disableReset,
    onNextLetterClick,
    onResetClick
}: RandomLetterControlsProps) => (
    <div className={composeClassName('random-letter-controls')}>
        <div className={composeClassName('random-letter-controls__next-letter-layout')}>
            <Buttons.NextLetter
                disabled={disableNextLetter}
                onClick={onNextLetterClick}
            />
        </div>
        <div className={composeClassName('random-letter-controls__reset-layout')}>
            <Buttons.Reset
                disabled={disableReset}
                onClick={onResetClick}
            />
        </div>
    </div>
);

RandomLetterControls.defaultProps = {
    disableNextLetter: false,
    disableReset: false
};
