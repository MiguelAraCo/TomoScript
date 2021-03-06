// ============ DO NOT EDIT ============
// Provided code
// ============ DO NOT EDIT ============

type Student = {
  name: string;
  testResults: Array<number>;
};

const getAverage = (values: Array<number>): number => {
  let sum = 0;
  for (const value of values) {
    sum = value + sum;
  }
  return sum / values.length;
};
// MOMI-MEMO: arguments can be anything. If it names "values", its easier to use it in other codes.

const evaluateStudent = (student: Student): boolean => {
  if (getAverage(student.testResults) >= 6) {
    return true;
  } else {
    return false;
  }
};

const evaluateStudents = (
  students: Array<Student>
): {
  passed: Array<Student>;
  failed: Array<Student>;
} => {
  const passed = [];
  const failed = [];

  for (const currentStudent of students) {
    if(evaluateStudent(currentStudent)) {
      passed.push(currentStudent);
    } else {
      failed.push(currentStudent);
    }
  }
  return {
    passed: passed,
    failed: failed,
  };
};

// Write code here!

// ============ DO NOT EDIT ============
// === Tests
// ============ DO NOT EDIT ============
describe("005", () => {
  describe("evaluateStudent", () => {
    test("is defined", () => expect(evaluateStudent).toBeDefined());
    test("is function", () => expect(typeof evaluateStudent).toEqual("function"));
    test("properly divides students into passing/failing lists", () => {
      expect(evaluateStudent({ name: "Jorge", testResults: [6, 4, 9, 10, 5, 6] })).toEqual(true);
      expect(evaluateStudent({ name: "Miguel", testResults: [4, 5.5, 6, 3, 6, 4.5] })).toEqual(false);
    });
  });

  describe("evaluateStudents", () => {
    test("is defined", () => expect(evaluateStudents).toBeDefined());
    test("is function", () => expect(typeof evaluateStudents).toEqual("function"));
    test("properly divides students into passing/failing lists", () => {
      const students: Array<Student> = [
        {
          name: "Melany",
          testResults: [8, 9, 10, 9, 7, 9],
        },
        {
          name: "Imogene",
          testResults: [7, 8, 7, 9, 9, 7],
        },
        {
          name: "Constance",
          testResults: [9, 8, 9, 7, 10, 7],
        },
        {
          name: "Yoshiko",
          testResults: [9, 3, 3, 5, 9, 5],
        },
        {
          name: "Justice",
          testResults: [10, 7, 8, 10, 8, 9],
        },
        {
          name: "Bo",
          testResults: [1, 3, 5, 3, 7, 3],
        },
        {
          name: "Della",
          testResults: [5, 7, 1, 3, 5, 8],
        },
        {
          name: "Aliza",
          testResults: [1, 8, 4, 5, 4, 2],
        },
        {
          name: "Lexie",
          testResults: [4, 8, 4, 8, 2, 1],
        },
        {
          name: "Barry",
          testResults: [7, 6, 2, 10, 3, 8],
        },
        {
          name: "Cary",
          testResults: [8, 9, 7, 9, 8, 7],
        },
      ];

      expect(evaluateStudents(students)).toEqual({
        passed: [
          {
            name: "Melany",
            testResults: [8, 9, 10, 9, 7, 9],
          },
          {
            name: "Imogene",
            testResults: [7, 8, 7, 9, 9, 7],
          },
          {
            name: "Constance",
            testResults: [9, 8, 9, 7, 10, 7],
          },
          {
            name: "Justice",
            testResults: [10, 7, 8, 10, 8, 9],
          },
          {
            name: "Barry",
            testResults: [7, 6, 2, 10, 3, 8],
          },
          {
            name: "Cary",
            testResults: [8, 9, 7, 9, 8, 7],
          },
        ],
        failed: [
          {
            name: "Yoshiko",
            testResults: [9, 3, 3, 5, 9, 5],
          },
          {
            name: "Bo",
            testResults: [1, 3, 5, 3, 7, 3],
          },
          {
            name: "Della",
            testResults: [5, 7, 1, 3, 5, 8],
          },
          {
            name: "Aliza",
            testResults: [1, 8, 4, 5, 4, 2],
          },
          {
            name: "Lexie",
            testResults: [4, 8, 4, 8, 2, 1],
          },
        ],
      });
    });
  });
});
let sum = 0;
// === End: Tests

export {};
