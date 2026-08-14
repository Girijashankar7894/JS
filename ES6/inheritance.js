"use strict"

// define employ class
class employ {
    // declare a private property by using '#' symbol
    #age = "";
    constructor(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        // initialize value inside the private variable by using '#' symbol
        this.#age = age;
    }

    // declare a private method by using '#' symbol
    #fullName() {
        console.log(`Employ Name: ${this.firstName} ${this.lastName}`);
    }

    detailInformation() {
        console.log(`Employ Details: `);
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        // call private method and property by using '#' symbol
        this.#fullName();
        console.log(`Age: ${this.#age}`);
    }
}


// define manager class
// inherit all the property and method of the employ class inside the manager class by using 'extends' keyword.
class manager extends employ {
    constructor(fName, lName, age, fPay, pIncentive, rBenefits) {
        // call constructor function of parent class inside child class by using 'super' keyword
        super(fName, lName, age);

        this.fixedPay = fPay;
        this.performanceIncentive = pIncentive;
        this.rentalBenefits = rBenefits;
    }

    detailInformation() {
        console.log(`Manger Details: `);
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Fixed Pay: ${this.fixedPay}`);
        console.log(`Performance Incentive: ${this.performanceIncentive}`);
        console.log(`Rental Benefits: ${this.rentalBenefits}`);
    }

    salary() {
        // call same name function present inside the child class
        this.detailInformation();

        let totalSalary = this.fixedPay + this.performanceIncentive + this.rentalBenefits;
        console.log(`Total Salary = ${totalSalary}`);

        // call same name function present inside the parent class
        super.detailInformation();
    }
}

// create manager object
const manager1 = new manager("Girija", "Shankar", 26, 5600, 2400, 3600);

// display all the property of manager class
console.log(manager1);
console.log(manager1.fixedPay);
manager1.salary();
