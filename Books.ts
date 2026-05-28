import type { Product } from "./types/Product.ts";
import Products from "./types/Products.ts";

const books: Product[] = [
  {
    id: 1,
    name: "JavaScript",
    price: 25.0,
  },
  {
    id: 2,
    name: "PHP",
    price: 15.0,
  },
  {
    id: 3,
    name: "Java",
    price: 30.0,
  },
  {
    id: 4,
    name: "Elixir",
    price: 50.0,
  },
  {
    id: 5,
    name: "Go",
    price: 45.0,
  },
  {
    id: 6,
    name: "Python",
    price: 20.0,
  },
];

const Books: Products = new Products(books);

export default Books;
