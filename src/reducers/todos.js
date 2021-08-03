import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/ActionTypes';

const initialState = [
  {
    title: '',
    description: '',
  }
]

export default (state = initialState, payload) {
  switch (action.type) {
    case ADD_TODO: {
      return {

      }
    }
    case DELETE_TODO: {
      return {
        
      }
    }
  }
}