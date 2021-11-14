// Erase me
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// ============ DO NOT EDIT ============

// === Tests
describe("Solution: getFullName", () => {
  test("is defined", () => expect(getFullName).toBeDefined());
  test("is function", () => expect(typeof getFullName).toEqual("function"));
  test("returns a full name", () => {
    expect(getFullName("John", "Stone")).toEqual("John Stone");
    expect(getFullName("Tim", "Burton")).toEqual("Tim Burton");
  });
});
// === End: Tests
