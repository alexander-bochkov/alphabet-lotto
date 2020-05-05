import React, {
    Component,
    MouseEvent,
    ReactNode,
    RefObject
} from 'react';

import {Buttons} from '../buttons';
import {composeClassName, noop} from '../../utils';
import './modal.scss';

type ModalProps = {
    children: ReactNode,
    onModalClose: () => void
};

export class Modal extends Component<ModalProps, any> {
    selfRef: RefObject<HTMLDivElement>;

    constructor(props: ModalProps) {
        super(props);
        this.selfRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleEscKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscKeyDown);
    }

    handleModalClose = (event: MouseEvent<HTMLButtonElement | HTMLDivElement>): void => {
        const {onModalClose} = this.props;
        event.nativeEvent.stopImmediatePropagation();
        onModalClose();
    };

    handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
        const {target} = event;
        const modal = this.selfRef.current;
        if (modal === target) this.handleModalClose(event);
    };

    handleEscKeyDown = ({keyCode}: KeyboardEvent): void => {
        if (keyCode === 27) {
            const {onModalClose} = this.props;
            onModalClose();
        }
    };

    render() {
        const {children} = this.props;

        return (
            <div
                className={composeClassName('modal')}
                ref={this.selfRef}
                role="button"
                tabIndex={-1}
                onClick={this.handleModalClick}
                onKeyDown={noop}
            >
                <div className={composeClassName('modal__close-button-layout')}>
                    <Buttons.Close onClick={this.handleModalClose} />
                </div>
                {children}
            </div>
        );
    }
}
