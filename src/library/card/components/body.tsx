import React, {ReactNode} from 'react';
import {composeClassName} from '../../../utils';

export const Body = ({
    children
}: {
    children: ReactNode
}): JSX.Element => (
    <div className={composeClassName('card__body')}>
        {children}
    </div>
);
