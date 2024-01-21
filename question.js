//js function that converts text into ... statement
//Eg i am des and i am a mern student
//description generator

const textShortener = (string) =>
  string.length >= 10 ? string.slice(0, 10).concat("...") : string;

const response = textShortener("i am des and i am a mern student");
console.log({ response });

//js function that returns boolean when correct number is psssed

const findCorrectPhone = (number) => {
  const stringNum = String(number);
  if (stringNum.length < 10 || stringNum.length > 10) return false;
  return stringNum.startsWith("98");
};

const resp = findCorrectPhone("0176543210");
console.log({ resp });
