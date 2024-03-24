/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const groupedObject = {};

    for (const item of this) {
        let key = fn(item);
        groupedObject[key] = groupedObject[key] || [];
        groupedObject[key].push(item);
    }

    return groupedObject;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */