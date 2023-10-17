import './App.css';
import React, { useState } from 'react';

function App() {
  const [age, setAge] = useState(null);
  const handleOnChange = (event) => {
    const birthdate = new Date(event.target.value);
    const today = new Date();
    const ageInMilliseconds = today - birthdate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  }
  return (
    <div className="main-container">
      <div>
        <h1>Age calculator</h1>
        <br />
        <br />
      </div>
      <div>
        <h2>Enter your date of birth</h2>
      </div>
      <div>
        <input type="date" id="birthdate" name="birthdate" onChange={handleOnChange}/>
      </div>
      <div>
        <p>Your age is: {age !== null ? age : 'Please enter your birthdate'} </p>
      </div>
    </div>
  );
}

export default App;
