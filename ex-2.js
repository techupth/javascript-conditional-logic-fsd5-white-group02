//Exercise 2
let lightBulbStatus = "Broken";

if ((lightBulbStatus = "Broken")) {
  console.log("Light bulb is Broken.");
} else if ((lightBulbStatus = "On")) {
  console.log("On.");
} else if ((lightBulbStatus = "Off")) {
  console.log("Off.");
} else {
  console.log("“Please choose the correct input (On/Off/Broken)”");
}
