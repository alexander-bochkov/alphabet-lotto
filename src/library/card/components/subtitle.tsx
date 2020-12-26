import React, {ReactNode} from 'react';
import {composeClassName} from '../../../utils';

export const Subtitle = ({
    children
}: {
    children: ReactNode
}): JSX.Element => (
    <div className={composeClassName('card__subtitle')}>
        {children}
    </div>
);
