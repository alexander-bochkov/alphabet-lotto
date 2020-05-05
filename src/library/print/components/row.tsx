import React, {ReactNode} from 'react';
import {composeClassName} from '../../../utils';

type RowProps = {
    dropdown: ReactNode,
    title: string
};

export const Row = ({
    dropdown,
    title
}: RowProps) => (
    <div className={composeClassName('print__row')}>
        {title}
        <div className={composeClassName('print__dropdown-layout')}>
            {dropdown}
        </div>
    </div>
);
