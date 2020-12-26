import React, {ReactNode} from 'react';
import {composeClassName} from '../../../utils';

export const Title = ({
    children
}: {
    children: ReactNode
}): JSX.Element => (
    <div className={composeClassName('card__title')}>
        {children}
    </div>
);
