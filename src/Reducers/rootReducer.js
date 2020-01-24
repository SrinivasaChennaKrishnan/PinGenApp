import {GENETARE_PIN, SAVE_PIN, DELETE_PIN} from '../Common/actionTypes';

const initialState = {userObject:[], loader:false}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GENETARE_PIN:
        return {
          ...state, generatedPin:action.generatedPin
        };
      case SAVE_PIN:
      let userObject = state.userObject;
      userObject.push(action.newPinObj)
        return {
          ...state, userObject
        };
      case DELETE_PIN:
      let deleteItem = action.deleteItem;
      let userObj = state.userObject;
        return {
          ...state
        };
      default:
        return state;
    }
  }