const AddTaskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return state.concat([action.data]);

    case "DELETE_TASK":
      return state.filter(task => task.id !== action.id);
    case "EDIT_TASK":
      return state.map(task => task.id === action.id);
    case "UPDATE_TASK":
      return state.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            taskName: action.data.updatedTaskName,
            editing: !task.editing
          };
        } else return task;
      });
    default:
      return state;
  }
};

export default AddTaskReducer;
