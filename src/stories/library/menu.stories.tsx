import React, {Component, CSSProperties} from 'react';
import {Icons, Menu} from '../../library';

class MenuWrapper extends Component<any, any> {
    langs = [
        {
            fullName: 'English',
            shortName: 'EN'
        },
        {
            fullName: 'Deutsch',
            shortName: 'DE'
        },
        {
            fullName: 'Français',
            shortName: 'FR'
        }
    ];

    constructor(props) {
        super(props);
        this.state = {
            displayModal: false,
            lang: this.langs[0].shortName,
            previousLettersChecked: true,
            transcriptionChecked: false
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleEscKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscKeyDown);
    }

    handleEscKeyDown = ({keyCode}) => {
        const {displayModal} = this.state;
        if (displayModal && (keyCode === 27)) {
            this.setState({
                displayModal: false
            });
        }
    };

    handleItemClick = (id: number): void => {
        if (id === 1) {
            this.setState(prevState => ({
                transcriptionChecked: !prevState.transcriptionChecked
            }));
        }

        if (id === 2) {
            this.setState(prevState => ({
                previousLettersChecked: !prevState.previousLettersChecked
            }));
        }

        if (id === 3) {
            this.setState({
                displayModal: true
            });
        }
    }

    handleDropdownClick = (id: number): void => {
        this.setState({
            lang: this.langs[id].shortName
        });
    };

    render() {
        const {
            displayModal,
            lang,
            previousLettersChecked,
            transcriptionChecked
        } = this.state;

        const items = [
            {
                dropdown: {
                    callback: this.handleDropdownClick,
                    items: this.langs.map(({fullName}, index) => ({
                        id: index,
                        title: fullName
                    }))
                },
                icon: <Icons.LanguageD lang={lang} />,
                id: 0,
                title: 'Choose alphabet'

            },
            {
                callback: this.handleItemClick,
                checkbox: {
                    checked: transcriptionChecked
                },
                icon: <Icons.Transcription />,
                id: 1,
                title: 'Transcription'
            },
            {
                callback: this.handleItemClick,
                checkbox: {
                    checked: previousLettersChecked
                },
                icon: <Icons.Letter />,
                id: 2,
                title: 'Previous letters'
            },
            {
                callback: this.handleItemClick,
                icon: <Icons.Printer />,
                id: 3,
                title: 'Print game cards'
            },
            {
                id: 4,
                title: 'Test menu item'
            }
        ];

        const customModalStyle: CSSProperties = {
            background: 'rgba(0, 0, 0, 0.25)',
            bottom: '0',
            left: '0',
            position: 'absolute',
            right: '0',
            top: '0'
        };

        return (
            <>
                <Menu
                    displayModal={displayModal}
                    items={items}
                />
                {displayModal && <div style={customModalStyle} />}
            </>
        );
    }
}

export default {title: 'Menu'};

export const common = () => <MenuWrapper />;
