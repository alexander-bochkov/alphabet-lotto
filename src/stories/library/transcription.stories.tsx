import React from 'react';
import {Transcription} from '../../library';

export default {title: 'Transcription'};

export const vowel = () => <Transcription transcription="ei" type="vowel" />;
export const consonant = () => <Transcription transcription="ʤi:" type="consonant" />;
