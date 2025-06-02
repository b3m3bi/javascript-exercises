const findTheOldest = function(peopleArr) {
    let maxAge = peopleArr.map(p => {
        if (p.yearOfDeath){
            return p.yearOfDeath - p.yearOfBirth
        } else {
            return 2025 - p.yearOfBirth
        }
    }).sort((a, b) => b - a)[0]
    return peopleArr.filter(p => {
        if (p.yearOfDeath){
            return p.yearOfDeath - p.yearOfBirth === maxAge
        } else {
            return 2025 - p.yearOfBirth === maxAge
        }
    }).pop()
}

// Do not edit below this line
module.exports = findTheOldest;
