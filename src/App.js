import React from 'react';
import './App.css';
import {fetchReasons} from './services/ReasonServices';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      data: []
    }
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

 render() {

   return (
     <div className="App">
     <h1 className="title">LinkeDon</h1>
      <ul>
        {this.state.data.map(item =>
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
