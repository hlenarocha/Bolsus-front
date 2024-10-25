import axios from 'axios';

// 3000
const url = import.meta.env.VITE_API_URL;

console.log(url);

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  }
})

interface ClientData {
  name: string;
  email: string;
  password: string;
}

interface IncomeExpenseData {
  categoryId: number,
  title: string,
  date: string,
  value: number

}

const createClientRegister = async (data: ClientData) => {
  try {
    const response = await api.post("/client/register", data);
    return response.data;
  } catch (err) {
    throw err;
  }
}

const readClientLogin = async (data: Omit<ClientData, "name">) => {
  try {
    const response = await api.post("client/login", data);
    return response.data;
  } catch (err) {
    throw err;
  }
}

const readClientInformation = async (token: string) => {
  try {
    const response = await api.get('/client/information', {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
    return response.data;
  
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const createIncomeRegister = async (data: IncomeExpenseData, token: string) => {
  try {
    const response = await api.post("/income/register", data, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }});
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;

  }}

const createExpenseRegister = async (data: IncomeExpenseData, token: string) => {
  try {
    const response = await api.post("/expense/register", data, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });

    return response.data;
  
  } catch(err) {
      console.log(err);
      throw err;
    }
}

export { 
  createClientRegister, 
  readClientLogin, 
  readClientInformation, 
  createIncomeRegister,
  createExpenseRegister
};