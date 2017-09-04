/// <reference path="extendedNamespacesLabPart2.ts" />

namespace ArrayUtilities {
    export function reverseArray(array: Array<number>) {
        return array.slice(0).reverse();
    } 
    export function lastItemOfArray(array: Array<number>) {
        return array.slice(0).pop();
    }
}
