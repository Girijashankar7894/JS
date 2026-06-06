let age = 26; // here age is a number data type
let bigValue = 9007199254740991n; // here bigValue is a BigInt data type
let name = "John"; // here name is a string data type
let isStudent = true; // here isStudent is a boolean data type
let hobbies = ["reading", "traveling", "coding"]; // here hobbies is an array data type
let person = { name: "Alice", age: 30 }; // here person is an object data type
let nullValue = null; // here nullValue is a null data type
let undefinedValue; // here undefinedValue is an undefined data type
let symbolValue = Symbol("unique"); // here symbolValue is a symbol data type
let functionValue = function() { console.log("Hello!"); }; // here functionValue is a function data type
let arrowFunctionValue = () => console.log("Hello from arrow function!"); // here arrowFunctionValue is an arrow function data type
let dateValue = new Date(); // here dateValue is a Date object data type
let regexValue = /abc/; // here regexValue is a regular expression data type
// let mapValue = new Map(); // here mapValue is a Map data type
// let setValue = new Set(); // here setValue is a Set data type
// let weakMapValue = new WeakMap(); // here weakMapValue is a WeakMap data type
// let weakSetValue = new WeakSet(); // here weakSetValue is a WeakSet data type
// let promiseValue = new Promise((resolve, reject) => { resolve("Done!"); }); // here promiseValue is a Promise data type
// let asyncFunctionValue = async function() { return "Hello from async function!"; }; // here asyncFunctionValue is an async function data type
// let generatorFunctionValue = function*() { yield "Hello from generator function!"; }; // here generatorFunctionValue is a generator function data type
// let typedArrayValue = new Uint8Array([1, 2, 3]); // here typedArrayValue is a typed array data type
// let arrayBufferValue = new ArrayBuffer(16); // here arrayBufferValue is an ArrayBuffer data type
// let dataViewValue = new DataView(arrayBufferValue); // here dataViewValue is a DataView data type
// let errorValue = new Error("Something went wrong!"); // here errorValue is an Error data type
// let evalValue = eval("2 + 2"); // here evalValue is the result of evaluating the string "2 + 2", which is a number data type (4)
// let globalValue = globalThis; // here globalValue is the global object data type
// let thisValue = this; // here thisValue is the current context (global object in non-strict mode, undefined in strict mode) data type
// let argumentsValue = arguments; // here argumentsValue is the arguments object data type (available inside functions)
// let moduleValue = module; // here moduleValue is the module object data type (available in Node.js)
// let exportsValue = exports; // here exportsValue is the exports object data type (available in Node.js)
// let processValue = process; // here processValue is the process object data type (available in Node.js)
// let consoleValue = console; // here consoleValue is the console object data type
// let mathValue = Math; // here mathValue is the Math object data type
// let jsonValue = JSON; // here jsonValue is the JSON object data type
// let reflectValue = Reflect; // here reflectValue is the Reflect object data type
// let proxyValue = new Proxy({}, {}); // here proxyValue is a Proxy data type
// let intlValue = new Intl.Collator(); // here intlValue is an Intl.Collator object data type
// let webAssemblyValue = WebAssembly; // here webAssemblyValue is the WebAssembly object data type
// let performanceValue = performance; // here performanceValue is the Performance object data type
// let fetchValue = fetch; // here fetchValue is the fetch function data type
// let navigatorValue = navigator; // here navigatorValue is the Navigator object data type
// let screenValue = screen; // here screenValue is the Screen object data type
// let historyValue = history; // here historyValue is the History object data type
// let locationValue = location; // here locationValue is the Location object data type
// let documentValue = document; // here documentValue is the Document object data type
// let windowValue = window; // here windowValue is the Window object data type



