// Write code here!

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
