// src/reducers/taskReducer.js
const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, action.payload];
      case 'UPDATE_TASK':
        // Implement logic to update a task
        return state;
      case 'DELETE_TASK':
        // Implement logic to delete a task
        return state;
      default:
        return state;
    }
  };
  
  export default taskReducer;
  