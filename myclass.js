class Person {
  constructor(name, age, number, street, state, postCode) {
    this.name = name;
    this.age = age;
    this.address = new Address(number, street, state, postCode);
  }
}

class Address {
  constructor(number, street, state, postCode) {
    this.number = number;
    this.street = street;
    this.state = state;
    this.postCode = postCode;
  }
}

const John = new Person("John Doe", 30, 1, "Sydney St", "NSW", 2000);
const Jane = new Person("Jane Doe", 33, 10, "Sydney St", "NSW", 2000);
const Jim = new Person("Jim Doe", 43, 12, "Sydney St", "NSW", 2000);

const persons = [John, Jane, Jim];

// console.log(people);

// let square = (X)=>{
//     return X * X};

// let newpersons = persons.map((p) => `Name = ${p.name}, Age = ${p.age}`);

let newpersons = persons.map((p) => {
  return `
        <div>
            <div>${p.name}</>
            <div>${p.age}</>
            <div>${p.address.street}</>
        </div>
        `;
});

let test = `lorem ipsum${John.name}`;

console.log(newpersons);
newpersons.forEach((element) => {
  document.getElementById("content").innerHTML += element;
});