console.log(typeof age); // Output: "number"
console.log(typeof bigValue); // Output: "bigint"
console.log(typeof name); // Output: "string"
console.log(typeof isStudent); // Output: "boolean"
console.log(typeof hobbies); // Output: "object" (arrays are a type of object in JavaScript)
console.log(typeof person); // Output: "object"
console.log(typeof nullValue); // Output: "object" (this is a quirk in JavaScript, null is considered an object)
console.log(typeof undefinedValue); // Output: "undefined"
console.log(typeof symbolValue); // Output: "symbol"
console.log(typeof functionValue); // Output: "function"
console.log(typeof arrowFunctionValue); // Output: "function"
console.log(typeof dateValue); // Output: "object"
console.log(typeof regexValue); // Output: "object"
// console.log(typeof mapValue); // Output: "object"
// console.log(typeof setValue); // Output: "object"
// console.log(typeof weakMapValue); // Output: "object"
// console.log(typeof weakSetValue); // Output: "object"
// console.log(typeof promiseValue); // Output: "object"
// console.log(typeof asyncFunctionValue); // Output: "function"
// console.log(typeof generatorFunctionValue); // Output: "function"
// console.log(typeof typedArrayValue); // Output: "object"
// console.log(typeof arrayBufferValue); // Output: "object"
// console.log(typeof dataViewValue); // Output: "object"
// console.log(typeof errorValue); // Output: "object"
// console.log(typeof evalValue);  // Output: "number" (the result of evaluating "2 + 2" is 4, which is a number)
// console.log(typeof globalValue); // Output: "object" (the global object is of type object)
// console.log(typeof thisValue); // Output: "object" (in non-strict mode, this refers to the global object, which is of type object)
// console.log(typeof argumentsValue); // Output: "object" (the arguments object is of type object)
// console.log(typeof moduleValue); // Output: "object" (the module object is of type object in Node.js)
// console.log(typeof exportsValue); // Output: "object" (the exports object is of type object in Node.js)
// console.log(typeof processValue); // Output: "object" (the process object is of type object in Node.js)
// console.log(typeof consoleValue); // Output: "object" (the console object is of type object)
// console.log(typeof mathValue); // Output: "object" (the Math object is of type object)
// console.log(typeof jsonValue); // Output: "object" (the JSON object is of type object)
// console.log(typeof reflectValue); // Output: "object" (the Reflect object is of type object)
// console.log(typeof proxyValue); // Output: "object" (the Proxy object is of type object)
// console.log(typeof intlValue); // Output: "object" (the Intl.Collator object is of type object)
// console.log(typeof webAssemblyValue); // Output: "object" (the WebAssembly object is of type object)
// console.log(typeof performanceValue); // Output: "object" (the Performance object is of type object)
// console.log(typeof fetchValue); // Output: "function" (the fetch function is of type function)
// console.log(typeof navigatorValue); // Output: "object" (the Navigator object is of type object)
// console.log(typeof screenValue); // Output: "object" (the Screen object is of type object)
// console.log(typeof historyValue); // Output: "object" (the History object is of type object)
// console.log(typeof locationValue); // Output: "object" (the Location object is of type object)
// console.log(typeof documentValue); // Output: "object" (the Document object is of type object)
// console.log(typeof windowValue); // Output: "object" (the Window object is of type object)



console.log(age); // Output: 26
console.log(bigValue); // Output: 9007199254740991n
console.log(name); // Output: "John"
console.log(isStudent); // Output: true
console.log(hobbies); // Output: ["reading", "traveling", "coding"]
console.log(person); // Output: { name: "Alice", age: 30 }
console.log(nullValue); // Output: null
console.log(undefinedValue); // Output: undefined
console.log(symbolValue); // Output: Symbol(unique)
console.log(functionValue); // Output: function() { console.log("Hello!"); }
console.log(arrowFunctionValue); // Output: () => console.log("Hello from arrow function!")
console.log(dateValue); // Output: current date and time (e.g., 2024-06-01T12:00:00.000Z)
console.log(regexValue); // Output: /abc/
// console.log(mapValue); // Output: Map(0) {}
// console.log(setValue); // Output: Set(0) {}
// console.log(weakMapValue); // Output: WeakMap {}
// console.log(weakSetValue); // Output: WeakSet {}
// console.log(promiseValue); // Output: Promise { "Done!" }
// console.log(asyncFunctionValue); // Output: async function() { return "Hello from async function!"; }
// console.log(generatorFunctionValue); // Output: function*() { yield "Hello from generator function!"; }
// console.log(typedArrayValue); // Output: Uint8Array(3) [1, 2, 3]
// console.log(arrayBufferValue); // Output: ArrayBuffer { byteLength: 16 }
// console.log(dataViewValue); // Output: DataView { byteLength: 16, byteOffset: 0, buffer: ArrayBuffer { byteLength: 16 } }
// console.log(errorValue); // Output: Error: Something went wrong!
// console.log(evalValue); // Output: 4 (the result of evaluating "2 + 2")
// console.log(globalValue); // Output: [object global] (the global object)
// console.log(thisValue); // Output: [object global] (in non-strict mode, this refers to the global object)
// console.log(argumentsValue); // Output: [object Arguments] (the arguments object, available inside functions)
// console.log(moduleValue); // Output: [object Module] (the module object, available in Node.js)
// console.log(exportsValue); // Output: {} (the exports object, available in Node.js)
// console.log(processValue); // Output: process { ... } (the process object, available in Node.js)
// console.log(consoleValue); // Output: console { ... } (the console object)
// console.log(mathValue); // Output: Math { ... } (the Math object)
// console.log(jsonValue); // Output: JSON { ... } (the JSON object)
// console.log(reflectValue); // Output: Reflect { ... } (the Reflect object)
// console.log(proxyValue); // Output: Proxy { ... } (the Proxy object)
// console.log(intlValue); // Output: Intl.Collator { ... } (the Intl.Collator object)
// console.log(webAssemblyValue); // Output: WebAssembly { ... } (the WebAssembly object)
// console.log(performanceValue); // Output: Performance { ... } (the Performance object)
// console.log(fetchValue); // Output: function fetch() { [native code] } (the fetch function)
// console.log(navigatorValue); // Output: Navigator { ... } (the Navigator object)
// console.log(screenValue); // Output: Screen { ... } (the Screen object)
// console.log(historyValue); // Output: History { ... } (the History object)
// console.log(locationValue); // Output: Location { ... } (the Location object)
// console.log(documentValue); // Output: Document { ... } (the Document object)
// console.log(windowValue); // Output: Window { ... } (the Window object)