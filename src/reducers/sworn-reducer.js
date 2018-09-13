
export const swornReducer = (state=[], action) => {
  switch(action.type) {
    case 'TOGGLE_SWORN' :
      return action.toggleSworn
    default:
      return state;
  }
}