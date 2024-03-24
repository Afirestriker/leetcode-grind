/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) return arr;

    const flattenArray = [];

    const flatten = (arr, depth) => {
        arr.forEach(item => {
            if (Array.isArray(item) && depth < n) {
                flatten(item, depth + 1);
            } else {
                flattenArray.push(item);
            }
        });

        return flattenArray;
    };

    return flatten(arr, 0);
};