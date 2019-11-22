import React from 'react'
import Person from './Person'

// function NameList() {
//     const names = ['Pankit', 'Uma', 'Sanket']
//     const nameList = names.map(name => <h2>{name}</h2>)
//     return (
//         <div>{nameList}</div>
//         // <h2>{names[0]}</h2>
//         //<h2>{names[1]}</h2>
//         //<h2>{names[2]}</h2> 
//     )
// }
function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Pankit',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Uma',
            age: 28,
            skill: 'JIRA'
        },
        {
            id: 3,
            name: 'Sanket',
            age: 32,
            skill: 'Management'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{personList}</div>
    // <h2>{names[0]}</h2>
    //<h2>{names[1]}</h2>
    //<h2>{names[2]}</h2> 

}

export default NameList
