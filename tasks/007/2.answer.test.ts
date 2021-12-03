type Product = {
  id: string;
  name: string;
  size: "s" | "m" | "l";
  price: number;
  discount?: number;
};

const getProductsBySize = (
  products: Array<Product>
): {
  s: Array<string>;
  m: Array<string>;
  l: Array<string>;
} => {
  // TODO: Return an object with s, m, l properties where each have an array of product ids for the products that have the size

  const s = [];
  const m = [];
  const l = [];

  for (const product of products) {
    if (product.size === "s") {
      s.push(product.id);
    } else if (product.size === "m") {
      m.push(product.id);
    } else {
      l.push(product.id);
    }
  }
  return {s:s, m:m, l:l,}
};

describe("007", () => {
  describe("getProductsBySize", () => {
    test("is defined", () => expect(getProductsBySize).toBeDefined());
    test("is function", () => expect(typeof getProductsBySize).toEqual("function"));
    test("properly divides people into under age and over age", () => {
      const data: Array<Product> = [
        { id: "724f4b82-bbfb-45ae-9171-0c4d41ac00be", name: "Towels", size: "s", price: 822.0 },
        { id: "a0a20dc7-c4ee-416c-ba97-e4fa0fe932d6", name: "Ball", size: "s", price: 18.0 },
        { id: "376fcd73-0940-41f3-bdfc-519322080bfc", name: "Shirt", size: "s", price: 634.0 },
        { id: "bdde4e4a-0410-4725-80bc-627cfcd18741", name: "Chair", size: "s", price: 670.0 },
        { id: "537a6038-847b-41e5-9650-b0924452608f", name: "Gloves", size: "l", price: 865.0, discount: 42 },
      ];
      const answer = {
        s: [
          "724f4b82-bbfb-45ae-9171-0c4d41ac00be",
          "a0a20dc7-c4ee-416c-ba97-e4fa0fe932d6",
          "376fcd73-0940-41f3-bdfc-519322080bfc",
          "bdde4e4a-0410-4725-80bc-627cfcd18741",
        ],
        m: [],
        l: ["537a6038-847b-41e5-9650-b0924452608f"],
      };

      expect(getProductsBySize(data)).toEqual(answer);
    });
  });
});

export {};
