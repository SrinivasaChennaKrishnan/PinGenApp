import {GENETARE_PIN, SAVE_PIN, DELETE_PIN} from '../Common/actionTypes';
import {store} from '../store';

export const generatePinAction = (genPin)=>{
    store.dispatch({type: GENETARE_PIN, generatedPin: genPin})
}
export const savePinAction = (pinObj)=>{
    store.dispatch({type:SAVE_PIN, newPinObj: pinObj})
}
export const deletePinAction = (item)=>{
    store.dispatch({type:DELETE_PIN, deleteItem: item})
}