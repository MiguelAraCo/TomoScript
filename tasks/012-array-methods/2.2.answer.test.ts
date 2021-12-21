// ============ DO NOT EDIT ============
// Provided code
// ============ DO NOT EDIT ============

// Write code below this line!

// ============ DO NOT EDIT ============
// === Tests
// ============ DO NOT EDIT ============
describe("012.2-array-methods", () => {
  describe("getMinBaseStats", () => {
    test("is defined", () => expect(getMinBaseStats).toBeDefined());
    test("is function", () => expect(typeof getMinBaseStats).toEqual("function"));
    test("returns an array of dog owners", () => {
      const pokemon = require("./../../datasets/pokemon.json");

      expect(getMinBaseStats(pokemon)).toEqual({
        HP: 1,
        Attack: 5,
        Defense: 5,
        "Sp. Attack": 10,
        "Sp. Defense": 20,
        Speed: 5,
      });
    });
  });
});
// === End: Tests

export {};
