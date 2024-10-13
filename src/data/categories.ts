import { Category } from "../types/Category"

/* Objetos de objetos 
Para o TS reconhecer a tipagem da chave do objeto (food, rent...), é necessário especificar
no type importado -> [tag: string]
*/

export const categories: Category = {
  food: { title: 'Alimentação', color: 'blue', expense: true },
  rent: { title: 'Aluguel', color: 'brown', expense: true},
  salary: { title: 'Salário', color: 'green', expense: false}
}