import React, {ReactNode} from 'react';
import {Buttons} from '../buttons';
import {Row} from './components/row';
import {composeClassName} from '../../utils';
import './print.scss';

type PrintProps = {
    alphabetDropdown: ReactNode,
    quantityDropdown: ReactNode,
    onPrint: () => void
};

export const Print = ({
    alphabetDropdown,
    quantityDropdown,
    onPrint
}: PrintProps) => (
    <div className={composeClassName('print')}>
        <Row title="Alphabet:" dropdown={alphabetDropdown} />
        <Row title="Quantity:" dropdown={quantityDropdown} />
        <div className={composeClassName('print__print-button-layout')}>
            <Buttons.Print onClick={onPrint} />
        </div>
    </div>
);
