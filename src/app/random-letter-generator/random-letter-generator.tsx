import {Component, ReactNode} from 'react';
import {Alphabet, Letter} from '../../data';

type RandomLetterGeneratorStateProps = {
    currentAlphabet?: Alphabet,
    displayModal?: boolean,
    render: (renderProps: any) => ReactNode
};

type RandomLetterGeneratorState = {
    currentLetter: Letter,
    previousLetters: Array<Letter>
};

export class RandomLetterGenerator extends Component<RandomLetterGeneratorStateProps, RandomLetterGeneratorState> {
    static defaultProps = {
        currentAlphabet: null,
        displayModal: false
    };

    constructor(props: RandomLetterGeneratorStateProps) {
        super(props);
        this.state = {
            currentLetter: null,
            previousLetters: []
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleSpaceKeyDown);
        window.addEventListener('keydown', this.handleSpaceAndShiftKeyDown);
    }

    componentDidUpdate(prevProps: RandomLetterGeneratorStateProps) {
        const {currentAlphabet} = this.props;
        if (prevProps.currentAlphabet !== currentAlphabet) {
            this.clearState();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleSpaceKeyDown);
        window.removeEventListener('keydown', this.handleSpaceAndShiftKeyDown);
    }

    handleNextLetterClick = (): void => {
        const {currentAlphabet, displayModal} = this.props;
        const {currentLetter, previousLetters} = this.state;

        if (displayModal) return;

        const generatedLetters = [].concat((currentLetter || []), ...previousLetters);
        if (currentAlphabet.letters.length === generatedLetters.length) return;

        const nextLetter = generateNextLetter(currentAlphabet, generatedLetters);

        if (currentLetter) {
            const newPreviousLetters = previousLetters.slice();
            newPreviousLetters.push(currentLetter);

            this.setState({
                currentLetter: nextLetter,
                previousLetters: newPreviousLetters
            });
        } else {
            this.setState({
                currentLetter: nextLetter
            });
        }
    };

    handleResetClick = (): void => {
        const {displayModal} = this.props;
        if (displayModal) return;

        this.clearState();
    };

    handleSpaceKeyDown = ({keyCode, shiftKey}: KeyboardEvent) => {
        if (keyCode === 32 && !shiftKey) this.handleNextLetterClick();
    };

    handleSpaceAndShiftKeyDown = ({keyCode, shiftKey}: KeyboardEvent) => {
        if (keyCode === 32 && shiftKey) this.handleResetClick();
    };

    clearState(): void {
        this.setState({
            currentLetter: null,
            previousLetters: []
        });
    }

    render() {
        const {render} = this.props;
        const {currentLetter, previousLetters} = this.state;

        return (
            render({
                currentLetter,
                previousLetters,
                onNextLetterClick: this.handleNextLetterClick,
                onResetClick: this.handleResetClick
            })
        );
    }
}

function generateNextLetter({letters}: Alphabet, generatedLetters: Array<Letter>) {
    let nextLetterIdx: number;
    do {
        nextLetterIdx = Math.floor(Math.random() * letters.length);
    } while (hasAlreadyBeenGenerated(letters[nextLetterIdx]));

    return letters[nextLetterIdx];

    function hasAlreadyBeenGenerated(nextLetter: Letter) {
        return generatedLetters.some(({character}) => character === nextLetter.character);
    }
}
