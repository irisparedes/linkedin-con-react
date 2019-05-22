import React from 'react';

class People extends React.Component{
  render(){
    const { data, isMan, isWoman } = this.props; 
    return(
      <ul>
        {data
        .filter(obj => {
          return(
            isWoman === true && isMan === true 
            ? obj.gender 
            : isWoman === false && isMan === false
            ? obj.gender
            : isWoman === true 
            ? obj.gender === 'female'
            : isMan === true
            ? obj.gender === 'male' : false
        )})
        .map(item =>
           <li>
             <div className="card_container">
                <img src={item.picture.medium} alt={item.name.first}/>
                <h2 className="card_name">Nombre: {item.name.first} {item.name.last}</h2>
                <h3 className="card_city">Ciudad: {item.location.city}</h3>
                <h4 className="card_age">Edad: {item.dob.age}</h4>
             </div>
           </li>)
          }
      </ul>
    );
  }
}

export default People;