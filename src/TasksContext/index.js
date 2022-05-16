import { createContext, useContext, useEffect, useReducer } from 'react';
import { useGetTasks } from '../api/UseRequest';
import { tasksReducer } from './tasksReducer';
import { SET_TASKS } from './types';
export const tasksInitialState = {
  tasks: [],
  isLoading: true,
};

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, tasksInitialState);
  const { data, loading } = useGetTasks();
  useEffect(() => {
    dispatch({
      type: SET_TASKS,
      payload: { data, loading },
    });
  }, [data, loading]);

  const value = {
    ...state,
  };
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TasksContext);
};
