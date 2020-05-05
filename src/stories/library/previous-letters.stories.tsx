import React from 'react';
import {PreviousLetters} from '../../library';

const letters = [{
    character: 'A',
    transcription: '',
    type: 'vowel'
}, {
    character: 'B',
    transcription: '',
    type: 'consonant'
}, {
    character: 'C',
    transcription: '',
    type: 'consonant'
}, {
    character: 'D',
    transcription: '',
    type: 'consonant'
}, {
    character: 'E',
    transcription: '',
    type: 'vowel'
}, {
    character: 'F',
    transcription: '',
    type: 'consonant'
}, {
    character: 'G',
    transcription: '',
    type: 'consonant'
}];

export default {title: 'PreviousLetters'};

export const common = () => <PreviousLetters letters={letters} />;
