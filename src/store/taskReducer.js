const initialState = {
    tasks: [],
    popupMessage: null,
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload
              ? { ...task, isDone: !task.isDone }
              : task
          ),
          popupMessage: state.tasks.find(task => task.id === action.payload).isDone
            ? 'Task marked as undone!'
            : 'Task marked as done!'
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id
              ? { ...task, description: action.payload.description }
              : task
          )
        };
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
      case 'CLEAR_POPUP_MESSAGE':
        return {
          ...state,
          popupMessage: null
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  