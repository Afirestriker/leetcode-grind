/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const arrayLength = functions.length;
        const results = [];
        let counter = 0;

        if (arrayLength === 0) return resolve(results);

        functions.forEach((func, indx) => {
            func()
                .then(result => {
                    results[indx] = result;
                    counter++;

                    if (counter === arrayLength)
                        resolve(results);
                })
                .catch(error => reject(error))
        })
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */