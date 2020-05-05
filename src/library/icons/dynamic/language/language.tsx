import React from 'react';
import {Language as PredefinedLanguage} from '../../predefined/language';
import './language.scss';

export const Language = ({lang}: {lang?: string}) => (
    <div className="icons__language">
        {lang || <PredefinedLanguage />}
    </div>
);

Language.defaultProps = {
    lang: null
};
