/**
 * The make module consits of Make, getPrototypeOf and mixin.
 * See the documentation for each method to see what is does.
 * This module is part of the ApplicationFrame.
 * @module Make
 * @author Jovan Gerodetti
 * @copyright Jovan Gerodetti
 * @version 1.0
 */

import { apply } from './Apply.js';
import { hasPrototype } from './HasPrototype.js';

/**
 * Creates a new object with the given prototype.
 * If two arguments are passed in, the properties of the first object will be
 * applied to the new object.
 *
 * @param {Object} object
 * @param {Object} prototype
 * @return {function}
 */
export let Make = function(object, prototype) {
    if(arguments.length < 2){
        prototype = object;
        object = null;
    }

    if (object === null) {
        object = Object.create(prototype);
    } else {
        object = apply(Object.create(prototype), object);
    }

    var m = function(...args){
        var make = prototype.make || prototype._make || function(){};

        make.apply(object, args);

        return object;
    };

    m.get = function(){ return object; };

    return m;
};

export let apply = apply;
export let hasPrototype = hasPrototype;
