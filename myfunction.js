function Person (name,age,number,street,state,postcode) {
    this.name = name;
    this.age = age;
    this.address = new Address(number,street,state,postcode);
}

function Address (number,street,state,postcode){
    this.number = number;
    this.street = street;
    this.state = state;
    this.postcode = postcode;
}

const John = new Person('John Doe',33,10,'Sydney St','NSW',2000);

console.log(John);