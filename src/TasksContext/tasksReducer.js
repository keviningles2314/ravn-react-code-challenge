import { tasksInitialState } from '.';
import { SET_TASKS } from './types';
import { OPEN_MODAL } from './types';
export const tasksReducer = (state = tasksInitialState, actions) => {
  switch (actions.type) {
    case SET_TASKS:
      const { data, loading } = actions.payload;
      return {
        ...state,
        tasks: data,
        isLoading: loading,
      };

    case OPEN_MODAL:
      return {
        ...state,
        isOpenModal: actions.payload,
      };

    default:
      return state;
  }
};
