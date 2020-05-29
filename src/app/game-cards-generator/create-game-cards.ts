import {Alphabet} from '../../data';
import {
    CELLS_WITH_LETTERS,
    CELLS,
    ROWS,
    SECTIONS,
    TABLES
} from './constants';

export function createGameCards({letters}: Alphabet, pages: number): Array<any> {
    const gameCards = [];
    for (let gameCardIdx = 0; gameCardIdx < pages; gameCardIdx++) {
        const sections = createSection();
        gameCards.push(sections);
    }
    return gameCards;

    function createSection(): Array<any> {
        const sections = [];
        for (let sectionIdx = 0; sectionIdx < SECTIONS; sectionIdx++) {
            const tables = createTables();
            sections.push(tables);
        }
        return sections;
    }

    function createTables(): Array<any> {
        const tables = [];
        for (let tableIdx = 0; tableIdx < TABLES; tableIdx++) {
            const rows = createRows();
            tables.push(rows);
        }
        return tables;
    }

    function createRows(): Array<any> {
        const rows = [];
        for (let rowIdx = 0; rowIdx < ROWS; rowIdx++) {
            const rowMatrix = createRowMatrix();
            const row = rowMatrix.map(withLetter => {
                if (withLetter) {
                    const randomLetterIdx = Math.floor(Math.random() * letters.length);
                    const {character} = letters[randomLetterIdx];
                    return character;
                }
                return '';
            });
            rows.push(row);
        }
        return rows;
    }

    function createRowMatrix(): Array<boolean> {
        const withLetters = new Array(CELLS_WITH_LETTERS).fill(true);
        const blanks = new Array(CELLS - CELLS_WITH_LETTERS).fill(false);
        const merge = [].concat(withLetters, blanks);

        shuffle(merge);

        return merge;

        function shuffle(array): void {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                // eslint-disable-next-line no-param-reassign
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
}
