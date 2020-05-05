import React from 'react';

import {PreviousLettersCard} from './previous-letters-card';
import {PrintCard} from './print-card';
import {RandomLetterCard} from './random-letter-card';
import {TranscriptionCard} from './transcription-card';

import {GameCards} from '../library';

import {MenuContainer} from './menu-container';

import {AlphabetController} from './alphabet-controller';
import {CardsLayoutController} from './cards-layout-controller';
import {ModalController} from './modal-controller';

import {GameCardGenerator} from './game-cards-generator';
import {RandomLetterGenerator} from './random-letter-generator';

import {CardsLayout} from './cards-layout';

import {PrintModal} from './print-modal';

export const App = () => (
    <ModalController
        render={({
            displayModal,
            onModalClose,
            onModalOpen
        }) => (
            <AlphabetController
                render={({
                    alphabets,
                    currentAlphabet,
                    onCurrentAlphabetChange
                }) => (
                    <>
                        <GameCardGenerator
                            alphabets={alphabets}
                            render={(({
                                alphabetDropdownItems,
                                gameCards,
                                pagesQuantityDropdownItems,
                                printAlphabet,
                                printPagesQuantity,
                                onAlphabetDropdownChange,
                                onPrint,
                                onQuantityDropdownChange
                            }) => (
                                <>
                                    <GameCards
                                        cards={gameCards}
                                    />
                                    <PrintModal
                                        displayModal={displayModal}
                                        onModalClose={onModalClose}
                                    >
                                        <PrintCard
                                            alphabetDropdownItems={alphabetDropdownItems}
                                            pagesQuantityDropdownItems={pagesQuantityDropdownItems}
                                            printAlphabet={printAlphabet}
                                            printPagesQuantity={printPagesQuantity}
                                            onAlphabetDropdownChange={onAlphabetDropdownChange}
                                            onPrint={onPrint}
                                            onQuantityDropdownChange={onQuantityDropdownChange}
                                        />
                                    </PrintModal>
                                </>
                            ))}
                        />
                        <CardsLayoutController
                            render={({
                                displayPreviousLettersCard,
                                displayTranscriptionCard,
                                onPreviousLettersCardDisplay,
                                onTranscriptionCardDisplay
                            }) => (
                                <>
                                    <MenuContainer
                                        alphabets={alphabets}
                                        currentAlphabet={currentAlphabet}
                                        displayModal={displayModal}
                                        displayPreviousLettersCard={displayPreviousLettersCard}
                                        displayTranscriptionCard={displayTranscriptionCard}
                                        onCurrentAlphabetChange={onCurrentAlphabetChange}
                                        onModalOpen={onModalOpen}
                                        onPreviousLettersCardDisplay={onPreviousLettersCardDisplay}
                                        onTranscriptionCardDisplay={onTranscriptionCardDisplay}
                                    />
                                    <RandomLetterGenerator
                                        currentAlphabet={currentAlphabet}
                                        displayModal={displayModal}
                                        render={({
                                            currentLetter,
                                            previousLetters,
                                            onNextLetterClick,
                                            onResetClick
                                        }) => (
                                            <CardsLayout
                                                displayPreviousLettersCard={displayPreviousLettersCard}
                                                displayTranscriptionCard={displayTranscriptionCard}
                                                previousLettersCard={(
                                                    <PreviousLettersCard
                                                        previousLetters={previousLetters}
                                                    />
                                                )}
                                                randomLetterCard={(
                                                    <RandomLetterCard
                                                        currentAlphabet={currentAlphabet}
                                                        currentLetter={currentLetter}
                                                        previousLetters={previousLetters}
                                                        onNextLetterClick={onNextLetterClick}
                                                        onResetClick={onResetClick}
                                                    />
                                                )}
                                                transcriptionCard={(
                                                    <TranscriptionCard
                                                        currentLetter={currentLetter}
                                                    />
                                                )}
                                            />
                                        )}
                                    />
                                </>
                            )}
                        />
                    </>
                )}
            />
        )}
    />
);
