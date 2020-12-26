import {composeClassName} from '../';

describe('composeClassName', () => {
    it('should return only сlassName if no modifiers are provided', () => {
        const className = 'сlassNameExample';
        expect(composeClassName(className)).toBe(className);
    });

    it('should return only сlassName if an empty object as modifiers is provided', () => {
        const className = 'сlassNameExample';
        expect(composeClassName(className, {})).toBe(className);
    });

    it('should return only сlassName if no valid modifiers are provided', () => {
        const className = 'сlassNameExample';
        const modifiers = {
            hovered: false
        };
        expect(composeClassName(className, modifiers)).toBe(className);
    });

    it('should return concatenated string of сlassName and valid modifiers', () => {
        const className = 'сlassNameExample';
        const modifiers = {
            'сlassNameExample--opened': true,
            'сlassNameExample--hovered': false,
            'сlassNameExample--small': true
        };
        const result = `${className} ${className}--opened ${className}--small`;
        expect(composeClassName(className, modifiers)).toBe(result);
    });
});
