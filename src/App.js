import React, { Component }  from 'react';
import './App.css';
import heroes from './heroes.json';
import HeroCard from './components/HeroCard/index.js'
import TopScore from './components/TopScore';
import Score from './components/Score';
import GuessState from './components/GuessState';

class App extends Component {
  state = {
    heroes: heroes,
    guessState: true,
    guessTally: 0,
    highScore: 0,
    currentClicks: []
  };

  tally = () => {
    console.log(this.id)
    // if ((this.state.currentClicks).includes(this.id)) {
    //   if (this.state.highScore < this.state.currentClicks) {
    //     this.setState({
    //       highScore: this.state.currentClicks
    //     });
    //   }
    //   this.setState({
    //     currentClicks: 0,
    //     guessTally: 0,
    //     guessState: false
    //   });
    // } else {
    //   (this.state.currentClicks).push(this.id);
    //   this.setState({
    //     guessState: true,
    //     guessTally: this.state.guessTally + 1,
    //   })
    // };
  }

  render(){
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid">
        <h1 className="text-center">Click the image, but not the same one!</h1>
      <GuessState /><Score /><TopScore />
      </div>
      <div className="container container-fluid">
        <div className="row">
        {this.state.heroes.map(hero => (
        <HeroCard 
        id={hero.id}
        key={hero.id}
        name={hero.name}
        link={hero.link}
        tally={this.tally()}    
        />
        ))}
        </div>
      </div>
    </div>
  );
}
}

export default App;
