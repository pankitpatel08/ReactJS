import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
// import { Greet } from './Components/Greet'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import UserGreeting from './Components/UserGreeting'
import NameList  from './Components/NameList'
import StyleSheet from './Components/StyleSheet'
import Inline from './Components/Inline'
import  './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form'




function App() {
  return (
    <div className="App">
      <Form />
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <Greet name='Pankit' designation='Software Developer' >
        <p>He is responsible for development of React Code</p>
      </Greet> */}
      {/* <Greet name='Uma' designation='Software Tester' >
        <button>Test</button>
      </Greet> */}
      {/* <Greet name='Sanket' designation='Project Manager' /> */}
      {/* <Welcome name='Pankit' designation='Software Developer'/> */}
      {/* <Welcome name='Uma' designation='Software Tester'/> */}
      {/* <Welcome name='Sanket' designation='Project Manager' /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <Message /> */}
      {/* <Counter addValue="4"></Counter> */}
      {/* <Hello /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
