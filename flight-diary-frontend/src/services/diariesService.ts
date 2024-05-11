import axios from 'axios';
import { Diary, NewDiaryEntry} from "../types";

const baseUrl = 'http://localhost:3000/api'

export const getAllDiaries = async () => {
  const response = await axios.get<Diary[]>(`${baseUrl}/diaries`);
    return response.data;
}

export const createDiaryEntry = async (object: NewDiaryEntry) => {
  return await axios
    .post<Diary>(`${baseUrl}/diaries`, object)
    .then(response => response.data)
}