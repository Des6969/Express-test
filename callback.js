//Write a js function to compare and find items in 2 arrays using callback function

const arrA = ["pasta", "pizza", "icecream"];
const arrB = ["pasta", "cake", "icecream"];

const result = (solution) => {
  return solution;
};

const compArray = (arr1, arr2, result) => {
  const answer = arr1.filter((food) => arr2.includes(food));
  return result(answer);
};
const response = compArray(arrA, arrB, result);
console.log({ response });
