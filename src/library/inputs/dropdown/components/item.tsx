import React, {ReactText} from 'react';
import {composeClassName} from '../../../../utils';

type ItemProps = {
    item: ReactText,
    onClick: (nextValue: ReactText) => void;
};

export const Item = ({
    item,
    onClick
}: ItemProps) => (
    <div
        className={composeClassName('dropdown__item')}
        role="button"
        tabIndex={-1}
        onClick={() => onClick(item)}
        onKeyDown={e => e.preventDefault()}
    >
        {item}
    </div>
);
