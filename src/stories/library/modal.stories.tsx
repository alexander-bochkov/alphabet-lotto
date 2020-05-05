import React, {useState} from 'react';
import {Modal} from '../../library';

export default {title: 'Modal'};

const ModalWrapper = () => {
    const [displayModal, setDisplayModal] = useState(false);

    return (
        <>
            <button type="button" onClick={() => setDisplayModal(true)}>Show modal</button>
            {displayModal && (
                <Modal onModalClose={() => setDisplayModal(false)}>Test content</Modal>
            )}
        </>

    );
};

export const common = () => <ModalWrapper />;
