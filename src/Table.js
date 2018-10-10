import React, { Component } from 'react';

// example of a CLASS COMPONENT
// A class component must include render(), and the return can only return one parent element.

// SIMPLE component
// const SimpleComponent = () => { 
//     return <div>Example</div>;
// }

// // CLASS component
// class ClassComponent extends Component {
//     render() {
//         return <div>Example</div>;
//     }
// }

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

// The onClick function must pass through a function that returns the removeCharacter() method, 
// otherwise it will try to run automatically.

const TableBody = (props) => {

    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={ index }>
                <td>{ row.name }</td>
                <td>{ row.job }</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });
    
    return <tbody>{ rows }</tbody>;
}

class Table extends Component {

    render() {

        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                characterData= {characterData} 
                removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;