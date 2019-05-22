import React from 'react';
import './App.css';
import People from './Components/People';
import {fetchReasons} from './services/ReasonServices';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      data: [],
      isWoman: true,
      isMan: true
    }
    this.handleClickGender = this.handleClickGender.bind(this);
  } 

  componentDidMount () {
    this.fetchNewPeople();
  }

  fetchNewPeople() {
    fetchReasons()
      .then(data => {
        this.setState ({
          data: data.results
        })
      })
  }

  handleClickGender (event) {
    const genderSelect = event.currentTarget.checked;
    const id = event.currentTarget.id;
      this.setState(
        id === 'female' 
        ? {isWoman: genderSelect} 
        : {isMan: genderSelect}
      )
  }
 render() {
   return (
     <div className="App">
      <h1 className="title">LinkedOn</h1>
      <input type="checkbox" 
      id="male" 
      className="gender__male" 
      onClick={this.handleClickGender}
      checked={this.state.isMan}
      />Hombre
      <input type="checkbox" 
      id="female" 
      className="gender__female" 
      onClick={this.handleClickGender}
      checked={this.state.isWoman}
      />Mujer
      < People data={this.state.data}
      isWoman={this.state.isWoman}
      isMan={this.state.isMan} />
     </div>
   );
 }

 
}

export default App;
