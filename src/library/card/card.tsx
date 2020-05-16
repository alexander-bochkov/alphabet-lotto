import React, {ReactNode} from 'react';

import {Body} from './components/body';
import {Header} from './components/header';
import {Subtitle} from './components/subtitle';
import {Title} from './components/title';

import {composeClassName} from '../../utils';

import './card.scss';

enum TYPE {
    LARGE_RECT= 'LARGE_RECT',
    RECT = 'RECT',
    SQUARE = 'SQUARE'
}

export const Card = ({
    content,
    subtitle = null,
    title,
    type
}: {
    content: ReactNode,
    subtitle?: string,
    title: string,
    type: keyof typeof TYPE
}): JSX.Element => {
    const hasType = (typeToCheck: keyof typeof TYPE): boolean => typeToCheck === type;

    return (
        <div
            className={composeClassName('card', {
                'card--large-rect': hasType(TYPE.LARGE_RECT),
                'card--rect': hasType(TYPE.RECT),
                'card--square': hasType(TYPE.SQUARE)
            })}
        >
            <Header>
                <Title>
                    {title}
                </Title>
                {subtitle && (
                    <Subtitle>
                        {subtitle}
                    </Subtitle>
                )}
            </Header>
            <Body>
                {content}
            </Body>
        </div>
    );
};

Card.TYPE = TYPE;
