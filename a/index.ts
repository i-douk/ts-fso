import express from 'express';
import  bmiCalculator from './bmiCalculator';
import  exerciseCalculator from './exerciseCalculator';
import { isNotNumber } from "./utils";
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});
app.get(`/bmi`, (req, res) => {
        const { height , weight} = req.query;
        if(!isNotNumber(height) && !isNotNumber(weight)) {
            const bmiResult = bmiCalculator.calculateBmi(Number(height), Number(weight));
            res.send({
                height: Number(height),
                weight: Number(weight),
                bmi: bmiResult
            });  
        } else {
            res.status(400).send({
                error: "malformatted parameters"
              });
        }

});

app.post('/exercises', (_req,res)=> {
    const reqData = {
        daily_exercises: [1, 0, 2, 0, 3, 0, 2.5],
        target: 2.5
        };
    const results = exerciseCalculator.calculateExercises(reqData.daily_exercises , reqData.target)  
    res.status(200).json({ message: 'Hardcoded data sent successfully', data: results });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});