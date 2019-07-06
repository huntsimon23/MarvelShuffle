import React, { Component }  from 'react';
import './App.css';
import heroes from './heroes.json';
import HeroCard from './components/HeroCard/index.js'
import TopScore from './components/TopScore/index.js';
import Score from './components/Score/index.js';
import GuessState from './components/GuessState/index.js';

class App extends Component {
  state = {
    heroes: heroes,
    guessState: true,
    guessTally: 0,
    highScore: 0,
    currentClicks: []
  };

  tally = (heroClick) => {
    if ((this.state.currentClicks).includes(heroClick)) {
      if (this.state.highScore < this.state.guessTally) {
        this.setState({
          highScore: this.state.guessTally
        });
      }
      this.setState({
        currentClicks: [],
        guessTally: 0,
        guessState: false
      });
      this.shuffle(heroes);
    } else {
      (this.state.currentClicks).push(heroClick);
      this.setState({
        guessState: true,
        guessTally: this.state.guessTally + 1,
      });
      this.shuffle(heroes);
    };
    console.log(`Current clicks: ${this.state.currentClicks}`, `Guess Tally: ${this.state.guessTally}`, `Guess State: ${this.state.guessState}`, `High Score: ${this.state.highScore}`);
  }

    shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  
  render(){
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid">
        <h1 className="text-center">Click the image, but not the same one!</h1>
      <GuessState 
      guessState={this.state.guessState}/>
      <Score 
      guessTally={this.state.guessTally}/>
      <TopScore 
      highScore={this.state.highScore}/>
      </div>
      <div className="container container-fluid">
        <div className="row">
        {heroes.map(hero => (
        <HeroCard 
        tally={this.tally}  
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
