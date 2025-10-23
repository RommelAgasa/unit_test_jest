function fetchData(){
    return 'peanut better';
}

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut better');
});