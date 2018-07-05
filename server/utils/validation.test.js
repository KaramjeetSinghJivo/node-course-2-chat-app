const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should reject non-string Values', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });

    it('Should reject string with only spaces', () => {
        var res = isRealString('      ');
        expect(res).toBe(false);
    });

    it('Should allow strings with non-space Characters', () => {
        var res = isRealString('karam');
        expect(res).toBe(true);
    });
});