"use strict"

// define employ class
class employ {
    constructor(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }

    fullName() {
        console.log(`Employ Name: ${this.firstName} ${this.lastName}`);
    }
}


// define manager class
// inherit all the property and method of the employ class inside the manager class by using 'extends' keyword.
class manager extends employ {
    constructor(fPay, pIncentive, rBenefits) {
        this.fixedPay = fPay;
        this.performanceIncentive = pIncentive;
        this.rentalBenefits = rBenefits;
    }

    salary() {
        let totalSalary = this.fixedPay + this.performanceIncentive + this.rentalBenefits;
        console.log(`Total Salary = ${totalSalary}`);
    }
}

// create object


// display all the property of manager class
console.log(manager1.fixedPay);
