// const sum = require('../sum');

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });



/**
 * toBe uses Object.is to test exact equality. 
 * If you want to check the value of an object, 
 * use toEqual:
 * 
 * toEqual ignores object keys with undefined 
 * properties, undefined array items, array 
 * sparseness, or object type mismatch. To take 
 * these into account use toStrictEqual instead.
 * 
 */

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});