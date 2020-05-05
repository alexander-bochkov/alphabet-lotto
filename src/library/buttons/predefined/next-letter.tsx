import React, {MouseEvent} from 'react';
import {composeClassName, noop} from '../../../utils';

export const NextLetter = ({
    disabled,
    onClick
}: {
    disabled?: Boolean,
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}) => {
    const handleMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <button
            className={composeClassName('buttons buttons__next-letter')}
            style={disabled ? {
                cursor: 'default',
                stroke: 'rgba(183, 183, 183, 0.8)'
            } : {}}
            type="button"
            onClick={!disabled ? onClick : noop}
            onMouseDown={handleMouseDown}
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.33334 5L31.6667 20L8.33334 35V5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

NextLetter.defaultProps = {
    disabled: false
};
