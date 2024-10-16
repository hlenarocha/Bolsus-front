import { Item } from "../types/Item";

/* Array de objetos 
Importante criar interface de tipagem no TS!
*/

export const items: Item[] = [
  {date: new Date(2024, 9, 11), category: 'food', title: 'McDonalds', value: 32.12},
  {date: new Date(2024, 9, 11), category: 'rent', title: 'BurguerKing', value: 28},
  {date: new Date(2024, 11, 6), category: 'rent', title: 'Aluguel', value: 1000},
  {date: new Date(2024, 12, 20), category: 'salary', title: 'Salário', value: 3500.90}
];
