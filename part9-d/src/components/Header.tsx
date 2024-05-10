interface CourseProps {
    courseName: string;
  }
const Header = (props : CourseProps) => {
  return (
    <div>
        <h1>{props.courseName}</h1>
    </div>
  )
}

export default Header