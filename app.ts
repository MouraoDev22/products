import Books from "./Books.ts";

console.table(Books.getAll());
console.table(Books.getCheapest());
console.table(Books.sortByPriceASC());
console.table(Books.sortByNameASC());
console.table(Books.getCheapest(false));
console.table(Books.sortByPriceASC(false));
console.table(Books.sortByNameASC(false));
