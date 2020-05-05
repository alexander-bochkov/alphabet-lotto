import React, {MouseEvent} from 'react';
import {composeClassName, noop} from '../../../utils';

export const Reset = ({
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
            className={composeClassName('buttons buttons__reset')}
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
                    d="M20 36.6667C29.2048 36.6667 36.6667 29.2048 36.6667
                    20C36.6667 10.7953 29.2048 3.33334 20 3.33334C10.7953 3.33334
                    3.33334 10.7953 3.33334 20C3.33334 29.2048 10.7953 36.6667
                    20 36.6667Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M25 15L15 25"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15 15L25 25"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

Reset.defaultProps = {
    disabled: false
};
