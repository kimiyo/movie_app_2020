import React from 'react';
import PropTypes from 'prop-types';

function Food ({name, picture, rating}) {
  return (
  <div>
    <h2>I like { name }</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>)
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodLike = [
  {id:1,rating:5,name:'Kimch',image:'https://recipe1.ezmember.co.kr/cache/recipe/2016/10/10/e1d38d22a01a5f11619e141e089f66cb1.jpg'},
  {id:2,rating:4.1,name:'Samgyupsal',image:'https://i.pinimg.com/originals/c4/c5/d5/c4c5d5d428634b5ddf1aabd9f98faf60.jpg'},
  {id:3,rating:2.5,name:'Bibimbap',image:'https://homecuisine.co.kr/files/attach/images/140/037/082/732750e89f4e634c7b98766c50c395f7.jpg'},
  {id:4,rating:1.5,name:'Doncasu',image:'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2019%2F09%2Ftonkatsu-mania-pork-cutlet-seoul-restaurant-top-1.jpg?q=90&w=1400&cbr=1&fit=max'},
  {id:5,rating:4.8,name:'Kimbap',image:'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG'},
]


function App() {
  // return ( <div className="App" />);
  return ( 
  <div>
    {foodLike.map(dish =>
      <Food key={dish.id} name={dish.name}  picture={dish.image} rating={dish.rating} />
    )}
  </div>);
}

export default App;
