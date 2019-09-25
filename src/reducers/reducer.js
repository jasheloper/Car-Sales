
import {  ADD_FEATURE  } from "../actions"
import {  REMOVE_FEATURE  } from "../actions"
import {  COUNT  } from "../actions"

// step 1: Set up "empty" reducer and initial state

// step 6: write the reducer logic for the actions


 function reducer(state,  action) {

   switch(action.type) {

      case ADD_FEATURE:
          return {...state, };

      case REMOVE_FEATURE:
          return {...state, };

      case COUNT: 
        return {...state, };

        default:
          return state; 
   };
 };
 
 export default reducer;