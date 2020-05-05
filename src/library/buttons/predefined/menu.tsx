import React, {MouseEvent} from 'react';
import {composeClassName} from '../../../utils';

export const Menu = ({
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
            className={composeClassName('buttons buttons__menu')}
            style={disabled ? {
                cursor: 'default',
                stroke: 'rgba(183, 183, 183, 0.8)'
            } : {}}
            type="button"
            onClick={onClick}
            onMouseDown={handleMouseDown}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3.00003 12H21"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.00003 6H21"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.00003 18H21"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

Menu.defaultProps = {
    disabled: false
};
