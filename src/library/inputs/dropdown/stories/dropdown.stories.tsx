import React, {Component} from 'react';
import {Dropdown} from '../';
import {noop} from '../../../../utils';

export default {title: 'Dropdown'};

const DEFAULT_PAGE_QUANTITY = 1;

class DropdownContainer extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentAlphabet: null,
            currentPageQuantity: DEFAULT_PAGE_QUANTITY
        };
    }

    handleAlphabetDropdownChange = (nextValue: string | number) => {
        this.setState({
            currentAlphabet: nextValue
        });
    };

    handlePageQuantityChange = (nextValue: string | number) => {
        this.setState({
            currentPageQuantity: nextValue
        });
    };

    render() {
        const {currentAlphabet, currentPageQuantity} = this.state;

        const alphabets = ['English', 'Deutsch', 'Français'];
        const pageQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        return (
            <>
                <div>
                    <Dropdown
                        items={alphabets}
                        onChange={this.handleAlphabetDropdownChange}
                    />
                    {currentAlphabet}
                </div>
                <br />
                <div>
                    <Dropdown
                        value={currentPageQuantity}
                        items={pageQuantity}
                        onChange={this.handlePageQuantityChange}
                    />
                    {currentPageQuantity}
                </div>
            </>
        );
    }
}

export const common = () => <DropdownContainer />;

export const autoWidth = () => {
    const items = ['Small text', 'Very very long text', 1000];

    return (
        <Dropdown
            items={items}
            onChange={noop}
        />
    );
};
