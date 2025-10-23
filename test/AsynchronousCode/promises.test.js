
function fetchData(){
    // returns a promise that is supposed to resolve 
    // to the string 'peanut butter'
    return 'peanut butter';
}

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
})


test('the fetch fails with an error', async () => {
    expect.assertions(1); // <-- Ensures that exactly 1 assertion will run

    try{
        await fetchData();
        // if this doesnt throw an error
    }
    catch(error){
        // this test will fail
        // since its expectig 1 assertions
        expect(error).toMatch('error'); // <-- This is the 1 assertion
    }

});



// combine
test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
});


test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData()
        .catch(error => expect(error).toMatch('error'));
});