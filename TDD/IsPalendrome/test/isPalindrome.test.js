const isPalindrome = require('../src/isPalindrome.js');

describe('isPalindrome()', () => {

    describe('Invalid arguments', () => {
        test('returns false for an array', () => {
            expect(isPalindrome([1, 2, 3, 4])).toBe(false);
        });
        test('returns false for a boolean', () => {
            expect(isPalindrome(false)).toBe(false);
        });
        test('returns false for a number', () => {
            expect(isPalindrome(1)).toBe(false);
        });
        test('handles "121"', ()=>{
            expect(isPalindrome("121")).toBe(true);
        })
        test('returns false for null', () => {
            expect(isPalindrome(null)).toBe(false);
        });
        test('returns false for undefined', () => {
            expect(isPalindrome(undefined)).toBe(false);
        });
        test('returns false for an object', () => {
            expect(isPalindrome({ name: "Wyatt", type: "test" })).toBe(false);
        });
    });

    describe('Small Strings', () => {
        test('valid: "bob"', () => {
            expect(isPalindrome("bob")).toBe(true);
        });
        test('valid: "racecar"', () => {
            expect(isPalindrome("racecar")).toBe(true);
        });
        test('invalid: "apple"', () => {
            expect(isPalindrome("apple")).toBe(false);
        });
        test('handles "  "', ()=>{
            expect(isPalindrome("  ")).toBe(true);
        })
    });

    describe('Case Sensitivity', () => {
        test('should be case-insensitive: "Bob"', () => {
            expect(isPalindrome("Bob")).toBe(true);
        });
        test('should be case-insensitive: "Racecar"', () => {
            expect(isPalindrome("Racecar")).toBe(true);
        });
    });

    describe('Strings with spaces and punctuation', () => {
        test('handles "Madam I\'m Adam"', () => {
            expect(isPalindrome("Madam I'm Adam")).toBe(true);
        });
        test('handles "Red rum, sir, is murder."', () => {
            expect(isPalindrome("Red rum, sir, is murder.")).toBe(true);
        });
        test('handles "A man, a plan, a canal – Panama!"', ()=>{
            expect(isPalindrome("A man, a plan, a canal – Panama!")).toBe(true);
        })
        test('handles "Doc, note: I dissent. A fast never prevents a fatness. I diet on cod"', ()=>{
            expect(isPalindrome("Doc, note: I dissent. A fast never prevents a fatness. I diet on cod")).toBe(true);
        })
        test('handles "Draw, o coward!"', ()=>{
            expect(isPalindrome("Draw, o coward!")).toBe(true);
        })
        test('handles "Lewd did I live & evil I did dwel;"', () =>{
            expect(isPalindrome("Lewd did I live & evil I did dwel;")).toBe(true);
        })
    });

    describe('Unicode', ()=>{
        test('handles "😊a😊"', () =>{
            expect(isPalindrome("😊a😊")).toBe(true);
        })
    })
});