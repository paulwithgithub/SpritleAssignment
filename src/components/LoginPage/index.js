import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginPage extends Component {
  onClickMaster = () => {
    const {history} = this.props
    history.replace('/masters_login_page')
  }

  onClickStudent = () => {
    const {history} = this.props
    history.replace('/students_login_page')
  }

  render() {
    const onClickMaster = () => {
      console.log('s')
      return <Redirect to="/masters_login_page" />
    }

    return (
      <div className="login-page-main-bg">
        <div className="icons-card">
          <div className="master-card">
            <button
              type="button"
              className="master-login-button"
              onClick={this.onClickMaster}
            >
              <img
                src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1678515722/1089129_bumvzp.png"
                alt="masters-icon"
                className="master-login-icon"
              />
            </button>
            <h1 className="heading">Master</h1>
          </div>
          <div className="student-card">
            <button
              type="button"
              className="student-login-button"
              onClick={this.onClickStudent}
            >
              <img
                src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1678515700/pngaaa.com-4870014_bw0bwa.png"
                alt="masters-icon"
                className="student-login-icon"
              />
            </button>
            <h1 className="heading">Student</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage
