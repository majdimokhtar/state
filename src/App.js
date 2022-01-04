import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends React.Component {
  state = {
    Person: {
      fullName: "Majdi mokhtar",
      bio: "Fullstack developper",
      img : "https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
      profession: "Aeronautical engineer"
    },
    visibility: true
  };

  toggleVisibility = () => {
    this.setState({
      visibility: !this.state.visibility
    
    });
  };

  render() {
    return (
      <>
        {this.state.visibility && (
          <>
          
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.img} alt="Majdi"></img>
            <h1>{this.state.Person.profession}</h1>

          </>
        )}

        <button onClick={this.toggleVisibility}>click here</button>
      </>
    );
  }
}
export default App;
