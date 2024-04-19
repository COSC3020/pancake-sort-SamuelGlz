function flip(array, n) {

    i = 0

    if(n > array.length - 1 ){
        n = array.length - 1
    }

    while( i < n){
        
        tmp = array[i]
        array[i] = array[n]
        array[n] = tmp

        i++
        n--
    }

    return array;

}

function maxNum(array, index){
    max = 0

    for (i = 1; i <= index; i++){
        if (array[i] > array[max]){
            max = i
        }
    }

    return max
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {

    sortedIndex = array.length - 1 

    while(sortedIndex > 0){
        maxIndex = maxNum(array, sortedIndex)

        flip(array, maxIndex)

        flip(array,sortedIndex)

        sortedIndex--
    }


    return array;
}

//.log(flip([9,2,6,1],3))

//console.log(flip([1, 2, 3, 4],3))

//console.log(pancakeSort([2,9,6,1]))
