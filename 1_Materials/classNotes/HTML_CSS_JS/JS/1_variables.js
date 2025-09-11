// ===== VARIABLES =====

// ===== VARIABLES DEMO =====
function variableDemo() {
  if (true) {
    // var → function scoped (accessible outside this block)
    var a = 10;

    // let → block scoped (accessible only inside this block)
    let b = 20;

    console.log("Inside block: a =", a); // 10
    console.log("Inside block: b =", b); // 20
  }

  console.log("Outside block: a =", a); // ✅ works (10)

  // console.log("Outside block: b =", b);
  // ❌ Error: b is not defined (because let is block-scoped)
}

variableDemo();

// const → block scoped (cannot be re-declared or reassigned)
const v3 = 30;
// v3 = 35; ❌ Error: Assignment to constant variable
console.log("const:", v3);

// Hoisting behavior
console.log("Hoisting with var:", x); // undefined (declaration hoisted, value not yet assigned)
var x = 50;

// console.log(y); ❌ Error: Cannot access 'y' before initialization
let y = 100;
