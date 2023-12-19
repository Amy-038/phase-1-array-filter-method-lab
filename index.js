function findMatching(array, string) {
    return array.filter(function (element) {
        return element.toUpperCase() === string.toUpperCase()
    })
}

function fuzzyMatch(array, string) {
    return array.filter(function (element) {
        return element.slice(0,2) === string;
    })
}

function matchName(array, string) {
    return array.filter(function (element) {
        return element.name === string;
    })
}

