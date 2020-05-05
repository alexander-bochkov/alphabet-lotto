import {Component, ReactNode} from 'react';
import {alphabetsList, Alphabet} from '../../data';

const DEFAULT_ALPHABET = 'English';

type AlphabetControllerProps = {
    render: (renderProps: any) => ReactNode
};

type AlphabetControllerState = {
    alphabets: Array<Alphabet>,
    currentAlphabet: Alphabet
}

export class AlphabetController extends Component<AlphabetControllerProps, AlphabetControllerState> {
    constructor(props: AlphabetControllerProps) {
        super(props);
        this.state = {
            alphabets: [],
            currentAlphabet: null
        };
    }

    componentDidMount() {
        const [defaultCurrentAlphabet] = alphabetsList.filter(({fullName}) => fullName === DEFAULT_ALPHABET);
        this.setState({
            alphabets: alphabetsList,
            currentAlphabet: defaultCurrentAlphabet
        });
    }

    handleCurrentAlphabetChange = (alphabetId: number): void => {
        const {alphabets} = this.state;
        const newCurrentAlphabet = alphabets[alphabetId];
        this.setState({
            currentAlphabet: newCurrentAlphabet
        });
    }

    render() {
        const {render} = this.props;
        const {alphabets, currentAlphabet} = this.state;
        return render({
            alphabets,
            currentAlphabet,
            onCurrentAlphabetChange: this.handleCurrentAlphabetChange
        });
    }
}
