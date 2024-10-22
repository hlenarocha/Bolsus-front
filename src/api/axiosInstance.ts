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

export { createClientRegister, readClientLogin };