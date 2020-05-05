import React from 'react';
import {Section} from './section';
import {Title} from './title';
import {composeClassName} from '../../../utils';

export const Card = ({card}: {card: Array<any>}) => (
    <div className={composeClassName('game-cards__card')}>
        <Title />
        <div className={composeClassName('game-cards__sections-layout')}>
            {/* eslint-disable-next-line react/no-array-index-key */}
            {card.map((section, index) => <Section section={section} sectionNumber={index} key={index} />)}
        </div>
    </div>
);
