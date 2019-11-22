import React from 'react'

// function Greet() {
//     return <h1>Hello, Pankit!</h1>
// }

// const Greet = props => {
//     //console.log(props)
//     return (
//         <div>
//             <h1>
//                 Hello, {props.name} is a {props.designation}
//             </h1>
//             {props.children}
//         </div>
//     )
// }

//Destructuring
// const Greet = ({name, designation}) => {
const Greet = props => {
    //console.log(props)
    const {name, designation} = props
    return (
        <div>
            <h1>
                Hello, {name} is a {designation}
            </h1>
        </div>
    )
}
//export const Greet = () => <h1>Hello, Pankit!</h1>

export default Greet