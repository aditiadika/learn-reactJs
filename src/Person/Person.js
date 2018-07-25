import React from 'react';
// import Radium from 'radium';
import classes from './Person.css';

const person = (props) => {
    // cara untuk ngestyling component -> taro di class mana yg mau distyling style={style}
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>My Name is {props.name} iam {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

// export default Radium(person);
export default person;