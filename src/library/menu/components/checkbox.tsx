import React from 'react';
import {Icons} from '../../';
import {composeClassName} from '../../../utils';
import {CheckboxType} from '../menu';

type CheckboxProps = CheckboxType;

export const Checkbox = ({checked}: CheckboxProps) => (
    <div className={composeClassName('menu__checkbox')}>
        {checked ? <Icons.Check /> : <Icons.Uncheck />}
    </div>
);
