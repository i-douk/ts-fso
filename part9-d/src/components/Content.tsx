interface CourseInfo { 
    courseParts: { 
        name: string;
        exerciseCount: number; }[]; 
}
const Content = (props : CourseInfo) => {
    console.log(props.courseParts)
  return (
    <div>
        {props.courseParts.map((c , index) => <p key={index}>{c.name} {c.exerciseCount}</p>)}
    </div>
  )
}

export default Content