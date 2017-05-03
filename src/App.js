import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello World</h1> 
        <b>Bold</b>
      </div>
    )
  }
}

// Class instantiation of class component can have state

// Stateless function component cannot have state
// while a class component can have state

// const App = () => <h1>Hello stateless; new style</h1>

// function App(){
//   return <h1>Hello stateless; old style</h1>
// }

export default App