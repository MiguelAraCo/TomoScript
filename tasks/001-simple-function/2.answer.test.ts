// Erase me
let getFullName;

// ============ DO NOT EDIT ============

// === Tests
describe("getFullName", () => {
  test("is defined", () => expect(getFullName).toBeDefined());
  test("is function", () => expect(typeof getFullName).toEqual("function"));
  test("returns a full name", () => {
    expect(getFullName("John", "Stone")).toEqual("John Stone");
    expect(getFullName("Tim", "Burton")).toEqual("Tim Burton");
  });
});
// === End: Tests
