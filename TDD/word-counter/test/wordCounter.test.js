const wordCounter = require('../src/wordCounter');

test('returns 0 for an empty string', ()=>{
    expect(wordCounter("")).toBe(0);
})

test('returns 1 for a single word', () =>{
    expect(wordCounter("one")).toBe(1);
})

test('returns 2 for two words', () =>{
    expect(wordCounter("One two")).toBe(2);
})

test('returns 2 for two words with puncuation separator', () =>{
    expect(wordCounter("One - two")).toBe(2);
    expect(wordCounter("One / two")).toBe(2);
    expect(wordCounter("One + two")).toBe(2);
})

test('returns 2 for two words with more than one space', ()=>{
    expect(wordCounter("One         two")).toBe(2);
    expect(wordCounter("One  two")).toBe(2);
})

test('more than 2 words', ()=>{
    expect(wordCounter("One Two Three Four")).toBe(4);
})