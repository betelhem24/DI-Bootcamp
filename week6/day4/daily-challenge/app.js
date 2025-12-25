// const { greet } = require("./helpers/greeting.cjs");
import { greet } from "./helpers/greeting.cjs";
import {
  dispalyColorMessage,
  dispalyErrorMessage,
} from "./helpers/colorful-message.js";
import { read_file } from "./helpers/read-file.js";

console.log(greet("Dan"));

console.log(dispalyColorMessage("Happy Hanuka!!!"));
console.log(dispalyErrorMessage("Something went wrong..."));

try {
  const data = await read_file("./files/data.txt");
  console.log(dispalyColorMessage(data));
} catch (error) {
  console.log(dispalyErrorMessage(error.message));
}
