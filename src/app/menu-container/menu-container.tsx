import React from 'react';
import {Icons, Menu} from '../../library';
import {noop} from '../../utils';
import {Alphabet} from '../../data';

type MenuContainerProps = {
    alphabets: Array<Alphabet>,
    currentAlphabet?: Alphabet,
    displayModal?: boolean,
    displayPreviousLettersCard?: boolean,
    displayTranscriptionCard?: boolean,
    onCurrentAlphabetChange?: (alphabetId: number) => void,
    onModalOpen?: () => void,
    onPreviousLettersCardDisplay?: (display: boolean) => void,
    onTranscriptionCardDisplay?: (display: boolean) => void
}

export const MenuContainer = ({
    alphabets,
    currentAlphabet,
    displayModal,
    displayPreviousLettersCard,
    displayTranscriptionCard,
    onCurrentAlphabetChange,
    onModalOpen,
    onPreviousLettersCardDisplay,
    onTranscriptionCardDisplay
}: MenuContainerProps) => {
    const dropdownItems = alphabets.map(({fullName}, index) => ({
        id: index,
        title: fullName
    }));
    const currentAlphabetShortName = currentAlphabet ? currentAlphabet.shortName : null;
    const menuItems = [{
        dropdown: {
            callback: onCurrentAlphabetChange,
            items: dropdownItems
        },
        icon: <Icons.LanguageD lang={currentAlphabetShortName} />,
        id: 0,
        title: 'Choose alphabet'
    }, {
        callback: () => onTranscriptionCardDisplay(!displayTranscriptionCard),
        checkbox: {
            checked: displayTranscriptionCard
        },
        icon: <Icons.Transcription />,
        id: 1,
        title: 'Transcription'
    }, {
        callback: () => onPreviousLettersCardDisplay(!displayPreviousLettersCard),
        checkbox: {
            checked: displayPreviousLettersCard
        },
        icon: <Icons.Letter />,
        id: 2,
        title: 'Previous letters'
    }, {
        callback: onModalOpen,
        icon: <Icons.Printer />,
        id: 3,
        title: 'Print game cards'
    }];

    return (
        <Menu
            displayModal={displayModal}
            items={menuItems}
        />
    );
};

MenuContainer.defaultProps = {
    currentAlphabet: null,
    displayModal: false,
    displayPreviousLettersCard: true,
    displayTranscriptionCard: false,
    onCurrentAlphabetChange: noop,
    onModalOpen: noop,
    onPreviousLettersCardDisplay: noop,
    onTranscriptionCardDisplay: noop
};
