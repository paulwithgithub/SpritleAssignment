import {v4 as vid} from 'uuid'

import {Component} from 'react'

import ShowQuestions from '../ShowQuestions'
import StudentPage from '../StudentPage'

import './index.css'

class MasterPage extends Component {
  state = {inputValue: '', questionsList: []}

  onChangeQuestion = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickAdd = () => {
    let {inputValue} = this.state
    if (inputValue.length === 0) {
      const empty = null
    } else {
      let value = inputValue.replaceAll('(', ' ')
      value = value.replaceAll(')', ' ')
      const array = value.split(' ', 3)

      const digits = []
      let operator = ''

      array.map(item => {
        switch (item) {
          case 'one':
            return digits.push(1)

          case 'two':
            return digits.push(2)

          case 'three':
            return digits.push(3)

          case 'four':
            return digits.push(4)

          case 'five':
            return digits.push(5)

          case 'six':
            return digits.push(6)

          case 'seven':
            return digits.push(7)

          case 'eight':
            return digits.push(8)

          case 'nine':
            return digits.push(9)
          case 'zero':
            return digits.push(0)

          case 'times':
            operator = '*'
            return operator
          case 'plus':
            operator = '+'
            return operator
          case 'minus':
            operator = '-'
            return operator
          case 'divided_by':
            operator = '/'
            return operator

          default:
            return false
        }
      })

      let answer

      if (operator === '*') {
        answer = digits[0] * digits[1]
        inputValue = `${digits[0]} * ${digits[1]}`
      } else if (operator === '/') {
        answer = digits[0] / digits[1]
        answer = Math.round(answer) - 1
        inputValue = `${digits[0]} / ${digits[1]}`
      } else if (operator === '+') {
        answer = digits[0] + digits[1]
        inputValue = `${digits[0]} + ${digits[1]}`
      } else if (operator === '-') {
        answer = digits[0] - digits[1]
        inputValue = `${digits[0]} - ${digits[1]}`
      }

      const object = {
        id: vid(),
        answer,
        inputValue,
      }

      this.setState(prevState => ({
        questionsList: [...prevState.questionsList, object],
      }))
      const {questionsList} = this.state
    }
  }

  updateQuestionsData = getStorage => {
    const parsedData = JSON.parse(getStorage)
    console.log(parsedData)
  }

  onClickLogout = () => {
    const {history} = this.props
    history.replace('/login_page')
  }

  render() {
    const {inputValue, questionsList} = this.state
    const setStorage = localStorage.setItem(
      'questions',
      JSON.stringify(questionsList),
    )
    const getStorage = localStorage.getItem('questions')
    if (getStorage !== undefined) {
      this.updateQuestionsData(getStorage)
    }
    console.log(getStorage)
    return (
      <div className="master-main-bg">
        <div>
          <div className="heading-logout">
            <h1 className="master-main-heading">Master Page</h1>
            <button
              type="button"
              onClick={this.onClickLogout}
              className="logout-btn"
            >
              Logout
            </button>
          </div>
          <h1 className="master-question-heading">Post a question</h1>
          <input
            type="text"
            placeholder="Write a question"
            onChange={this.onChangeQuestion}
            className="input-box"
          />
          <br />
          <button
            type="button"
            className="add-button"
            onClick={this.onClickAdd}
          >
            Add
          </button>
          {ShowQuestions.length !== 0 && (
            <ul className="questions-list">
              {questionsList.map(question => (
                <ShowQuestions details={question} key={question.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default MasterPage
