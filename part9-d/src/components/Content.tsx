 interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

  interface CoursePartBasic extends CoursePartBase {
  description: string;
  kind: "basic"
}

 interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

 interface CoursePartBackground extends CoursePartBase {
  description: string;
  backgroundMaterial: string;
  kind: "background"
}

 interface CoursePartSpecial extends CoursePartBase {
    description: string;
    requirements: string[];
    kind: "special"
}
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
interface ContentProps {
  courseParts: CoursePart[];
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;
const Content = (props : ContentProps )  => {
  return (
    <div>
      {props.courseParts.map((part: CoursePart) => {
        switch (part.kind) {
          case 'basic':
            return (
              <div key={part.name}>
                <p><b>{part.name} {part.exerciseCount}</b></p>
                <p>{part.description}</p>
              </div>
            );
          case 'group':
            return (
              <div key={part.name}>
                <p><b>{part.name} {part.exerciseCount}</b></p>
                <p>project exercises: {part.groupProjectCount}</p>
              </div>
            );
          case 'background':
            return (
              <div key={part.name}>
                <p><b>{part.name} {part.exerciseCount}</b></p>
                <p>submit to : {part.backgroundMaterial}</p>
              </div>
            );
          case 'special':
            return (
              <div key={part.name}>
                <p><b>{part.name} {part.exerciseCount}</b></p>
                <p>required skills : {part.requirements.join(', ')}</p>
              </div>
            );
          default:
            return assertNever(part);
        }
      })}
    </div>
  );
}

export default Content