export interface result {
    numberOfDays : number;
    numberOfTrainingDays : number;
    targetValue : number;
    averageTime : number;
    reached : boolean;
    rating : number;
    ratingDescription :string
  }

export interface exerciseValues {
    daily_exercises : number[];
    target: number
}

const parseArgs = (args: string[]): exerciseValues => {
    const numberArgs = args.slice(3,args.length-1);
    if (args.length < 4) throw new Error('Not enough arguments');
    if (numberArgs.every(element => typeof Number(element) === 'number') ) {
        const daysArray  = args.slice(3,args.length-2);
        const targetValue = Number(args[(args.length)-1]);
        return {
          daily_exercises : daysArray.map(Number),
            target: targetValue
        };
    } else {
        throw new Error('Provided values were not numbers!');
    }
};

const calculateExercises = (a: number[] , b: number) : result => {
    let reachedGoal: boolean;
    let ratingDescriptionString: string;
    const trainingDays = a.filter(d=>d>0);
    const cumulAverage = b * a.length;
    const cumulTraining = a.map(Number).reduce((acc, curr) => acc + curr,0);
    const average = cumulTraining / cumulAverage;
    let ratingAttr;
    if (average === 1) {
        reachedGoal = true;
        ratingAttr = 2;
        ratingDescriptionString = 'Success, you have reached your goal';
    } else if(average > 1){
        reachedGoal = true;
        ratingAttr = 3;
        ratingDescriptionString = 'You are on fire, you have exceeded your goal, but be careful not to push too hard';
    } else {
        reachedGoal = false;
        ratingAttr = 1;
        ratingDescriptionString = 'not too bad but could be better';
    }
    return {
      numberOfDays : a.length,
      numberOfTrainingDays : trainingDays.length,
      targetValue : b,
      averageTime : average,
      reached : reachedGoal,
      rating : ratingAttr,
      ratingDescription: ratingDescriptionString
    };
  };
  
  try {
    const { daily_exercises , target } = parseArgs(process.argv);
    console.log(calculateExercises(daily_exercises, target));
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }

  export default  { calculateExercises, parseArgs };