function fetchData(){
    // asynchronous
}

// Don't do this!
test('the data is peanut butter', () => {
    function callback(error, data){
        if(error){
            throw error;
        }
        expect(data).toBe('peanut butter');
    }

    fetchData(callback);
})


// Alternative Way
test('the data is peanut butter', done => {
    function callback(error, data){
        if(error){
            done(error);
            return;
        }

        try{
            expect(data).toBe('peanut butter');
            done();
        }
        catch(error){
            done(error);
        }
    }

    fetchData(callback);
})