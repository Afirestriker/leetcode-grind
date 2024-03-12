/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (!arr.length) return [];

    const maxChunkableIndex = Math.floor(arr.length / size) * size;
    const chunkedArray = [];
    let indx = 0;

    while (indx <= maxChunkableIndex) {
        const chunk = arr.slice(indx);

        if (indx !== maxChunkableIndex) chunk.length = size;

        chunkedArray.push(chunk);

        indx += size;

        if (indx >= arr.length) break;
    }

    return chunkedArray;
};
