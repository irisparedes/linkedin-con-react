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
      <ul>
        {this.state.data.map(item =>
           <li>{item.gender}</li>)}

      </ul>
     </div>
   );
 }

 
}

export default App;
