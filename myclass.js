class Person {
    constructor(name,age,number,street,state,postCode){
        this.name = name;
        this.age = age;
        this.address = new Address(number,street,state,postCode);
    }
}

class Address {
    constructor(number,street,state,postCode){
        this.number = number;
        this.street = street;
        this.state = state;
        this.postCode = postCode;
    }
}

const John = new Person('John Doe',30,1,'Sydney St','NSW',2000);

console.log(John);