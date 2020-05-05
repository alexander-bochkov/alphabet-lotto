import React, {ReactNode} from 'react';
import {composeClassName} from '../../../../utils';

export const Value = ({
    children,
    width
}: {
    children: ReactNode,
    width: number
}) => (
    <div
        className={composeClassName('dropdown__value')}
        style={{
            width
        }}
    >
        {children}
    </div>
);
