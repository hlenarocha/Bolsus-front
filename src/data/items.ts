import { Item } from "../types/Item";

/* Array de objetos 
Importante criar interface de tipagem no TS!
*/

export const items: Item[] = [
  {date: new Date(2021, 9, 15), category: 'food', title: 'McDonalds', value: 32.12},
  {date: new Date(2021, 9, 15), category: 'food', title: 'BurguerKing', value: 28},
  {date: new Date(2021, 9, 16), category: 'rent', title: 'Aluguel', value: 1000},
  {date: new Date(2021, 9, 18), category: 'salary', title: 'Salário', value: 3500.90}
];