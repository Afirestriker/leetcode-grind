/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (!arr.length || size === 0) return [];

    const chunkedArray = [];
    let indx = 0;

    while (indx < arr.length) {
        chunkedArray.push(arr.slice(indx, indx + size));
        indx += size;
    }

    return chunkedArray;
};
