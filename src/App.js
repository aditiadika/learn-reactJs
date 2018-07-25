import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import logo from './logo.svg';
import classes from './App.css';
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
    // how to chek if else to make toggle button, call {persons}
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}  
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.changeNameHandler(event, person.id)}/>
          })}
        </div> 
      )
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      btnClass = classes.red;
    }

    // give dynamic classes, call className={classes}
    // let classes = ['red', 'bold'].join(' ');

    // caralain pake elseif
    let assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold); //classes = ['red', 'bold'] cara menggunakannya classes.join(' ')
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <header className={classes.Appheader}>
            <img src={logo} className={classes.Applogo} alt="logo" />
            <h1 className={classes.Apptitle}>Welcome to React</h1>
            <p className={assignClasses.join(' ')}>Learn React Js</p>
          </header>
          <p className={classes.Appintro}>
            <button className={btnClass}
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

