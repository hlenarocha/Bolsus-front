import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');

  for(let i = 0; i < list.length; i++) {
    const itemDate = new Date(list[i].date);

    if (
      itemDate.getFullYear() === parseInt(year) &&
      (itemDate.getMonth() + 1) === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }


  return newList;
}

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.toISOString().slice(8, 10);

  return `${(day)}/${addZeroToDate(month)}/${year}`;

}

const addZeroToDate = (n: number): string => n < 10 ?`0${n}` : `${n}`;

export const formatCurrentMonth = (date: string) : string => {
  let [year, month] = date.split('-');
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return `${months[parseInt(month) - 1]} de ${year}`

}