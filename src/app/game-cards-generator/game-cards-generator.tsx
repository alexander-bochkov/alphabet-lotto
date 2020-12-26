import {Component, ReactNode} from 'react';
import {createGameCards} from './create-game-cards';
import {Alphabet} from '../../data';

const DEFAULT_ALPHABET = 'English';
const DEFAULT_PAGES_QUANTITY = 1;

const PAGES_QUANTITY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        const gameCards = createGameCards(alphabetToGenerate, printPagesQuantity);
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
