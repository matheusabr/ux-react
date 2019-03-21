import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg'
import 'normalize.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='login'>
          <div className='logo'>
            <img src={logo} alt='React Feed' />
          </div>
          <h1 className='title'>Log in to React Feed</h1>
          <div className='field'>
            <input
              type='text'
              name='username'
              title='username'
              id='username'
              placeholder='Username'
            />
          </div>
          <div className='field'>
            <input
              type='password'
              name='password'
              title='password'
              id='password'
              placeholder='Password'
            />
          </div>
          <button className='button'>Log in</button>
          <div className='actions'>
            <a href='#a'>Recover Password</a>
            <span> . </span>
            <a href='#s'>Sign up for React Feed</a>
          </div>
        </div>
      </div>
    )
  }
}

export default App
