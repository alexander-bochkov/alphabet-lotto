import {composeClassName} from '../';

describe('composeClassName', () => {
    it('should return primary сlassName if no modifiers are provided', () => {
        const primaryClassName = 'сlassNameExample';
        expect(composeClassName(primaryClassName)).toBe(primaryClassName);
    });

    it('should return primary сlassName if an empty object as modifiers is provided', () => {
        const primaryClassName = 'сlassNameExample';
        expect(composeClassName(primaryClassName, {})).toBe(primaryClassName);
    });

    it('should return primary сlassName if no valid modifiers are provided', () => {
        const primaryClassName = 'сlassNameExample';
        const modifiers = {
            hovered: false
        };
        expect(composeClassName(primaryClassName, modifiers)).toBe(primaryClassName);
    });

    it('should return concatenated string of primary сlassName and valid modifiers', () => {
        const primaryClassName = 'сlassNameExample';
        const modifiers = {
            'сlassNameExample--opened': true,
            'сlassNameExample--hovered': false,
            'сlassNameExample--small': true
        };
        const result = `${primaryClassName} ${primaryClassName}--opened ${primaryClassName}--small`;
        expect(composeClassName(primaryClassName, modifiers)).toBe(result);
    });
});
