import './index.css'

const ShowQuestions = props => {
  const {details} = props
  const {inputValue, answer} = details

  return (
    <li className="question-item">
      <h3 className="question-heading">Que: {inputValue}</h3>
      <p className="answer">Ans: {answer}</p>
    </li>
  )
}

export default ShowQuestions
