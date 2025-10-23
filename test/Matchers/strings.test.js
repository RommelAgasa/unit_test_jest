
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/); // matches anything that is not I
});