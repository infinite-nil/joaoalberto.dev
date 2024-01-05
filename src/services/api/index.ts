import axios from "axios";
import { Repository } from "./types";

const client = axios.create({
  baseURL: "https://api.joaoalberto.dev",
  timeout: 500
});

export async function fetchRepositories(): Promise<Repository[]> {
  try {
    const { data, status } = await client.get<Repository[]>("/repositories");

    if (status !== 200) return [];

    return data;
  } catch {
    return [];
  }
}
