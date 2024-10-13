// Assignment 18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favouritePlaces = ["Austrailia", "Paris", "Malaysia", "USA", "England"];
console.log(favouritePlaces);
console.log(__spreadArray([], favouritePlaces, true).sort());
console.log(favouritePlaces);
console.log(__spreadArray([], favouritePlaces, true).sort().reverse());
console.log(favouritePlaces);
console.log(favouritePlaces.reverse());
console.log(favouritePlaces.reverse());
console.log(favouritePlaces.sort());
console.log(favouritePlaces.sort().reverse());
