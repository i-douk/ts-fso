import { useState , useEffect, SetStateAction } from "react"
import { getAllDiaries , createDiaryEntry} from "./services/diariesService"
import { Diary, Visibility, Weather } from "./types";

const App = () => {
  const [diaries, setDiaries] = useState<Diary[]>([])
  const [date, setDate] = useState('');
  const [selectedWeather, setSelectedWeather] = useState<Weather>(Weather.Sunny);
  const [selectedVisbility, setSelectedVisbility] = useState<Visibility>(Visibility.Great);
  const [comment, setComment] = useState('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
};

const handleWeather = (event: React.ChangeEvent<HTMLInputElement>)  => {
  setSelectedWeather(event.target.value as Weather);
  console.log(selectedWeather)
};

const handleVisibility = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSelectedVisbility(event.target.value as Visibility);
};

const handleComment  = (event: { target: { value: SetStateAction<string>; }; }) => {
    setComment(event.target.value);
};

useEffect(() => {
  getAllDiaries().then((data: SetStateAction<Diary[]>) => {setDiaries(data)})
}, [])

const entryCreation = (event: { preventDefault: () => void; }) => {
  event.preventDefault()
  const newEntry: Diary = {
    id: diaries.length + 1,
    date: date,
    weather: selectedWeather,
    visibility: selectedVisbility,
    comment: comment
  }
  createDiaryEntry(newEntry)
  setDiaries(prevDiaries => [...prevDiaries, newEntry]); 
};

  
  return (
    <div>
      <div>
      <form onSubmit={entryCreation}>
        <label htmlFor="date">Select Date:</label><br />
        <input 
            type="date" 
            id="date" 
            name="date" 
            value={date} 
            onChange={handleDateChange} />
        <fieldset>
          <legend>weather</legend>
          <label />sunny
          <input type="radio" name="weather" value="sunny" id="sunny"
            onChange={handleWeather}/>
          <label />rainy
          <input type="radio" name="weather" value="rainy" id="rainy"
            onChange={handleWeather}/>
          <label />cloudy
          <input type="radio" name="weather" value="cloudy" id="cloudy"
            onChange={handleWeather}/>
          <label />stormy
          <input type="radio" name="weather" value="stormy" id="stormy"
            onChange={handleWeather}/>
          <label />windy
          <input type="radio" name="weather" value="windy" id="windy"
            onChange={handleWeather}/>
        </fieldset>
        <fieldset>
          <legend>visiblity</legend>
          <label />great
          <input type="radio" name="visibility" value="great" id="great"
            onChange={handleVisibility}/>
          <label />good
          <input type="radio" name="visibility" value="good" id="good"
            onChange={handleVisibility}/>
          <label />ok
          <input type="radio" name="visibility" value="ok" id="ok"
            onChange={handleVisibility}/>
          <label />poor
          <input type="radio" name="visibility" value="poor" id="poor"
            onChange={handleVisibility}/>
        </fieldset>

        <label htmlFor="comment">comment:</label><br />
        <input 
            type="text" 
            id="comment" 
            name="comment" 
            value={comment} 
            onChange={handleComment} 
        /><br /><br />
        <button type="submit">Submit </button>
      </form>
        <h3>Diary</h3>
        {diaries.map(d=>(
            <div style={{padding:"2px" , borderWidth:"1px", margin:"5px", borderStyle: "dashed"}} key={d.id}>
              <p>date : {d.date}</p>
              <p>weather : {d.weather}</p>
              <p>visibility : {d.visibility}</p>
              <p>comment : {d.comment}</p>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default App