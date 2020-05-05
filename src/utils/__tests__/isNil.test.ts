import {isNil} from '../';

describe('isNil', () => {
    it('should return true if called with undefined', () => {
        expect(isNil(undefined)).toEqual(true);
    });

    it('should return true if called with null', () => {
        expect(isNil(null)).toEqual(true);
    });

    it('should return false if called with any agrument except undefined or null', () => {
        expect(isNil(0)).toEqual(false);
        expect(isNil('0')).toEqual(false);
        expect(isNil([])).toEqual(false);
        expect(isNil({})).toEqual(false);
    });
});
