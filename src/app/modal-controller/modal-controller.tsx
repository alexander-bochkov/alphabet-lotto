import {Component, ReactNode} from 'react';

type ModalControllerProps= {
    render: (renderProps: any) => ReactNode
};

type ModalContainerState = {
    displayModal: boolean
}

export class ModalController extends Component<ModalControllerProps, ModalContainerState> {
    constructor(props: ModalControllerProps) {
        super(props);
        this.state = {
            displayModal: false
        };
    }

    handleModalOpen = () => {
        this.setState({
            displayModal: true
        });
    }

    handleModalClose = () => {
        this.setState({
            displayModal: false
        });
    }

    render() {
        const {render} = this.props;
        const {displayModal} = this.state;
        return (
            render({
                displayModal,
                onModalClose: this.handleModalClose,
                onModalOpen: this.handleModalOpen
            })
        );
    }
}
