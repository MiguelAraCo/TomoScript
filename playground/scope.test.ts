type Product = {
  id: string;
};

type Company = {
  products: Array<Product>;
};

const getProductIds = (companies: Array<Company>): Array<string> => {
  const productIds: Array<string> = [];
  for (const company of companies) {
    for (const product of company.products) {
      productIds.push(product.id);
    }
  }
  return productIds;
};

const productIds1 = getProductIds([
  {
    products: [
      {
        id: "1",
      },
    ],
  },
  {
    products: [
      {
        id: "2",
      },
    ],
  },
]);

console.log(productIds1);

const productIds2 = getProductIds([
  {
    products: [
      {
        id: "3",
      },
    ],
  },
  {
    products: [
      {
        id: "4",
      },
    ],
  },
]);

console.log(productIds2);

describe("scope", () => {});

export {};
