const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
        var exist = state.myList.find(item=>item.id === action.payload.id)
     if(!exist){
        return {
            ...state,
            myList: [...state.myList, action.payload],
          }
     }else{
         return {...state}
     }
      break;
    case "DELETE_FAVORITE":
        return{
            ...state,
            //comparar las listas para ver si tenemos o no los items en nuestra lista
            myList: state.myList.filter(items =>items.id !== action.payload)
        }
      break;
    case "LOGIN_REQUEST":
        return {
          ...state,
          user: action.payload,
        }
    case "LOGOUT_REQUEST":
      return{
        ...state,
        user:action.payload,
      }

    case "REGISTER_REQUEST":
      return{
        ...state,
        user:action.payload,
      }

    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:state.trends.find(
          item=>item.id === Number(action.payload))||
          state.originals.find(item=>item.id === Number(action.payload))
          ||[]
      }
    default:
      return state;
  }
};

export default reducer;
