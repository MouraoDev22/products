import type { Product } from "./types/Product.ts";
import Products from "./types/Products.ts";

const edFolha: Product[] = [
  {
    name: "PHP",
    price: 15,
  },
  {
    name: "JavaScript",
    price: 25,
  },
  {
    name: "Java",
    price: 30,
  },
  {
    name: "Go",
    price: 45,
  },
  {
    name: "Elixir",
    price: 50,
  },
];

const edGalho: Product[] = [
  {
    name: "Python",
    price: 20,
  },
  {
    name: "Rust",
    price: 22,
  },
  {
    name: "Ruby",
    price: 28,
  },
  {
    name: "C#",
    price: 33,
  },
  {
    name: "C++",
    price: 35,
  },
  {
    name: "Scala",
    price: 40,
  },
];

const books: Product[] = [...edFolha, ...edGalho];

const Books: Products = new Products(books);

export default Books;
