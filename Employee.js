function Employee(firstName, lastName, phoneNumber, designation, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.designation = designation;
    this.salary = salary;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
    this.raisedSalary = function () {
        return (salary * 50 / 100 + salary);
    }
}

var emp1 = new Employee('Sahana', 'Shankar', 7987685687, "System Engineer", 30000);
var emp2 = new Employee('Nayana', 'Shankar', 7945675687, "Software Engineer", 40000);
var emp3 = new Employee('Satish', 'Shankar', 7987685687, "IT Engineer", 35000);
var emp4 = new Employee('Shiva', 'Shankar', 7987685687, "Software Engineer", 30000);
var emp5 = new Employee('Sanjya', 'Kumar', 7987685687, "Desk Engineer", 30000);

console.log(emp1);
console.log(emp1.fullName());
console.log(emp1.raisedSalary());
console.log(emp2);