// import logo from './logo.svg';
// import './App.css';
// import { useEffect } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// import { connect } from 'react-redux'

// function App(props) {

//   // const dispatch = useDispatch()
//   // const characters = useSelector(state => state.characters)



//   function showCharacters(){
//     return props.characters.map(character => <h1>{character.name}</h1>)
//   }

//   useEffect(getCharacters, [])

//   function getCharacters(){
//     fetch('https://rickandmortyapi.com/api/character/?page=7')
//       .then(response => response.json())
//       .then(({results}) => props.setCharacters(results))
//   }
//   return (
//     <div className="App">
//       {showCharacters()}
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     characters: state.characters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setCharacters: (characters) => dispatch({type: "SET_CHARACTERS", characters}) 
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);



// with hooks!!!!

// import logo from './logo.svg';
// import './App.css';
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { SET_CHARACTERS } from './Redux/types'

// function App() {
  
//   const actionCreator = (characters) => ({
//     type: SET_CHARACTERS,
//     characters
//   })

//   const dispatch = useDispatch()
//   const characters = useSelector(state => state.characters)

//   function showCharacters(){
//     return characters.map(character => <h1>{character.name}</h1>)
//   }

//   useEffect(getCharacters, [])

//   function getCharacters(){
//     fetch('https://rickandmortyapi.com/api/character/?page=7')
//       .then(response => response.json())
//       .then(({results}) => dispatch(actionCreator(results)))
//   }
//   return (
//     <div className="App">
//       {showCharacters()}
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  showCharacters = () => {
    return this.props.characters.map(character => <h1>{character.name}</h1>)
  }

  componentDidMount(){
    this.getCharacters()
  }

  getCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character/?page=7')
      .then(response => response.json())
      .then(({results}) => this.props.setCharacters(results))
  }

  render() {
    return (
      <div className="App">
        {this.showCharacters()}
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCharacters: (characters) => dispatch({type: "SET_CHARACTERS", characters}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
  
