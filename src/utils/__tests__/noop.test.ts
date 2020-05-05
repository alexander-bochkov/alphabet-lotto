import {noop} from '../';

describe('noop', () => {
    it('should return undefined regardless of passed arguments', () => {
        expect(noop()).toBeUndefined();
        expect(noop(1)).toBeUndefined();
        expect(noop('1')).toBeUndefined();
        expect(noop({})).toBeUndefined();
        expect(noop([])).toBeUndefined();
        expect(noop(null)).toBeUndefined();
        expect(noop(undefined)).toBeUndefined();
    });
});
