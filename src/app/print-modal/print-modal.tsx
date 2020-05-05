import React, {ReactNode} from 'react';
import {Modal} from '../../library';

export const PrintModal = ({
    children,
    displayModal,
    onModalClose
}: {
    children: ReactNode,
    displayModal?: boolean,
    onModalClose: () => void,
}) => displayModal && <Modal onModalClose={onModalClose}>{children}</Modal>;

PrintModal.defaultProps = {
    displayModal: false
};
