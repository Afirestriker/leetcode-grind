/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    const compactObj = {};

    if (typeof obj !== 'object' || obj === null)
        return obj;

    if (Array.isArray(obj))
        return obj.filter(Boolean).map(compactObject);

    for (const key in obj) {
        const value = obj[key];

        if (value)
            compactObj[key] = (typeof value !== 'object')
                                ? value
                                : compactObject(value);
    }

    return compactObj;    
};