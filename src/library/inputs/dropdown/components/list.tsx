import React, {ReactNode} from 'react';
import {composeClassName} from '../../../../utils';

type ListProps = {
    children: ReactNode,
    width: number
};

export const List = ({
    children,
    width
}: ListProps) => (
    <div
        className={composeClassName('dropdown__list')}
        style={{width}}
    >
        {children}
    </div>
);
