import React from 'react';
import {SectionTitle} from './section-title';
import {Table} from './table';
import {composeClassName} from '../../../utils';

export const Section = ({section, sectionNumber}: {section: Array<any>, sectionNumber: number}) => (
    <div className={composeClassName('game-cards__section')}>
        <SectionTitle sectionNumber={sectionNumber} />
        <div className={composeClassName('game-cards__tables-layout')}>
            {/* eslint-disable-next-line react/no-array-index-key */}
            {section.map((table, index) => <Table table={table} key={index} />)}
        </div>
    </div>
);
