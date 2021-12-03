function sum(value1: number, value2: number): number {
  return value1 + value2;
}

const isLongerThan = (name: string, length: number): boolean => {
  return name.length > length;
};

function logComputerInformation(ram: string, cpu: string): void{
  console.log(`My computer information:`);
  console.log(`Ram: ${ram}`);
  console.log(`Cpu: ${cpu}`);
}

function isNegative(value: number): boolean{
  if (value > 0) {
    return false;
  } else {
    return true;
  }
}

const prependIndex = (names: Array<string>): Array<string> => {
  const namesWithIndex: Array<string> = [];
  for (let i = 0; i < names.length; i++) {
    namesWithIndex.push(`${i}. ${names[i]}`);
  }
  return namesWithIndex;
};

// ============ DO NOT EDIT ============

// === Tests
describe("Function types", () => {
  describe("sum", () => {
    test("is defined", () => expect(sum).toBeDefined());
    test("is function", () => expect(typeof sum).toEqual("function"));
  });
  describe("isLongerThan", () => {
    test("is defined", () => expect(isLongerThan).toBeDefined());
    test("is function", () => expect(typeof isLongerThan).toEqual("function"));
  });
  describe("logComputerInformation", () => {
    test("is defined", () => expect(logComputerInformation).toBeDefined());
    test("is function", () => expect(typeof logComputerInformation).toEqual("function"));
  });
  describe("isNegative", () => {
    test("is defined", () => expect(isNegative).toBeDefined());
    test("is function", () => expect(typeof isNegative).toEqual("function"));
  });
  describe("prependIndex", () => {
    test("is defined", () => expect(prependIndex).toBeDefined());
    test("is function", () => expect(typeof prependIndex).toEqual("function"));
  });
});
// === End: Tests


export {};
