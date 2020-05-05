import React, {ReactNode} from 'react';
import {composeClassName} from '../../../utils';

export const Header = ({children}: {
    children: ReactNode
}) => (
    <div className={composeClassName('menu__header')}>
        {children}
    </div>
);
