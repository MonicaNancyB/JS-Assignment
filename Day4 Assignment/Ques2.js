const student = {
    name:"Helsinki",
    age:24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
    }

const {name,age,projects:{diceGame}}=student;
console.log(name);
console.log(age);


console.log(diceGame);