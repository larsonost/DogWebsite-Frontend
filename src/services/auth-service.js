import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;


const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
  const response = await api.post(`${USERS_URL}/login`, { username, password });
  const user = response.data;
  return user;
};

export const logout = async () => {
  const response = await api.post(`${USERS_URL}/logout`);
  return response.data;
};

export const profile = async () => {
  try {
    const response = await api.post(`${USERS_URL}/profile`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (user) => {
  const response = await api.put(`${USERS_URL}/${user.data._id}`, user);
  return response.data;
};

export const register = async ({ username, password, lastName, firstName, role, dogname, dogbreed, service, productname, productprice }) => {
  console.log(username, password, lastName, firstName, role, dogname, dogbreed, service, productname, productprice)
  const dog = { 
    name: dogname, 
    breed: dogbreed 
  };
  
  const product = { 
    name: productname, 
    price: productprice 
  };

  const dogs = dogname && dogbreed ? [dog] : [];
  const products = productname && productprice ? [product] : [];

  const response = await api.post(`${USERS_URL}/register`, {
    username, password, firstName, lastName, role, dogs, service, products
  });
  const user = response.data;
  return user;
};

export const findUserById = async (userId) => {
  console.log("GOT USER BY ID")
  const response = await axios.get(`${USERS_URL}/${userId}`);
  return response.data;
};