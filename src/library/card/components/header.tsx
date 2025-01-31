import React, {ReactNode} from 'react';
import {composeClassName} from '../../../utils';

export const Header = ({
    children
}: {
    children: ReactNode
}): JSX.Element => (
    <div className={composeClassName('card__header')}>
        {children}
    </div>
);
