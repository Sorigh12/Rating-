
import React  from 'react'
import './App.css';
import StarRating from './star-rating';

function App() {
  return (
    <div className="App">
      <h1> Social Meadia Apps</h1>
      <h2> Instagram </h2>
      <StarRating noOfStars={10}/>
      <h2> Facebook</h2>
      <StarRating noOfStars={5}/>
      <h2> Snapchat </h2>
      <StarRating noOfStars={3} />
    </div>
  );
}

export default App;
