// ===== SWITCH CASE DEMO =====
function switchDemo() {
  // Example 1: switch with number
  let day = 2;
  switch (day) {
    case 1:
      console.log("Day is Monday");
      break;
    case 2:
      console.log("Day is Tuesday");
      break;
    case 3:
      console.log("Day is Wednesday");
      break;
    default:
      console.log("Invalid day");
  }

  // Example 2: switch with string
  let fruit = "apple";
  switch (fruit) {
    case "apple":
      console.log("Fruit is Apple");
      break;
    case "banana":
      console.log("Fruit is Banana");
      break;
    case "orange":
      console.log("Fruit is Orange");
      break;
    default:
      console.log("Unknown fruit");
  }

  // Example 3: switch with boolean
  let isLoggedIn = true;
  switch (isLoggedIn) {
    case true:
      console.log("User is logged in");
      break;
    case false:
      console.log("User is logged out");
      break;
    default:
      console.log("Unknown state");
  }
}

switchDemo();

let x = "10"; // string

switch (x) {
  case 10: // number
    console.log("Matched number 10");
    break;
  case "10": // string
    console.log("Matched string '10'");
    break;
  default:
    console.log("No match");
}
