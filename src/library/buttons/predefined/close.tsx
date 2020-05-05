import React, {MouseEvent} from 'react';
import {composeClassName} from '../../../utils';

export const Close = ({
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
            className={composeClassName('buttons buttons__close')}
            style={disabled ? {
                cursor: 'default',
                stroke: 'rgba(183, 183, 183, 0.8)'
            } : {}}
            type="button"
            onClick={onClick}
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
                    d="M30 10L10 30"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 10L30 30"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

Close.defaultProps = {
    disabled: false
};
