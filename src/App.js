import React from 'react';
import './App.css';
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
        ? 
        {isWoman: genderSelect} 
        :
        {isMan: genderSelect}
      )
  }
 render() {
   return (
     <div className="App">
      <h1 className="title">LinkeDon</h1>
      <input type="checkbox" id="male" className="gender__male" onClick={this.handleClickGender}/>Hombre
      <input type="checkbox" id="female" className="gender__female" onClick={this.handleClickGender}/>mujer
    
      <ul>
        {this.state.data
        .filter(obj => obj.gender === 'male')
        .map(item =>
           <li>
             <div className="card_container">
                <img src={item.picture.medium} alt={item.name.first}/>
                <h2 className="card_name">Nombre: {item.name.first} {item.name.last}</h2>
                <h3 className="card_city">Ciudad: {item.location.city}</h3>
                <h4 className="card_age">Edad: {item.dob.age}</h4>
             </div>
           </li>)}

      </ul>
     </div>
   );
 }

 
}

export default App;
