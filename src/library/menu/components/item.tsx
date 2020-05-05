import React, {Component, RefObject} from 'react';
import ReactDOM from 'react-dom';

import {Checkbox} from './checkbox';
import {Dropdown} from './dropdown';

import {Icons} from '../../icons';

import {composeClassName, noop} from '../../../utils';

import {ItemType} from '../menu';

type ItemProps = ItemType & {
    small?: boolean,
    onDropdownOpen?: (opened: boolean) => void
};

type ItemState = {
    dropdownPosY: number,
    hovered: boolean
};

export class Item extends Component<ItemProps, ItemState> {
    selfRef: RefObject<HTMLDivElement>;

    static defaultProps = {
        callback: noop,
        checkbox: null,
        dropdown: null,
        icon: null,
        small: false,
        onDropdownOpen: noop
    }

    constructor(props) {
        super(props);
        this.selfRef = React.createRef();
        this.state = {
            dropdownPosY: null,
            hovered: false
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleEscKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscKeyDown);
    }

    handleMouseEnter = (): void => {
        this.setState({
            hovered: true
        });

        const {dropdown, onDropdownOpen} = this.props;
        if (dropdown) {
            const item = this.selfRef.current;
            const itemTopCoord = item.getBoundingClientRect().top;
            this.setState({
                dropdownPosY: itemTopCoord
            });
            onDropdownOpen(true);
        }
    };

    handleMouseLeave = (): void => {
        const {onDropdownOpen} = this.props;
        this.setState({
            dropdownPosY: null,
            hovered: false
        });
        onDropdownOpen(false);
    };

    handleEscKeyDown = ({keyCode}: KeyboardEvent): void => {
        const {dropdown} = this.props;
        const {hovered} = this.state;
        if (dropdown && hovered && (keyCode === 27)) {
            this.handleMouseLeave();
        }
    };

    renderActionIcon = () => {
        const {checkbox, dropdown} = this.props;
        if (checkbox) return <Checkbox checked={checkbox.checked} />;
        if (dropdown) {
            return (
                <div className="menu__chevron-layout">
                    <Icons.ChevronRight />
                </div>
            );
        }
        return null;
    };

    render() {
        const {
            callback,
            dropdown,
            icon,
            id,
            small,
            title
        } = this.props;
        const {dropdownPosY, hovered} = this.state;

        return (
            <div
                className={composeClassName('menu__item', {
                    'menu__item--hovered': hovered,
                    'menu__item--small': small
                })}
                ref={this.selfRef}
                role="menuitem"
                tabIndex={-1}
                onClick={() => callback(id)}
                onKeyDown={noop}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                {icon && (
                    <div className="menu__icon-layout">
                        {icon}
                    </div>
                )}
                {title}
                <div className="menu__action-icon-layout">
                    {this.renderActionIcon()}
                </div>
                {dropdown && hovered && (
                    ReactDOM.createPortal((
                        <div className="menu__dropdown-layout" style={{top: `${dropdownPosY}px`}}>
                            <Dropdown
                                callback={dropdown.callback}
                                items={dropdown.items}
                            />
                        </div>
                    ), document.querySelector('.menu__dropdown-container'))
                )}
            </div>
        );
    }
}
