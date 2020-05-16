import React from 'react';
import {radios, text, withKnobs} from '@storybook/addon-knobs';

import {Card} from '../card';

export default {
    title: 'Card',
    decorators: [withKnobs]
};

const Content = () => (
    <div
        style={{
            textAlign: 'center',
            width: '100%'
        }}
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante est, finibus vitae lorem sed,
        lacinia porttitor lectus.
    </div>
);

export const Common = () => (
    <Card
        content={<Content />}
        subtitle={text('Subtitle', 'Card subtitle')}
        title={text('Title', 'Card title')}
        type={radios('Type', Card.TYPE, Card.TYPE.SQUARE)}
    />
);
