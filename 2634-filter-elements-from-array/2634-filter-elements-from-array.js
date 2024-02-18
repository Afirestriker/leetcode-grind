/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];

    for (const i in arr) 
        if ( fn(arr[i], parseInt(i)) )
            filteredArr.push(arr[i]);

    return filteredArr;
};