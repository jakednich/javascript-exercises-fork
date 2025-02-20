const removeFromArray = function(array, value) {
    let value = value
    let array = array
    array = array.filter(function(item) {
        return item !== value
    })
};

// Do not edit below this line
module.exports = removeFromArray;
