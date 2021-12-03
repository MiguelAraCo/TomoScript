// ============ DO NOT EDIT ============
// Provided code
// ============ DO NOT EDIT ============

type Color = {
  name: string;
  code: string;
};

// Write code below this line!

// ============ DO NOT EDIT ============
// === Tests
// ============ DO NOT EDIT ============
describe("010-maps", () => {
  describe("indexByName", () => {
    test("is defined", () => expect(indexByName).toBeDefined());
    test("is function", () => expect(typeof indexByName).toEqual("function"));
    test("properly divides students into passing/failing lists", () => {
      expect(indexByName(require('./001-data.json'))).toEqual(require('./001-answer.json'));
    });
  });

});
// === End: Tests

export {};
