import {Component, ReactNode} from 'react';

type CardsLayoutControllerProps = {
    render: (renderProps: any) => ReactNode
};

type CardsLayoutControllerState = {
    displayPreviousLettersCard: boolean,
    displayTranscriptionCard: boolean
};

export class CardsLayoutController extends Component<CardsLayoutControllerProps, CardsLayoutControllerState> {
    constructor(props: CardsLayoutControllerProps) {
        super(props);
        this.state = {
            displayPreviousLettersCard: true,
            displayTranscriptionCard: false
        };
    }

    handlePreviousLettersCardDisplay = (display: boolean) => {
        this.setState({
            displayPreviousLettersCard: display
        });
    };

    handleTranscriptionCardDisplay = (display: boolean) => {
        this.setState({
            displayTranscriptionCard: display
        });
    };

    render() {
        const {render} = this.props;
        const {displayPreviousLettersCard, displayTranscriptionCard} = this.state;

        return (
            render({
                displayPreviousLettersCard,
                displayTranscriptionCard,
                onPreviousLettersCardDisplay: this.handlePreviousLettersCardDisplay,
                onTranscriptionCardDisplay: this.handleTranscriptionCardDisplay
            })
        );
    }
}
