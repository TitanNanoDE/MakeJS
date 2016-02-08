/**
 * Internal function to apply one objects propteries to a target object.
 *
 * @param {Object} target
 * @param {Object} source
 * @inner
 */

export let apply = function (target, source) {
    Object.keys(source).forEach(key => {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });

    return target;
};
