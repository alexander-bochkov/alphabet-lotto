import React from 'react';
import {Icons} from '../../../icons';
import {composeClassName} from '../../../../utils';

export const Icon = ({expanded}: {expanded: boolean}) => (
    <div
        className={composeClassName('dropdown__icon', {
            'dropdown__icon--expanded': expanded
        })}
    >
        {expanded ? <Icons.ChevronDownLight /> : <Icons.ChevronDownDark />}
    </div>
);
