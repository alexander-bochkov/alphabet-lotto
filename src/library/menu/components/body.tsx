import React, {ReactNode} from 'react';
import {composeClassName} from '../../../utils';

export const Body = ({
    fullWidth,
    children
}: {
    fullWidth: boolean,
    children: ReactNode
}) => (
    <div className={composeClassName('menu__body', {
        'menu__body--full-width': fullWidth
    })}
    >
        {children}
    </div>
);
