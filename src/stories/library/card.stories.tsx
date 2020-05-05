import React from 'react';
import {Card} from '../../library';

export default {title: 'Card'};

export const square = () => (
    <Card
        content=""
        title=""
        type="square"
    />
);
export const rect = () => (
    <Card
        content=""
        title=""
        type="rect"
    />
);
export const rectLarge = () => (
    <Card
        content=""
        title=""
        type="rect-large"
    />
);

export const withTitleAndSubTitleAndContent = () => (
    <Card
        content="Test content"
        subtitle="Test subtitle"
        title="Test title"
        type="square"
    />
);
