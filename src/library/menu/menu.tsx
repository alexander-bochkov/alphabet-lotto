import React, {Component, RefObject, ReactNode} from 'react';

import {Body} from './components/body';
import {Header} from './components/header';
import {Item} from './components/item';

import {Buttons} from '../buttons';

import {composeClassName} from '../../utils';

import './menu.scss';

export type CheckboxType = {
    checked: boolean
};

export type DropdownType = {
    callback: (id: number) => void,
    items: Array<{
        id: number,
        title: string
    }>
}

export type ItemType = {
    callback?: (id: number) => void,
    checkbox?: CheckboxType,
    dropdown?: DropdownType,
    icon?: ReactNode,
    id: number,
    title: string
};

type MenuProps = {
    displayModal?: boolean,
    items: Array<ItemType>
};

type MenuState = {
    displayDropdown: boolean,
    opened: boolean
};

export class Menu extends Component<MenuProps, MenuState> {
    selfRef: RefObject<HTMLDivElement>;

    static defaultProps = {
        displayModal: false
    };

    constructor(props: MenuProps) {
        super(props);
        this.selfRef = React.createRef();
        this.state = {
            displayDropdown: false,
            opened: false
        };
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
        window.addEventListener('keydown', this.handleEscKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
        window.removeEventListener('keydown', this.handleEscKeyDown);
    }

    handleOutsideClick = ({clientX}: MouseEvent): void => {
        const menu = this.selfRef.current;
        const menuRightCoord = menu.getBoundingClientRect().right;
        const {displayDropdown, opened} = this.state;
        const {displayModal} = this.props;

        if (opened
            && !displayModal
            && !displayDropdown
            && (clientX > menuRightCoord)) {
            this.setState({opened: false});
        }
    };

    handleEscKeyDown = ({keyCode}: KeyboardEvent): void => {
        const {displayModal} = this.props;
        if (!displayModal && (keyCode === 27)) {
            this.setState(prevState => ({
                opened: !prevState.opened
            }));
        }
    };

    handleMenuButtonClick = (): void => {
        this.setState(prevState => ({
            opened: !prevState.opened
        }));
    };

    handleDropdownOpen = (opened: boolean): void => {
        this.setState({
            displayDropdown: opened
        });
    };

    render() {
        const {items} = this.props;
        const {opened} = this.state;

        return (
            <>
                <div
                    className={composeClassName('menu', {
                        'menu--opened': opened
                    })}
                    ref={this.selfRef}
                >
                    <Header>
                        <Buttons.Menu
                            onClick={this.handleMenuButtonClick}
                        />
                    </Header>
                    <Body fullWidth={opened}>
                        {items.map(({
                            callback,
                            checkbox,
                            dropdown,
                            icon,
                            id,
                            title
                        }) => (
                            <Item
                                callback={callback}
                                checkbox={checkbox}
                                dropdown={dropdown}
                                icon={icon}
                                id={id}
                                key={id}
                                title={title}
                                onDropdownOpen={this.handleDropdownOpen}
                            />
                        ))}
                    </Body>
                </div>
                <div className="menu__dropdown-container" />
            </>
        );
    }
}
