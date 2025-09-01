
const findTheOldest = function(peopleObj)
{
    const currYear = new Date().getFullYear();
    const sorted = peopleObj.sort((p1, p2) => {
        const deathDate1 = (p1["yearOfDeath"]) ? p1["yearOfDeath"] : currYear;
        const deathDate2 = (p2["yearOfDeath"]) ? p2["yearOfDeath"] : currYear;

        return (deathDate2 - p2.yearOfBirth) - (deathDate1 - p1.yearOfBirth);
    })

    return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;
