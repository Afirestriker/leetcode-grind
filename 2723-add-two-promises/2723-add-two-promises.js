/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // concept 1
    return await promise1 + await promise2;

    // concept 2
    // const [p1, p2] = await Promise.all([promise1, promise2]);
    // return p1 + p2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */