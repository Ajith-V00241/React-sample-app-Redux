import DataService from '../services/Dataservice'
import { updateBook } from '../actions/actions'
var initialState= [ {completed:false, redirect:false} ]
const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'GET_BOOKS':
            let stateCopy =[ {completed: true,redirect: false}]
            return [ ...stateCopy, ...action.data]
        case 'ADD_BOOK':
            let addState = state
            DataService.create(action.data)
                .then(resp=>{
                    console.log(resp.data)
                    addState = [{completed: false,redirect: true}]
                    return addState 
                })
                .catch(err=>console.log(err))
            //let stateCopy = [...state, action.data]
            console.log(addState)
            return addState //stateCopy
        case 'UPDATE_BOOK':
            let updateState = state.filter(function(item){return item.id !== action.id})
            updateState = [...updateState,{id: action.id, type: "book", attributes: {id: action.id, ...action.data}}]
            return updateState
        case 'DELETE_BOOK':
            let deleteState = state.filter(function(item){return item.id !== action.id})
            return deleteState
        default:
            return state
    }
}
export default rootReducer;