// 1.2 - Returns true if the provided value is a number or can be transformed into a number
// 1.3 - boolean
// 1.4 - value:any (can be any type of value)
const isNumber = (value) => {
  if (typeof value === "number") {
    return true;
  } else if (typeof value === "string" && Number.isNaN(parseFloat(value))) {
    return true;
  } else {
    return false;
  }
};

// 1.2 - Creates an array with numbers that go from the number provided in
// "from" to the number provided in "to"
// 1.3 - array of numbers
// 1.4 - from: number, to: number
const createRange = (from, to) => {
  const range = [];
  for (let i = from; i <= to; i++) {
    range.push(i);
  }
  return range;
};

// 1.2 - Receives an array and a function and executes the function one time
// per element in the array, providing the element to the array as its parameter
// 1.3 - undefined (it doesn't return anything explicitly so its return value is
// undefined)
// 1.4 - elements: array, action: function
const forEachElement = (elements, action) => {
  for (const element of elements) {
    action(element);
  }
};

// ============ DO NOT EDIT ============

// === Tests
describe("Arrow functions", () => {
  describe("isNumber", () => {
    test("is defined", () => expect(isNumber).toBeDefined());
    test("is function", () => expect(typeof isNumber).toEqual("function"));
  });
  describe("createRange", () => {
    test("is defined", () => expect(createRange).toBeDefined());
    test("is function", () => expect(typeof createRange).toEqual("function"));
  });
  describe("forEachElement", () => {
    test("is defined", () => expect(forEachElement).toBeDefined());
    test("is function", () => expect(typeof forEachElement).toEqual("function"));
  });
});
// === End: Tests
