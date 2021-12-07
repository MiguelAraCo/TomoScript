// ============ DO NOT EDIT ============
// Provided code
// ============ DO NOT EDIT ============

type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  ask: (question: string) => string;
};

// Write code below this line!

// ============ DO NOT EDIT ============
// === Tests
// ============ DO NOT EDIT ============
describe("010-maps", () => {
  describe("collectAnswers", () => {
    test("is defined", () => expect(collectAnswers).toBeDefined());
    test("is function", () => expect(typeof collectAnswers).toEqual("function"));
    test("properly divides students into passing/failing lists", () => {
      function ask(this: Employee, question: string): string {
        switch (question) {
          case "What's your age?":
            return `I'm ${this.age} years old`;
          case "What's your full name?":
            return `My name is ${this.firstName} ${this.lastName}`;
          default:
            return "I didn't understand your question";
        }
      }

      let employees: Array<Employee> = [require("./1.4.1.data.json")];
      employees = employees.map((e) => ({ ...e, ask }));

      expect(collectAnswers(employees)).toEqual(require("./1.4.2.answer.json"));
    });
  });
});
// === End: Tests

export {};
