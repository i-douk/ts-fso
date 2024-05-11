import { useState , useEffect, SetStateAction } from "react"
import { getAllDiaries } from "./services/diariesService"
import { Diary } from "./types";

const App = () => {
  const [diaries, setDiaries] =useState<Diary[]>([])
  useEffect(() => {
    getAllDiaries().then((data: SetStateAction<Diary[]>) => {setDiaries(data)})
  }, [])
  
  return (
    <div>
      <div>
        <ul>
        {diaries.map(d =>
        <li key={d.id}>{d.weather}</li>
        )}      </ul>    </div>
    </div>
  )
}

export default App