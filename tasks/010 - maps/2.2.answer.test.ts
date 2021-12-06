// ============ DO NOT EDIT ============
// Provided code
// ============ DO NOT EDIT ============

type Store = {
  name: string;
  employees: Array<Employee>;
};

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

// Write code below this line!

// ============ DO NOT EDIT ============
// === Tests
// ============ DO NOT EDIT ============
describe("010-maps-02", () => {
  describe("createEmployeeDirectory", () => {
    test("is defined", () => expect(createEmployeeDirectory).toBeDefined());
    test("is function", () => expect(typeof createEmployeeDirectory).toEqual("function"));
    test("properly divides students into passing/failing lists", () => {
      expect(createEmployeeDirectory(require("./2.4.1.data.json"))).toEqual(require("./2.4.2.answer.json"));
    });
  });
});
// === End: Tests

export {};
