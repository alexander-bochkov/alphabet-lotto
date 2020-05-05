import React from 'react';
import {Item} from './item';
import {DropdownType} from '../menu';
import {composeClassName} from '../../../utils';

type DropdownProps = DropdownType;

export const Dropdown = ({
    callback,
    items
}: DropdownProps) => (
    <div className={composeClassName('menu__dropdown')}>
        {items.map(({
            id,
            title
        }) => (
            <Item
                callback={callback}
                id={id}
                key={id}
                small
                title={title}
            />
        ))}
    </div>
);
