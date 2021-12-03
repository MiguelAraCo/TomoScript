//const score = (score1: number, score2:number, score3: number): number => {
// for (let i = 0; i < score.length; i++ ) {
// return
//  }:

const getAverage = (scores: Array<number>): number => {
  let sum = 0;
  for (const score of scores) {
    sum = score + sum;
  }
  return sum / scores.length;
};

const getMaximum = (scores: Array<number>): number => {
  let maximum = null;
  for (const score of scores) {
    if (maximum === null || score > maximum) {
      maximum = score;
    }
  }
  return maximum;
};

const getMinimum = (scores: Array<number>): number => {
  let minimum = null;
  for (const score of scores) {
    if (minimum === null || score < minimum) {
      minimum = score;
    }
  }
  return minimum;
};

const isOdd = (value: number): boolean => {
  // TODO
  if (value % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

const getMedian = (scores: Array<number>): number => {
  if (isOdd(scores.length)) {
    const median = scores;
    median.sort(function (a, b) {
      return a - b;
    });
    const middleElement = scores.length / 2;
    const middlePosition = Math.round(middleElement);
    return scores[middlePosition];
  } else {
    const median = scores;
    median.sort(function (a, b) {
      return a - b;
    });
    const middlePosition = scores.length / 2;
    const middleElement = scores[middlePosition];
    const middlePosition2 = scores.length / 2 - 1;
    const middleElement2 = scores[middlePosition2];
    return (middleElement + middleElement2) / 2;
  }
};

type StatisticsObject = {
  average: number;
  maximum: number;
  minimum: number;
  median: number;
}

const getStatistics = (
  scores: Array<number>
): StatisticsObject => {
  const average = getAverage(scores);
  const maximum = getMaximum(scores);
  const minimum = getMinimum(scores);
  const median = getMedian(scores);

  return {
    average,
    maximum: maximum,
    minimum: minimum,
    median: median,
  };
};

// ============ DO NOT EDIT ============

// === Tests
describe("Function practice", () => {
  const scores = [5, 6, 4, 7, 4, 6, 4, 7, 5, 3, 5, 4, 10].sort((a, b) => a - b);
  describe("getAverage", () => {
    test("is defined", () => expect(getAverage).toBeDefined());
    test("is function", () => expect(typeof getAverage).toEqual("function"));
    test("calculates average", () =>
      expect(getAverage(scores)).toEqual(scores.reduce((a, b) => a + b, 0) / scores.length));
  });
  describe("getMaximum", () => {
    test("is defined", () => expect(getMaximum).toBeDefined());
    test("is function", () => expect(typeof getMaximum).toEqual("function"));
    test("calculates maximum", () => {
      expect(getMaximum(scores)).toEqual(scores[scores.length - 1]);
    });
  });
  describe("getMinimum", () => {
    test("is defined", () => expect(getMinimum).toBeDefined());
    test("is function", () => expect(typeof getMinimum).toEqual("function"));
    test("calculates minimum", () => {
      expect(getMinimum(scores)).toEqual(scores[0]);
    });
  });
  describe("getMedian", () => {
    test("is defined", () => expect(getMedian).toBeDefined());
    test("is function", () => expect(typeof getMedian).toEqual("function"));
    test("calculates median for arrays with odd length", () => {
      expect(getMedian(scores)).toEqual(scores[Math.floor(scores.length / 2)]);
    });
    test("calculates median for arrays with even length", () => {
      const scoresWithEvenLength = [1, 2, 3, 4, 5, 6, 7, 8];
      const result =
        (scoresWithEvenLength[scoresWithEvenLength.length / 2 - 1] +
          scoresWithEvenLength[scoresWithEvenLength.length / 2]) /
        2;
      expect(getMedian(scoresWithEvenLength)).toEqual(result);
    });
  });
  describe("getStatistics", () => {
    test("is defined", () => expect(getStatistics).toBeDefined());
    test("is function", () => expect(typeof getStatistics).toEqual("function"));
    test("returns a value with the requested statistics", () => {
      expect(getStatistics(scores)).toMatchObject({
        average: scores.reduce((a, b) => a + b, 0) / scores.length,
        maximum: scores[scores.length - 1],
        minimum: scores[0],
        median: scores[Math.floor(scores.length / 2)],
      });
    });
  });
});
// === End: Tests
