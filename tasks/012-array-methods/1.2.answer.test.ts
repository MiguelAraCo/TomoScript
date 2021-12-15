// ============ DO NOT EDIT ============
// Provided code
// ============ DO NOT EDIT ============

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  dogs: Array<string>;
};

// Write code below this line!

// ============ DO NOT EDIT ============
// === Tests
// ============ DO NOT EDIT ============
describe("012-array-methods", () => {
  describe("getDogOwners", () => {
    test("is defined", () => expect(getDogOwners).toBeDefined());
    test("is function", () => expect(typeof getDogOwners).toEqual("function"));
    test("returns an array of dog owners", () => {
      expect(getDogOwners(require("./1.4.1.data.json"))).toEqual(require("./1.4.2.1.answer.json"));
    });
  });
  describe("getFullNames", () => {
    test("is defined", () => expect(getFullNames).toBeDefined());
    test("is function", () => expect(typeof getFullNames).toEqual("function"));
    test("returns an array of full names", () => {
      expect(getFullNames(require("./1.4.1.data.json"))).toEqual(require("./1.4.2.2.answer.json"));
    });
  });
  describe("getAverageAge", () => {
    test("is defined", () => expect(getAverageAge).toBeDefined());
    test("is function", () => expect(typeof getAverageAge).toEqual("function"));
    test("returns an array of dog owners", () => {
      expect(getAverageAge(require("./1.4.1.data.json"))).toEqual(45.743589743589745);
    });
  });
});
// === End: Tests

export {};
