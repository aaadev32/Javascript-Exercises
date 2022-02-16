const findTheOldest = function (people) {
    let highestAge = 0;
    let oldestName = '';
    let loops = 0;

    const getAge = function (birth, death) {
        let result = death - birth;
        return result;
    }

    for (i = 0; i < people.length; i++) {
        console.log(
            highestAge,
            people[i].name + " is " + getAge(people[i].yearOfBirth, people[i].yearOfDeath) + " years"
        )
        console.log(oldestName);
        console.log(loops);

        if (people[i].hasOwnProperty('yearOfDeath') == false) {
            people[i].yearOfDeath = new Date().getFullYear();
            highestAge = people[i].yearOfDeath - people[i].yearOfBirth;
            oldestName = people[i];
        } else if (highestAge < getAge(people[i].yearOfBirth, people[i].yearOfDeath)) {
            highestAge = getAge(people[i].yearOfBirth, people[i].yearOfDeath); 
            oldestName = people[i];
        }
        loops++;
    }

    return oldestName;
};

// Do not edit below this line
module.exports = findTheOldest;

