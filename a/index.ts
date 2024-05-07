import express from 'express';
import  bmiCalculator   from './bmiCalculator';
import { isNotNumber } from "./utils";
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});
app.get(`/bmi`, (req, res) => {
    try {
        const { height , weight} = req.query;
        if(!isNotNumber(height) && !isNotNumber(weight)) {
            const bmiResult = bmiCalculator.calculateBmi(Number(height), Number(weight))
            res.send({
                height: Number(height),
                weight: Number(weight),
                bmi: bmiResult
            });  
        } else {
            res.status(400).send("Height and weight must be numbers");
        }
    } catch (error) {
        let errorMessage = 'something went wrong';
        if (error instanceof Error) {
            errorMessage += '. Error: ' + error.message;
        }
        res.status(500).send(errorMessage);
    }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});