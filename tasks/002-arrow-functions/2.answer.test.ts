import { log } from "util";

const isNumber = (value:number) :boolean => {
  if (typeof value === "number") {
    return true;
  } else if (typeof value === "string" && Number.isNaN(parseFloat(value))) {
    return true;
  } else {
    return false;
  }
};

const createRange = (from : number, to :number): Array<number> => {
  const range = [];
  for (let i = from; i <= to; i++) {
    range.push(i);
  }
  return range;
};

const forEachElement = (elements:Array<any>, action:Function): void => {
  for (const element of elements) {
    action(element);
  }
};

function logName(name:string): void{
  console.log(name);
}

forEachElement(["Miguel", "Tomomi", "Limon"], logName);

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

export {};
