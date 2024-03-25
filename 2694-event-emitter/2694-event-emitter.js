class EventEmitter {
    subscribtionList = {};

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        this.subscribtionList[eventName] = this.subscribtionList[eventName] ?? new Set();
        this.subscribtionList[eventName].add(callback);

        return {
            unsubscribe: () => {
                this.subscribtionList[eventName].delete(callback);
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const result = [];

        (this.subscribtionList[eventName] ?? []).forEach(item => {
            result.push(item(...args));
        });

        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */