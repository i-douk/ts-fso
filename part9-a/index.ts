import express from 'express';
import bodyParser from 'body-parser';
import  bmiCalculator from './bmiCalculator';
import  exerciseCalculator, { exerciseValues, result } from './exerciseCalculator';
import { isNotNumber } from "./utils";
const app = express();
app.use(bodyParser.json());


app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

// BMI Calculator
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

//ExercicesCalculator
app.post('/exercises', (req, res) => {
    console.log(req.body)
    try {
        const { daily_exercises, target }: exerciseValues = req.body;
        if (!req.body || !daily_exercises || !Array.isArray(daily_exercises) || !target || typeof target !== 'number')
            {
             throw new Error("Malformatted parameters");
            }

        const results: result = exerciseCalculator.calculateExercises(daily_exercises, target);
        res.status(200).json({ data: results });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});