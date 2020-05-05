import React from 'react';
import {Dropdown, Print} from '../../library';
import {noop} from '../../utils';

export default {title: 'Print'};

const AlphabetDropdown = (
    <Dropdown
        items={['Test 1', 'Test 2', 'Test 3']}
        value="Test"
        onChange={noop}
    />
);

const quantityDropdown = (
    <Dropdown
        items={[1, 2, 3, 4, 5]}
        value={1}
        onChange={noop}
    />
);

export const common = () => (
    <Print
        alphabetDropdown={AlphabetDropdown}
        quantityDropdown={quantityDropdown}
        onPrint={noop}
    />
);
