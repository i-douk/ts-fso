import axios from 'axios';
import { Diary} from "../types";

const baseUrl = 'http://localhost:3000/api'

export const getAllDiaries = async () => {
  const response = await axios.get<Diary[]>(`${baseUrl}/diaries`);
    return response.data;
}

// export const createNote = (object: NewNote) => {
//   return axios
//     .post<Note>(baseUrl, object)
//     .then(response => response.data)
// }