import type { Product } from "./Product.ts";

class Products {
  constructor(list: Product[], listCopy: Product[] = [...list]) {
    this.list = list;
    this.listCopy = listCopy;
  }
  private list: Product[];
  private listCopy: Product[];

  getAll(): Product[] {
    return this.list;
  }

  getCheapest(ascending: boolean = true): Product {
    if (ascending) {
      let cheapestProduct: Product = this.listCopy[0];

      for (const currentProduct of this.listCopy) {
        if (currentProduct.price < cheapestProduct.price) {
          cheapestProduct = currentProduct;
        }
      }

      return cheapestProduct;
    } else {
      let mostExpensiveProduct: Product = this.listCopy[0];

      for (const currentProduct of this.listCopy) {
        if (currentProduct.price > mostExpensiveProduct.price) {
          mostExpensiveProduct = currentProduct;
        }
      }

      return mostExpensiveProduct;
    }
  }

  sortByPriceASC(ascending: boolean = true): Product[] {
    this.resetListCopy();
    if (ascending) {
      let newProducts: Product[] = [];

      while (this.listCopy.length > 0) {
        let cheapestProduct: Product = this.getCheapest();
        newProducts.push(cheapestProduct);
        this.listCopy.splice(this.listCopy.indexOf(cheapestProduct), 1);
      }

      this.resetListCopy();
      return newProducts;
    } else {
      let newProducts: Product[] = [];

      while (this.listCopy.length > 0) {
        let mostExpensiveProduct: Product = this.getCheapest(false);
        newProducts.push(mostExpensiveProduct);
        this.listCopy.splice(this.listCopy.indexOf(mostExpensiveProduct), 1);
      }

      this.resetListCopy();
      return newProducts;
    }
  }

  sortByNameASC(ascending: boolean = true): Product[] {
    this.resetListCopy();

    for (
      let currentProductIndex: number = 1;
      currentProductIndex < this.listCopy.length;
      currentProductIndex++
    ) {
      let analyzedProductIndex: number = currentProductIndex;

      while (
        analyzedProductIndex > 0 &&
        (ascending
          ? this.listCopy[analyzedProductIndex].name <
            this.listCopy[analyzedProductIndex - 1].name
          : this.listCopy[analyzedProductIndex].name >
            this.listCopy[analyzedProductIndex - 1].name)
      ) {
        const analyzedProduct: Product = this.listCopy[analyzedProductIndex];
        const previousProduct: Product =
          this.listCopy[analyzedProductIndex - 1];

        this.listCopy[analyzedProductIndex] = previousProduct;
        this.listCopy[analyzedProductIndex - 1] = analyzedProduct;

        analyzedProductIndex--;
      }
    }

    const sortedProducts: Product[] = [...this.listCopy];
    this.resetListCopy();
    return sortedProducts;
  }

  private resetListCopy(): void {
    this.listCopy = [...this.list];
  }
}

export default Products;
