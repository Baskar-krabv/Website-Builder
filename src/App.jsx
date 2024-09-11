import './App.css';
import { FrontPage } from './components/FrontPage';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      error: null
    };
    
    // Bind methods
    this.getData = this.getData.bind(this);
    this.pushData = this.pushData.bind(this);
  }

  getData() {
    const API = 'http://127.0.0.1:4000/';
    const uname = document.querySelector('#uname').value;
    const pass = document.querySelector('#pass').value;

    fetch(`${API}fetchData`)
      .then(res => res.json())
      .then(data => {
        const user = data.find(user => user.uname === uname && user.pass === pass);
        if (user) {
          this.setState({ isAuthenticated: true });
          document.querySelector(".loginPage").style.display="none"
        } else {
          alert("Invalid username or password");
        }
      })
      .catch(err => this.setState({ error: 'Error fetching data' }));
  }

  pushData() {
    const API = 'http://127.0.0.1:4000/';
    const data = {
      uname: document.querySelector('#uname').value,
      pass: document.querySelector('#pass').value
    };

    fetch(`${API}pushData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        alert(data.msg);
        this.setState({ isAuthenticated: false }); // Reset state or handle as needed
      })
      .catch(err => alert('Error: ' + err.message));
  }

  render() {
    return (
      <div className="lmain">
        <div className="loginPage">
          <div className="login">
            <input type="text" id="uname" placeholder='Enter Your Username' />
            <input type="password" id="pass" placeholder='Enter Your Password' />
          </div>
          <div className="btns">
            <button onClick={this.pushData} className="btn_signin">Sign In</button>
            <button onClick={this.getData} className='btn_login'>Login</button>
          </div>
        </div>
        {this.state.isAuthenticated && <FrontPage />}
        {this.state.error && <div className="error">{this.state.error}</div>}
      </div>
    );
  }
}

export default App;