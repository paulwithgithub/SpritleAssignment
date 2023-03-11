import './index.css'

const ShowToStudents = props => {
  const {details} = props
  const {inputValue, answer} = details

  return (
    <li className="student-item">
      <h3 className="student-heading">Que: {inputValue}</h3>
      <p className="student-answer">Ans: {answer}</p>
    </li>
  )
}

export default ShowToStudents
