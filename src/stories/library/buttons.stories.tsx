import React from 'react';
import {Buttons} from '../../library/buttons';

const buttonsContainerStyles = {
    background: 'gray',
    height: '100%'
};

const ButtonsContainer = () => (
    <div style={buttonsContainerStyles}>
        <Buttons.Close onClick={() => {}} />
        <Buttons.Menu onClick={() => {}} />
        <Buttons.NextLetter onClick={() => {}} />
        <Buttons.Print onClick={() => {}} />
        <Buttons.Reset onClick={() => {}} />
    </div>
);

export default {title: 'Buttons'};

export const allButtons = () => <ButtonsContainer />;
