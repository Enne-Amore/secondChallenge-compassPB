import axios from "axios";
import bcrypt from "bcryptjs";
import { User } from "../types/User";
import { Tasks } from "../types/Tasks";

const API_URL = "http://localhost:4000/users";
const API_URL_Task = "http://localhost:4000/tasks";

// Função de cadastro com hashing
export async function registerUser(
  userData: Omit<User, 'id' | 'createdAt' | 'password'> & { password: string }
): Promise<User> {
  const createdAt = new Date().toISOString();

  try {
    // Gera o hash da senha
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Cria o usuário com a senha hashed
    const response = await axios.post<User>(API_URL, {
      ...userData,
      password: hashedPassword, // Usa a senha hashed
      createdAt,
    });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw new Error("Registration failed. Please try again.");
  }
}

// Função de login com verificação do hash da senha
export async function loginUser(
  email: string, 
  password: string
): Promise<User | null> {
  try {
    // Busca o usuário pelo email
    const response = await axios.get<User[]>(API_URL, {
      params: { email },
    });

    const users: User[] = response.data;
    if (users.length === 0) return null;

    const user = users[0];

    // Compara a senha fornecida com o hash armazenado
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    return isPasswordCorrect ? user : null; // Retorna o usuário se a senha estiver correta
  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
}

// Function Add Task
export async function addTask(taskData: object): Promise<Tasks> {
  const response = await axios.post(API_URL_Task, {
    ...taskData
  });
  return response.data;
}
