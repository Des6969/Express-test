//afaile lekheko code tya janu parne

const properFormat = (num) => {
  return num.toLocaleString();
};
const result = properFormat(10000);
console.log(result);

module.exports = { properFormat };
