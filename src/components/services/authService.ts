import axios from "axios";
import { User } from "../types/User";

const API_URL = "http://localhost:3001/users";

// Função de cadastro
export async function registerUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
  const createdAt = new Date().toISOString();
  const response = await axios.post(API_URL, { ...userData, createdAt });
  return response.data;
}

// Função de login
export async function loginUser(email: string, password: string): Promise<User | null> {
    const response = await axios.get(API_URL, {
      params: { email, password },
    });
  
    const users: User[] = response.data;
    return users.length > 0 ? users[0] : null;
  }