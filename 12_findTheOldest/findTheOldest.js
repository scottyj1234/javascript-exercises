const findTheOldest = function(people) {
  peopleAgeMap = people.map((person) => {
    let age = 0;

    if (person.yearOfDeath === undefined) {
      age = Date().getFullYear() - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }

    return {
      person,
      age
    }
  });

  return peopleAgeMap.reduce((acc, val) => {
    if (val.age > acc.age) return val;
    return acc;
  }).person
};

// Do not edit below this line
module.exports = findTheOldest;
