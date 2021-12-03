type Product = {
  id: string;
  name: string;
  size: "s" | "m" | "l";
  price: number;
  discount?: number;
};

type Company = {
  name: string;
  products: Array<Product>;
};

const isDiscounted = (product: Product): boolean => {
  return product.discount !== undefined;
};

const getProductsOnSale = (companies: Array<Company>): Array<string> => {
  // TODO: Return an array with the ids of products that are discounted
  // Hint: Loops can have loops inside too!

  const discountedProductsIds:Array<string> = [];
  for (const company of companies) {
    for (const product of company.products) {
      if (isDiscounted(product)) {
        discountedProductsIds.push(product.id);
      }
    }
  }
  return discountedProductsIds;
};

describe("008", () => {
  describe("getProductsOnSale", () => {
    test("is defined", () => expect(getProductsOnSale).toBeDefined());
    test("is function", () => expect(typeof getProductsOnSale).toEqual("function"));
    test("properly divides people into under age and over age", () => {
      const data: Array<Company> = [
        {
          name: "Kari",
          products: [
            { id: "ec8e6c93-4a0a-493e-a4c9-97fa0736d98c", name: "Shoes", size: "s", price: 412 },
            { id: "5790c150-8636-4166-8039-0b2b26bb0765", name: "Gloves", size: "l", price: 854 },
            { id: "8263e357-dceb-4d27-9cf1-cd498710a87c", name: "Gloves", size: "s", price: 728 },
            { id: "c517fc94-ae3f-422b-acb6-dfd0578e388e", name: "Fish", size: "s", price: 745, discount: 38 },
            { id: "7486bb51-3e36-44cf-8c20-c140c3ac296a", name: "Cheese", size: "m", price: 478 },
            { id: "8e1fe962-b232-440b-9773-c2a586d7ddad", name: "Bacon", size: "m", price: 589 },
            { id: "2fe5a4f8-66c5-44fc-829c-a05b24316322", name: "Soap", size: "l", price: 886 },
            { id: "cf72bfef-6c04-4bfb-854b-1b5c87eed05a", name: "Mouse", size: "l", price: 451 },
          ],
        },
        {
          name: "Virginie",
          products: [
            { id: "a9cf2f9c-068f-49ca-8729-449d53b4ef2f", name: "Sausages", size: "m", price: 974 },
            { id: "3c76ca6d-e4aa-45d5-90ca-dd21a645e416", name: "Bike", size: "m", price: 906 },
            { id: "1ddbbbe6-217a-409d-b587-1d1d969d024d", name: "Ball", size: "l", price: 845 },
            { id: "99719613-0391-4237-90fb-e67203d4f165", name: "Cheese", size: "s", price: 633 },
            { id: "9690acc2-4806-4c53-a778-ae691ca106a2", name: "Bike", size: "s", price: 769 },
            { id: "9be941f9-463a-4bd7-95f3-0f545cf86149", name: "Bike", size: "s", price: 331 },
            { id: "6c28ad42-8b17-492f-9d43-1606eb42c8ba", name: "Chips", size: "m", price: 474, discount: 33 },
            { id: "4f6e9918-4e3b-4bf7-8360-3718286954b5", name: "Ball", size: "l", price: 857, discount: 29 },
            { id: "d738958f-cd2f-4354-be82-96973e996776", name: "Pants", size: "l", price: 398 },
            { id: "ac87a7d1-ef55-4f3d-b3a2-cc3cfc62f75a", name: "Cheese", size: "s", price: 771, discount: 49 },
            { id: "d110401e-2982-4a80-9f79-9ff61e6a640e", name: "Car", size: "m", price: 324 },
            { id: "54853c4c-c608-4898-bfb1-ac0477911dd6", name: "Hat", size: "m", price: 727 },
            { id: "06894b3b-2925-441f-a9fa-e76626bbaa4d", name: "Ball", size: "m", price: 511 },
            { id: "c1d616f6-a8b4-4289-b48b-3a50623e4330", name: "Table", size: "m", price: 800 },
            { id: "971101a8-3d21-4001-ae51-ef1b670438f8", name: "Chair", size: "l", price: 935 },
            { id: "a8310c60-439f-49b1-b419-f7fa3839490a", name: "Pizza", size: "m", price: 342, discount: 39 },
            { id: "47eea3c9-beb0-4b13-b8d1-b6e87a387068", name: "Pants", size: "l", price: 99, discount: 18 },
            { id: "7362b916-a1b1-4814-9504-409500d59110", name: "Towels", size: "m", price: 484 },
            { id: "6c801a48-277a-474b-b5c0-8332c1ab7c5a", name: "Fish", size: "m", price: 391 },
            { id: "c482c5d1-ab15-4d28-a041-364bb0771303", name: "Shirt", size: "m", price: 636 },
          ],
        },
        {
          name: "Mariam",
          products: [
            { id: "55d4936b-396c-4bb8-9ae6-fcad5c74dd22", name: "Mouse", size: "l", price: 272, discount: 52 },
            { id: "2ab0c93f-196c-4f28-a09d-dfc618526627", name: "Chicken", size: "m", price: 644 },
            { id: "7298fb6c-ba92-4734-9369-499b793f8e78", name: "Ball", size: "m", price: 363 },
            { id: "1e638339-aa14-40a5-b244-8b5cdbd63358", name: "Soap", size: "m", price: 816 },
            { id: "9c713644-4949-4ca7-beaa-f5b196bf0517", name: "Fish", size: "l", price: 483 },
            { id: "4b2444e0-d0a6-4bf9-b1d7-69518cc20e8c", name: "Bacon", size: "s", price: 594 },
            { id: "ae830eef-c470-42db-8587-6136d216589c", name: "Mouse", size: "l", price: 966 },
            { id: "883c98ca-5e7c-4237-aebe-cbd36ca0a638", name: "Keyboard", size: "l", price: 425 },
            { id: "ee90aae6-e0b6-4b3a-ad6b-66f39b96333f", name: "Chips", size: "l", price: 887 },
            { id: "e83ff034-99a1-4c80-b894-62258d6af744", name: "Pants", size: "l", price: 366 },
          ],
        },
        {
          name: "Clyde",
          products: [
            { id: "199369cd-f384-45d5-aa8f-8ed351ee341f", name: "Table", size: "m", price: 131 },
            { id: "ff2f9503-46b9-4131-b886-5e5ee3cbb2b8", name: "Car", size: "l", price: 401 },
            { id: "1453a87c-28bf-4eea-b325-51d66f82eafe", name: "Shoes", size: "s", price: 951 },
            { id: "9ca7da72-4ab9-40a6-8010-2b4fddff3835", name: "Shoes", size: "s", price: 807 },
            { id: "fc7d5d19-189f-4baa-bf44-1e6a1fdfe268", name: "Cheese", size: "l", price: 551 },
            { id: "686dcf5f-6a5b-4389-88cd-34e36c8c9b32", name: "Gloves", size: "l", price: 40 },
            { id: "fa9b9825-8ca3-4b9c-b324-233e598ae5bd", name: "Chair", size: "m", price: 118 },
            { id: "15c1e6a4-a281-45f9-bd46-d1ac2c959fbe", name: "Computer", size: "s", price: 915 },
            { id: "9cfc70e5-5735-47d1-9bd6-45ff7c04bae2", name: "Fish", size: "s", price: 311 },
            { id: "7bf71bbf-abc3-4382-a202-01e411281f80", name: "Gloves", size: "l", price: 963 },
          ],
        },
        {
          name: "Jarrett",
          products: [
            { id: "d2c63a6d-c0a2-40a9-9eb9-333d767e4b38", name: "Car", size: "s", price: 94 },
            { id: "d50aba41-1d11-4b5a-9b02-087a02fcd3fd", name: "Salad", size: "m", price: 419 },
            { id: "ba2e30f3-3fe6-4069-b1e6-a130122592c5", name: "Car", size: "l", price: 732 },
            { id: "b8d3ea04-33e5-4579-8d4a-ee3cdb640404", name: "Towels", size: "m", price: 860 },
            { id: "1cbee238-ec6a-4044-813b-feb80441a0a8", name: "Chicken", size: "s", price: 207 },
            { id: "ee55b1f5-d1e8-422e-a3f9-fc70c06c8707", name: "Towels", size: "m", price: 108 },
            { id: "9a60ae32-a525-439d-b90f-b8a69c93b1c3", name: "Car", size: "s", price: 561 },
            { id: "80858421-2d9a-4c4a-a293-5b907adccd68", name: "Shoes", size: "l", price: 444 },
            { id: "1c0c0486-c3db-46d6-a9be-051ca859e8b1", name: "Sausages", size: "l", price: 541, discount: 24 },
            { id: "eb4c7651-7d17-4bd0-a04a-aaeb754c972a", name: "Sausages", size: "m", price: 79, discount: 39 },
            { id: "c5210c29-f93a-447a-aca1-dc46732d1777", name: "Cheese", size: "m", price: 106 },
            { id: "d3722857-6185-4536-8c13-5761c617f868", name: "Chips", size: "m", price: 849, discount: 60 },
            { id: "d501e390-63a8-4164-9fb1-43bef79b0de2", name: "Salad", size: "s", price: 558 },
            { id: "2f1fb2a9-cc09-483c-b999-136cec44de13", name: "Towels", size: "l", price: 327 },
            { id: "9e321ed2-b536-4019-9c05-d38cbc862a72", name: "Gloves", size: "l", price: 620 },
            { id: "bd00f513-a5f1-46e4-82bb-a2d4e73b2162", name: "Shoes", size: "s", price: 601, discount: 37 },
            { id: "796eadc3-4b99-42c6-bbb2-9f8331cad415", name: "Tuna", size: "s", price: 140 },
            { id: "30d0c5fd-9a52-4130-a546-6eaeff917754", name: "Sausages", size: "l", price: 934, discount: 62 },
            { id: "ec80194f-9322-40d0-b8e2-964c844a0e18", name: "Salad", size: "m", price: 351 },
          ],
        },
      ];
      const answer = [
        "c517fc94-ae3f-422b-acb6-dfd0578e388e",
        "6c28ad42-8b17-492f-9d43-1606eb42c8ba",
        "4f6e9918-4e3b-4bf7-8360-3718286954b5",
        "ac87a7d1-ef55-4f3d-b3a2-cc3cfc62f75a",
        "a8310c60-439f-49b1-b419-f7fa3839490a",
        "47eea3c9-beb0-4b13-b8d1-b6e87a387068",
        "55d4936b-396c-4bb8-9ae6-fcad5c74dd22",
        "1c0c0486-c3db-46d6-a9be-051ca859e8b1",
        "eb4c7651-7d17-4bd0-a04a-aaeb754c972a",
        "d3722857-6185-4536-8c13-5761c617f868",
        "bd00f513-a5f1-46e4-82bb-a2d4e73b2162",
        "30d0c5fd-9a52-4130-a546-6eaeff917754",
      ];

      expect(getProductsOnSale(data)).toEqual(answer);
    });
  });
});

export {};
