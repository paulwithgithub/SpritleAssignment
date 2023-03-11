import {Component} from 'react'
import './index.css'
import ShowToStudents from '../ShowToStudents'

class StudentPage extends Component {
  onClickLogout = () => {
    const {history} = this.props
    history.replace('/login_page')
  }

  render() {
    const getQuestions = localStorage.getItem('questions')

    const parseString = JSON.parse(getQuestions)

    return (
      <div className="student-main-bg">
        <div className="heading-logout">
          <h1 className="master-main-heading">Student Page</h1>
          <button
            type="button"
            onClick={this.onClickLogout}
            className="logout-btn"
          >
            Logout
          </button>
        </div>
        <h1 className="student-main-heading">Questions</h1>
        {getQuestions !== undefined && (
          <ul className="student-question-list">
            {parseString.map(each => (
              <ShowToStudents details={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default StudentPage
