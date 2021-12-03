type Person = {
  name: string;
  age: number;
};

const isUnderAge = (person: Person): boolean => {
  return person.age < 18;
};

const categorizePeople = (
  people: Array<Person>
): {
  under: Array<Person>;
  over: Array<Person>;
} => {
  const under = [];
  const over = [];

  // question in my head: (const currentPerson of ?) (how can i access to Array or I just declare => people doesnt get it recognized
  // Solving it in my head :That was because it was outside of function (const categorizePeople) check carefully and think about how far } or }; cover)
  for (const currentPerson of people) {
    if (isUnderAge(currentPerson)) {
      under.push(currentPerson);
    } else {
      over.push(currentPerson);
    }
  }
  return { under: under, over: over };
};

describe("006", () => {
  describe("evaluateStudents", () => {
    test("is defined", () => expect(categorizePeople).toBeDefined());
    test("is function", () => expect(typeof categorizePeople).toEqual("function"));
    test("properly divides people into under age and over age", () => {
      const testData = [
        { name: "Annabelle", age: 78 },
        { name: "Ada", age: 1 },
        { name: "Mariana", age: 74 },
        { name: "Liam", age: 48 },
        { name: "Oswald", age: 34 },
        { name: "Hector", age: 59 },
        { name: "Dave", age: 93 },
        { name: "Eryn", age: 61 },
        { name: "Delphia", age: 59 },
        { name: "Nicolas", age: 26 },
        { name: "Eunice", age: 6 },
        { name: "Domenico", age: 37 },
        { name: "Adah", age: 3 },
      ];

      expect(categorizePeople(testData)).toEqual({
        under: [
          { name: "Ada", age: 1 },
          { name: "Eunice", age: 6 },
          { name: "Adah", age: 3 },
        ],
        over: [
          { name: "Annabelle", age: 78 },
          { name: "Mariana", age: 74 },
          { name: "Liam", age: 48 },
          { name: "Oswald", age: 34 },
          { name: "Hector", age: 59 },
          { name: "Dave", age: 93 },
          { name: "Eryn", age: 61 },
          { name: "Delphia", age: 59 },
          { name: "Nicolas", age: 26 },
          { name: "Domenico", age: 37 },
        ],
      });
    });
  });
});

export {};
