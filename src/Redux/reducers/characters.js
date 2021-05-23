import { SET_CHARACTERS } from '../types'

export default function characters(state=[], action){
  switch(action.type){
    case SET_CHARACTERS: 
      return action.characters
    default: 
      return state
  }
}
