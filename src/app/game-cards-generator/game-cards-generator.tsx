import {Component, ReactNode} from 'react';
import {Alphabet, Letter} from '../../data';

const DEFAULT_ALPHABET = 'English';
const DEFAULT_PAGES_QUANTITY = 1;

const PAGES_QUANTITY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SECTIONS_QUANTITY = 3;
const TABLES_QUANTITY = 5;
const ROWS_QUANTITY = 3;
const CELLS_QUANTITY = 9;
const CELLS_WITH_LETTERS = 5;

type GameCardGeneratorProps = {
    alphabets: Array<Alphabet>,
    render: (renderProps: any) => ReactNode
};

type GameCardGeneratorState = {
    gameCards: Array<any>,
    printAlphabet: string,
    printPagesQuantity: number
};

export class GameCardGenerator extends Component<GameCardGeneratorProps, GameCardGeneratorState> {
    constructor(props: GameCardGeneratorProps) {
        super(props);
        this.state = {
            gameCards: null,
            printAlphabet: DEFAULT_ALPHABET,
            printPagesQuantity: DEFAULT_PAGES_QUANTITY
        };
    }

    handleAlphabetDropdownChange = (nextPrintAlphabet: string) => {
        this.setState({
            printAlphabet: nextPrintAlphabet
        });
    }

    handlePagesQuantityDropdownChange = (nextPrintPagesQuantity: number) => {
        this.setState({
            printPagesQuantity: nextPrintPagesQuantity
        });
    }

    handlePrintButtonClick = (): void => {
        const {alphabets} = this.props;
        const {printAlphabet, printPagesQuantity} = this.state;

        const [alphabetToGenerate] = alphabets.filter(({fullName}) => fullName === printAlphabet);
        const gameCards = generateGameCards(alphabetToGenerate, printPagesQuantity);
        this.setState({
            gameCards
        }, () => {
            window.print();
            this.clearGameCards();
        });
    };

    clearGameCards(): void {
        this.setState({
            gameCards: null
        });
    }

    render() {
        const {alphabets, render} = this.props;
        const {gameCards, printAlphabet, printPagesQuantity} = this.state;

        const alphabetDropdownItems = alphabets.map(({fullName}) => fullName);
        const pagesQuantityDropdownItems = PAGES_QUANTITY;

        return (
            render({
                alphabetDropdownItems,
                gameCards,
                pagesQuantityDropdownItems,
                printAlphabet,
                printPagesQuantity,
                onAlphabetDropdownChange: this.handleAlphabetDropdownChange,
                onPrint: this.handlePrintButtonClick,
                onQuantityDropdownChange: this.handlePagesQuantityDropdownChange
            })
        );
    }
}

function generateGameCards({letters}: Alphabet, quantity: number) {
    const gameCards = [];
    for (let gameCardIdx = 0; gameCardIdx < quantity; gameCardIdx++) {
        const sections = generateSections(letters);
        gameCards.push(sections);
    }
    return gameCards;
}

function generateSections(letters: Array<Letter>) {
    const sections = [];
    for (let sectionIdx = 0; sectionIdx < SECTIONS_QUANTITY; sectionIdx++) {
        const tables = generateTables(letters);
        sections.push(tables);
    }
    return sections;
}

function generateTables(letters: Array<Letter>) {
    const tables = [];
    for (let tableIdx = 0; tableIdx < TABLES_QUANTITY; tableIdx++) {
        const rows = generateRows(letters);
        tables.push(rows);
    }
    return tables;
}

function generateRows(letters: Array<Letter>) {
    const rows = [];
    for (let rowIdx = 0; rowIdx < ROWS_QUANTITY; rowIdx++) {
        const rowMatrix = generateMatrix();
        const row = rowMatrix.map(withLetter => {
            if (withLetter) {
                const randomLetterIdx = Math.floor(Math.random() * letters.length);
                const {character} = letters[randomLetterIdx];
                return character;
            }
            return '';
        });
        rows.push(row);
    }
    return rows;
}

function generateMatrix(): Array<boolean> {
    let matrix: Array<boolean> = [];
    for (let cellIdx = 0; cellIdx < CELLS_QUANTITY; cellIdx++) {
        const withLetter = Boolean(Math.floor(Math.random() * 2));
        matrix.push(withLetter);

        if (matrix.length === CELLS_QUANTITY) {
            const cellsWithLetters = matrix.filter(value => value === true);
            if (cellsWithLetters.length !== CELLS_WITH_LETTERS) {
                matrix = [];
                cellIdx = -1;
            }
        }
    }
    return matrix;
}
