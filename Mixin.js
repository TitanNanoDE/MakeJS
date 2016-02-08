/**
 * Creates a new prototype mixing all the given prototypes. Incase two or more
 * prototypes contain the same propterty, the new prototype will return
 * the propterty of the first prototype in the list which contains it.
 *
 * @param {...Object} prototypes
 * @return {Proxy}
 */
export var Mixin = function(...prototypes){

    return new Proxy(prototypes, MixinTrap);

};

/**
 * Internal function to find a proptery in a list of prototypes.
 *
 * @param {Object[]} prototypes
 * @param {string} key
 * @return {Object}
 */
var findProperty = function(prototypes, key) {
    for (var i = 0; i < prototypes.length; i++) {
        var item = prototypes[i];

        if (item[key]) {
            return item;
        }
    }

    return undefined;
};

/**
 * Traps to create a mixin.
 */
var MixinTrap = {

    'get' : function(prototypes, key) {
        var object = findProperty(prototypes, key);

        return (object ? object[key] : null);
    },

    'set' : function(prototypes, key, value) {
        var object = findProperty(prototypes, key);

        if (object) {
            object[key] = value;
        } else {
            prototypes[0][key] = value;
        }
    }
};
