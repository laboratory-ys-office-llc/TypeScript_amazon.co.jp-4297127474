import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your age? ", (age: string) => {
  const num: number = Number(age);
  console.log(num + 1000);
  rl.close();
});
