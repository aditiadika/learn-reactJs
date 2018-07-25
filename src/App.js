import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
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
    otherState: 'some other value',
    showPersons: false,
    // untuk manggil state menggunakan "this"
  }

  // untuk membuat action di "onClick" harus menambahkan "Handler" dibelakangnya
  // switchNamehandler = () => {
  //   // console.log('ahaayy');
  //   // untuk change value menggunakan this.setState

  //   // passing argument menggunakan .bind(this, 'Dika Aditia') atau
  //   // onClick={() => this.switchNamehandler('Dika Aditia')}

  //   this.setState({persons: [
  //     {name: "dika", age:"28"},
  //     {name:"Budi", age:"26"},
  //     {name:"Yatno", age:"20"}
  //   ] })
  // }

  // event.target.value untuk store/send value
  changeNameHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // menggunkan ...this.state untuk remove person
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons:persons}) 
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    // how to chek if else to make toggle button, call {persons}
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            click={() => this.deletePersonHandler(index)} 
            key={person.id}
            changed={(event) => this.changeNameHandler(event, person.id)}/>
          })}
        </div> 
      )

      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    // give dynamic classes, call className={classes}
    // let classes = ['red', 'bold'].join(' ');

    // caralain pake elseif
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold'] cara menggunakannya classes.join(' ')
    }

    return (
      // <StyleRoot>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <p className={classes}>Learn React Js</p>
          </header>
          <p className="App-intro">
            <button
            style={style} 
            onClick={this.togglePersonHandler}
            >Switch Name</button>
            {persons}
          </p>
        </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'works now!'));
  }
}

// export default Radium(App);
export default App;

