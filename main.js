// Exercise 3 from JS Class 4
var People = /** @class */ (function () {
    function People(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }
    People.prototype.list = function (name, age) {
        return name + ' ' + age;
    };
    People.prototype.listAge = function () {
        if (this.age < 0) {
            throw new Error('Age cannot be negative!!!');
        }
        ;
    };
    People.prototype.listSsn = function () {
        return this.ssn;
    };
    return People;
}());
var person1 = new People('Oskar', 37, 123456789);
// person1.listSsn();
console.log("person1:", person1);
// console.groupCollapsed('Exercise 5');
// class persons {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     get nameAndAge() {
//         return this.#name + ' ' + this.#age;
//     }
//     set age(age) {
//         if (age < 0) {
//           throw new Error('Age cannot be negative!!!');
//         }
//         this.#age = age;
//       }
// }
// const person1 = new persons('Oskar', 37);
// console.log(person1.nameAndAge);
// //person1.age = -37;
// console.groupEnd();
