//write a js function that converts number into proper format
//eg:10000=>10,000

const properFormat = (num) => {
  return num.toLocaleString();
};
const result = properFormat(10000);
console.log(result);
