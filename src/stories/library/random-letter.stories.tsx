import React from 'react';
import {RandomLetter} from '../../library';

export default {title: 'RandomLetter'};

export const vowel = () => <RandomLetter character="A" type="vowel" />;
export const consonant = () => <RandomLetter character="G" type="consonant" />;
