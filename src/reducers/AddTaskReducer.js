const AddTaskReducer = (state = [], action) => {
  switch (action.type) {
    case "AddTask":
      return state.concat([action.data]);
    default:
      return state;
  }
};

export default AddTaskReducer;
