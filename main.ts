// Exercise 3 from JS Class 4

//  type person = {
//     name: string;
//     age: number;
//     gender: string;
// };

// let student1 = {
//     name: "John",
//     age: 34,
//     gender: "male"
// }

// let student2 = {
//     name: "Mary",
//     age: 45,
//     gender: "female"
// }

// --------------------//

// Exercise 3-5 from Class 6<-- find later..

interface PeopleInterface {
    name: string;
    age: number;
    // list(name: string, age: number): string;
    // listAge(): void;
    // listSsn(): number;
}

class People implements PeopleInterface {

    constructor(
      public name: string,
      public age: number,
      private ssn: number,
    ) {}

    list(name: string, age: number) {
        return name + ' ' + age;
    }

    listAge() {
        if (this.age < 0) {
          throw new Error('Age cannot be negative!!!');
        };
      }

    listSsn() {
        return this.ssn;
    }

}

const person1 = new People('Oskar', 37, 123456789);
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