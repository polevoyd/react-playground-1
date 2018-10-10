import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';


const name = 'Dmitry';

// CSS added with a 'className' instead of 'class'
const header = <h1 className="HelloWorld"> Hello, this is a test table with React </h1>;

// everything is camelCase
// self-closing tags have to end in a slash

// You must use this.setState() to modify an array. 
// Simply applying a new value to this.state.property will not work.

class HelloWorld extends Component {
    // class = component

    state = {
        characters: []
    };

    // method to remove character
    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        })
    }

    handleSubmit =  character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    // we have to have a method render() that returns actual html code
    render() {

        const { characters } = this.state;

        return (
            <div className="container">
            <h1 className="HelloWorld"> Hello! </h1>
            <p> Enter a name and a job and press 'Sumbit' to add it to table</p>
                <Table 
                characterData={characters}
                removeCharacter={this.removeCharacter} 
                />
                <Form handleSubmit={ this.handleSubmit }/>
            </div>
        );
    }
}

export default HelloWorld;