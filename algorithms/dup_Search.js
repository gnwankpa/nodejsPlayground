
const checkDups = ((finalArray) => {
    let arr = finalArray;
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
                                        // JS by default uses a crappy string compare.
                                        // (we use slice to clone the array so the
                                        // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    if(results.length === 0){
        console.log('empty')
        return console.log('Done');
    } else {
        console.log(results);
        console.log('not a clean list... check for duplicates')
        return console.log('Done.. with errors');
    }
})


checkDups([1,2,3,4,5,6,12,3,4,5,3,3,4,5])