/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const keyValueObj = {};

    arr1.forEach(item => keyValueObj[item.id] = item);
    arr2.forEach(item => {
        keyValueObj[item.id] 
          ? Object.assign(keyValueObj[item.id], item)
          : keyValueObj[item.id] = item;
    });

    return Object.values(keyValueObj).sort((a, b) => a.id - b.id);
};