import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm';

class App extends Component {

  onSignup = (signupData) => {
    console.log(signupData);

  }

  render() {


    return (
        <div className="App">
          <h1> My Website</h1>

          <SignupForm onSignup={this.onSignup}/>

        </div>
    );
  }
}

export default App;
