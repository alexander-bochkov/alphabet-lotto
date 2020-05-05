import React, {Component, ReactText, RefObject} from 'react';

import {Icon} from './components/icon';
import {Item} from './components/item';
import {List} from './components/list';
import {Value} from './components/value';

import {composeClassName} from '../../../utils';

import './dropdown.scss';

const DROPDOWN_FONT = '14px Arial';

type DropdownProps = {
    items: Array<string | number>,
    value?: string | number,
    onChange: (nextValue: ReactText) => void
};

type DropdownState = {
    value: string | number,
    expanded: boolean
};

export class Dropdown extends Component<DropdownProps, DropdownState> {
    selfRef: RefObject<HTMLDivElement>;

    static defaultProps = {
        value: ''
    };

    constructor(props: DropdownProps) {
        super(props);
        this.selfRef = React.createRef();
        this.state = {
            value: '',
            expanded: false
        };
    }

    static getDerivedStateFromProps(props: DropdownProps, state: DropdownState) {
        if (!state.value && props.value) return {value: props.value};
        return null;
    }

    componentDidMount() {
        window.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleOutsideClick);
    }

    handleOutsideClick = ({clientX, clientY}: MouseEvent): void => {
        const {expanded} = this.state;
        const dropdown = this.selfRef.current;
        const {
            bottom,
            left,
            right,
            top
        } = dropdown.getBoundingClientRect();

        if (expanded && (clientX > right || clientX < left || clientY > bottom || clientY < top)) {
            this.setState({expanded: false});
        }
    };

    handleDropdownExpand = (): void => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    };

    handleValueChange = (nextValue: ReactText): void => {
        const {onChange} = this.props;
        const {value} = this.state;

        if (value !== nextValue) {
            this.setState({
                value: nextValue
            });
            onChange(nextValue);
        }
    };

    getLongestItemWidth = (items: Array<string | number>): number => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = DROPDOWN_FONT;
        const longestItem = this.getLongestItem(items);
        const longestItemWidth = Math.ceil(context.measureText(longestItem).width) + 1;
        return longestItemWidth;
    }

    getLongestItem = (items: Array<string | number>) => {
        const itemsToString = items.map((item: string | number): string => {
            if (typeof item === 'number') return item.toString();
            return item;
        });
        itemsToString.sort((itemA: string, itemB: string): number => {
            const lengthA = itemA.length;
            const lengthB = itemB.length;
            if (lengthA > lengthB) return -1;
            if (lengthA < lengthB) return 1;
            return 0;
        });
        const longestItem = itemsToString[0];
        return longestItem;
    }

    getDropdownWidth = (): number => {
        const dropdown = this.selfRef.current;
        const {width} = dropdown.getBoundingClientRect();
        return width;
    }

    render() {
        const {items} = this.props;
        const {value, expanded} = this.state;

        return (
            <div
                className={composeClassName('dropdown')}
                ref={this.selfRef}
                role="button"
                tabIndex={-1}
                onClick={this.handleDropdownExpand}
                onKeyDown={e => e.preventDefault()}
            >
                <Value width={this.getLongestItemWidth(items)}>
                    {value}
                </Value>


                <div className={composeClassName('dropdown__separator')} />
                <Icon expanded={expanded} />

                {expanded && (
                    <List width={this.getDropdownWidth()}>
                        {items.map(item => (
                            <Item
                                item={item}
                                key={item}
                                onClick={this.handleValueChange}
                            />
                        ))}
                    </List>
                )}
            </div>
        );
    }
}
