// create JSON
// let data = `{
//     "name": "Shankar",
//     "age": 26,
//     "language": ["C-Programming", "C++", "Java", "Rust", "JavaScript"],
//     "address": {
//         "at": "Sergarh",
//         "post": "Sergarh",
//         "dist": "Balasore",
//         "state": "Odisha",
//         "pinCode": 756060
//     }
// }`;

// console.log(typeof data); // string
// console.log(data.address); // undefined

// String to JSON
// let dataConvertToJSON = JSON.parse(data);
// console.log(typeof dataConvertToJSON); // object
// // access data from JSON
// console.log(dataConvertToJSON.address.dist); // Balasore

// JSON to String
// let dataConvertToString = JSON.stringify(dataConvertToJSON);
// console.log(typeof dataConvertToString);

// API Request (Old Process)
const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET", "./script.json");
xhr.onreadystatechange = () => {
    // console.log(xhr.readyState);
    // console.log(xhr.responseText);
    // console.log(typeof xhr.responseText);
    if(xhr.readyState === 4) {
        let APIData = JSON.parse(xhr.responseText);
        // console.log(APIData);
        // console.log(typeof APIData);
        console.log(APIData.name);
        console.log(APIData.address.state);
        
    }
};

// console.log(xhr.readyState);
xhr.send();


