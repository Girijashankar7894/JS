"use strict"

// Syntax or Process - 01
const promiseOne = new Promise((resolve, reject) => {

    setTimeout(() => {
        
        console.log("Async Task Is Complete for promiseOne");
        resolve();

    }, 1000);

});

promiseOne.then(() => {

    console.log("Promise Consumed for promiseOne");

});


// Syntax or Process - 02
new Promise((resolve, reject) => {
    
    setTimeout(() => {
    
        console.log("Async Task Is Complete for promiseTwo");
        resolve();

    }, 1000);

}).then(() => {

    console.log("Promise Consumed for promiseTwo");

});


// Syntax or Process - 03
const promiseThree = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        
        let obj = {
            userName: "Shankar",
            password: "Pass@123"
        };

        console.log("Async Task Is Complete for promiseThree");
        resolve(obj);

    }, 1000);

});

promiseThree.then((obj) => {

    console.log("Promise Consumed for promiseThree");
    console.log(`Data = ${obj}`);

})


// Syntax or Process - 04
const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {

        let obj = {
            userName: "Girija",
            password: "Password@123"
        };
        
        console.log("Async Task Is Complete for promiseFour");
        resolve(obj);

    }, 1000);

});

promiseFour.then((obj) => {

    console.log("Promise Consumed for promiseFour");
    console.log(`Data = ${obj}`);

    return obj.userName;

}).then((userName) => {

    console.log("Promise Consumed for promiseFour_Phase2");
    console.log(`userName = ${userName}`);
    
});


// Syntax or Process - 05
const promiseFive = new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = false;
        let obj = {
            userName: "Mahal",
            password: "Admin@123"
        };
        
        console.log("Async Task Is Complete for promiseFive");

        if (!error) {
            resolve(obj);
        } else {
            reject();
        }

    }, 1000);

});

promiseFive.then((obj) => {

    console.log("Promise Consumed for promiseFive");
    console.log(`Data = ${obj}`);

    return obj.userName;

}).then((userName) => {

    console.log("Promise Consumed for promiseFive_Phase2");
    console.log(`userName = ${userName}`);
    
}).catch(() => {

    console.log(`Some thing went wrong!`);
    
});


// Syntax or Process - 06
const promiseSix = new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = false;
        let obj = {
            userName: "root",
            password: "root@123"
        };
        
        console.log("Async Task Is Complete for promiseSix");

        if (!error) {
            resolve(obj);
        } else {
            reject();
        }

    }, 1000);

});

promiseSix.then((obj) => {

    console.log("Promise Consumed for promiseSix");
    console.log(`Data = ${obj}`);

    return obj.userName;

}).then((userName) => {

    console.log("Promise Consumed for promiseSix_Phase2");
    console.log(`userName = ${userName}`);
    
}).catch(() => {

    console.log(`Some thing went wrong!`);
    
}).finally(() => console.log(`The promise is either resolve or rejected.`));



// Syntax or Process - 07 (by using async await)
const promiseSeven = new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = true;
        let obj = {
            userName: "root",
            password: "root@123"
        };
        
        console.log("Async Task Is Complete for promiseSeven");

        if (!error) {
            resolve(obj);
        } else {
            reject();
        }

    }, 1000);

});

async function fun() {
    try {
        const response = await promiseSeven;
        console.log(response);
    }
    catch{
        console.log(`Some thing went wrong!`);
    }
};

fun();


// fetch data by using async await
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(typeof response);
        const data = await response.json();
        console.log(data);
    }
    catch{
        console.log(`Some thing went wrong!`);
    }
};

fetchData();


// fetch data by using then catch
fetch('https://jsonplaceholder.typicode.com/user')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))