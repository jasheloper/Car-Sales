

// step 5: Build action creators


export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const COUNT = "COUNT";

export const addFeature = () => {
   return {
         type: ADD_FEATURE
   }
}

export const removeFeature = () => {
   return {
      type: REMOVE_FEATURE
   }
}

export const count = () => {
   return {
      type: COUNT
   }
}