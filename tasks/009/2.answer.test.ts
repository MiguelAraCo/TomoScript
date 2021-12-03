export type InventoryEntry = {
  id: string;
  stock: number;
};

export type Product = {
  id: string;
  name: string;
  size: "s" | "m" | "l";
  price: number;
  discount?: number;
};

export type Store = {
  name: string;
  products: Array<Product>;
  warehouses: Array<Warehouse>;
  inventory: Array<InventoryEntry>;
};

export type Warehouse = {
  name: string;
  inventory: Array<InventoryEntry>;
};

const getProductStock = (productId: string, inventory: Array<InventoryEntry>): number => {
  for (const currentInventory of inventory) {
    if (productId === currentInventory.id) {
      return currentInventory.stock;
    }
  }
};

// const inventories: Array<Array<InventoryEntry>> = [];
// inventories.push(store.inventory):
// for (const warehouse of store.warehouses){
//   inventories.push(warehouse.inventory):
// }

const getProductCombinedStock = (productId: string, store: Store): number => {
  let combinedStock: number = 0;
  // Get stock from the store
  combinedStock += getProductStock(productId, store.inventory);
  for (const warehouse of store.warehouses) {
    // Get stock from the current warehouse
    combinedStock += getProductStock(productId, warehouse.inventory);
  }
  return combinedStock;
};

const getProductStatus = (stock: number): "low" | "critical" | "normal" => {
  if (stock <= 20) {
    return "critical";
  } else if (stock >= 21 && stock <= 50) {
    return "low";
  } else {
    return "normal";
  }
};

const checkProducts = (
  store: Store
): {
  /**
   * Product ids for which the combined stock is less than 20
   * (=what are the product ids which have only 20stocks in total)
   */
  critical: Array<string>;
  /**
   * Product ids for which the combined stock is between 21 and 50
   */
  low: Array<string>;
} => {
  const low: Array<string> = [];
  const critical: Array<string> = [];

  // For each product, I need to know if it's low or critical
  for (const product of store.products) {
    const productId = product.id;
    const stock = getProductCombinedStock(productId, store);
    const status = getProductStatus(stock);

    // Add the product.id to the right array
    switch (status) {
      case "normal":
        break;
      case "low":
        low.push(productId);
        break;
      case "critical":
        critical.push(productId);
        break;
    }
  }

  return {
    low: low,
    critical: critical,
  };
};

describe("009", () => {
  describe("checkProducts", () => {
    test("is defined", () => expect(checkProducts).toBeDefined());
    test("is function", () => expect(typeof checkProducts).toEqual("function"));
    test("properly classifies products", () => {
      const data = require("./test-data-01.json");
      const answer = require("./test-data-answer.json");

      expect(checkProducts(data)).toEqual(answer);
    });
  });
});

export {};
