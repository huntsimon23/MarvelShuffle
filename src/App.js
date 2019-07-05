import React, { Component }  from 'react';
import './App.css';
import heroes from './heroes.json';
import HeroCard from './components/HeroCard/index.js'

class App extends Component {
  state = {
    heroes
  };

  render(){
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid">
        <h1>Click the image, but not the same one!</h1>
      </div>
      <div className="container container-fluid">
        <div className="row">
        {this.state.heroes.map(hero => (
        <HeroCard 
        id={hero.id}
        key={hero.id}
        name={hero.name}
        link={hero.link}    
        />
        ))}
        </div>
      </div>
    </div>
  );
}
}

export default App;
