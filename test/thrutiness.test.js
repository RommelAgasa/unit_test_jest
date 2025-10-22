
test('null', () => {
    const n = null;
    expect(n).toBeNull(); // matches only null
    expect(n).toBeDefined(); // matches anything that is not undefined
    expect(n).not.toBeUndefined(); // matches anything that is not undefined
    expect(n).not.toBeTruthy(); // matches anything that is not truthy
    expect(n).toBeFalsy(); // matches anything that is falsy
});


test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull(); // matches only null
    expect(z).toBeDefined(); // matches anything that is not undefined
    expect(z).not.toBeUndefined(); // matches anything that is not undefined
    expect(z).not.toBeTruthy(); // matches anything that is not truthy
    expect(z).toBeFalsy(); // matches anything that is falsy
});