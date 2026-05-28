import Books from "./Books.ts";

console.table(Books.getAll());
console.log(Books.getCheapest());
console.table(Books.sortByPriceASC());
console.table(Books.sortByNameASC());
console.table(Books.sortByPriceASC(false));
console.table(Books.sortByNameASC(false));
