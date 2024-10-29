export type Item = {
  id: number;
  clientId: number;
  categoryId: number;
  date: string;
  title: string;
  value: number;
  category: {
    id: number;
    title: string;
    color: string;
    isExpense: boolean;
  };
};
