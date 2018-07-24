import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  // like const/var menggunakan state
  state = {
    // 'persons' bebas bisa kasih nama apa aja
    persons: [
      {name:"Dika", age:"28"},
      {name:"Budi", age:"26"},
      {name:"Yatno", age:"19"}
    ],
    otherState: 'some other value'
    // untuk manggil state menggunakan "this"
  }

  // untuk membuat action di "onClick" harus menambahkan "Handler" dibelakangnya
  switchNamehandler = () => {
    // console.log('ahaayy');
    // untuk change value menggunakan this.setState

    // passing argument menggunakan .bind(this, 'Dika Aditia') atau
    // onClick={() => this.switchNamehandler('Dika Aditia')}

    this.setState({persons: [
      {name: "dika", age:"28"},
      {name:"Budi", age:"26"},
      {name:"Yatno", age:"20"}
    ] })
  }

  // event.target.value untuk store/send value
  changeNameHandler = (event) => {
    this.setState({persons: [
      {name: "dika", age:"28"},
      {name: event.target.value, age:"26"},
      {name:"Yatno", age:"20"}
    ] })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button
          style={style} 
          onClick={() => this.switchNamehandler('Dika Aditia')}>Switch Name</button>
          <Person 
              name ={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
          <Person 
              name ={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.changeNameHandler}>my hobbies is tidur</Person>
          <Person 
              name ={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
        </p>
      </div>
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'works now!'));
  }
}

export default App;
