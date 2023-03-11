import {Component} from 'react'

import './index.css'

class StudentLoginPage extends Component {
  state = {username: '', password: ''}

  onEnterUsername = event => {
    this.setState({username: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({password: event.target.value})
  }

  onClickSignIn = () => {
    const {username, password} = this.state

    const getUsername = localStorage.getItem('studentUsername')
    const getPassword = localStorage.getItem('studentPassword')

    if (username === getUsername && getPassword === password) {
      const {history} = this.props
      history.replace('student_page')
    }
  }

  render() {
    return (
      <div className="mlp-main-bg">
        <div className="m-login-card">
          <div className="logo-heading">
            <h1 className="master-login-heading">Student Login Page</h1>
            <img
              src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1678515700/pngaaa.com-4870014_bw0bwa.png"
              alt="masters-icon"
              className="masters-icon"
            />
          </div>

          <label htmlFor="Username" className="user-labels">
            Username
          </label>
          <br />
          <input
            type="text"
            className="username-input"
            id="Username"
            onChange={this.onEnterUsername}
          />
          <label htmlFor="Password" className="user-labels">
            Password
          </label>
          <br />
          <input
            type="password"
            className="username-input"
            id="Username"
            onChange={this.onEnterPassword}
          />
          <button
            type="button"
            className="mlp-signin-btn"
            onClick={this.onClickSignIn}
          >
            SignIn
          </button>
        </div>
      </div>
    )
  }
}

export default StudentLoginPage
