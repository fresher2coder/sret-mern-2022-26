// ===== DATA TYPES =====

// Primitive types (immutable, stored by VALUE)
let num = 100; // Number
let str = "Hello"; // String
let bool = true; // Boolean
let undef; // undefined
let n = null; // null
let big = 12345678901234567890n; // BigInt
let sym = Symbol("id"); // Symbol

console.log(
  typeof num,
  typeof str,
  typeof bool,
  typeof undef,
  typeof n,
  typeof big,
  typeof sym
);

// Reference types (mutable, stored by REFERENCE)
let arr = [1, 2, 3];
let obj = { name: "Dinesh", age: 34 };

console.log(obj.name, obj["name"]);

let func = function () {
  return "I am a function";
};

console.log(typeof arr, typeof obj, typeof func);

// Type conversion
console.log("5" + 2); // "52" (string concatenation)
console.log("5" - 2); // 3   (string converted to number)
console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean(0)); // false
console.log(Boolean("hi")); // true
