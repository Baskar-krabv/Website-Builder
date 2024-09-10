import './App.css';
import { FrontPage } from './components/FrontPage';
import { useState } from 'react';
import { Component } from 'react'
const [val, setVal] = useState(0)
class App extends Component {
  constructor(props) {
    super(props);
  }
getData() {
  const API = 'http://127.0.0.1:4000/'
  fetch(`${API}fetchData`)
    .then(res => res.json())
    .then(data => {
      data.forEach(user => {
        if(user.uname == document.querySelector('.uname').value && user.pass == document.querySelector('.pass').vale)
          setVal(1)
        else
          alert("Invaild userName and Password")
        const result = document.querySelector('.result');
      });
    })
}

pushData() {
  const API = 'http://127.0.0.1:4000/'
  const formData = new FormData()
  formData.append('uname', document.querySelector('.uname').value)
  formData.append('pass', document.querySelector('.pass').value)
  fetch(`${API}pushData`, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(data => alert(data.msg))
    .catch(err => alert('Error: ', err))

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
      {val === 1 && <FrontPage />}
    </div>
  );
}
}
export default App;
