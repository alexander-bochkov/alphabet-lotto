import React, {ReactNode} from 'react';

import {Body} from './components/body';
import {Header} from './components/header';
import {Subtitle} from './components/subtitle';
import {Title} from './components/title';

import {composeClassName} from '../../utils';

import './card.scss';

type CardProps = {
    content: ReactNode,
    subtitle?: string,
    title: string,
    type: string
};

export const Card = ({
    content,
    subtitle,
    title,
    type
}: CardProps) => (
    <div className={composeClassName(`card card--${type}`)}>
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

Card.defaultProps = {
    subtitle: null
};
