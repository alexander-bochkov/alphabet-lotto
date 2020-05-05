import {english, french, german} from './alphabets';

export type Letter = {
    character: string,
    transcription: string,
    type: string
};

export type Alphabet = {
    fullName: string,
    letters: Array<Letter>,
    shortName: string
};

export const alphabetsList: Array<Alphabet> = [
    english,
    german,
    french
];
