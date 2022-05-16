import { gql, useQuery } from '@apollo/client';
export const useGetTasks = () => {
  const TASK_QUERY = gql`
    {
      BacklogTasks: tasks(input: { status: BACKLOG }) {
        ...taskFields
      }
      TodoTasks: tasks(input: { status: TODO }) {
        ...taskFields
      }
      InProgressTasks: tasks(input: { status: IN_PROGRESS }) {
        ...taskFields
      }
      DoneTasks: tasks(input: { status: DONE }) {
        ...taskFields
      }
      CancelledTasks: tasks(input: { status: CANCELLED }) {
        ...taskFields
      }
    }

    fragment taskFields on Task {
      id
      name
      status
      pointEstimate
      tags
      dueDate
      assignee {
        avatar
      }
    }
  `;

  const { data, loading } = useQuery(TASK_QUERY);
  return {
    data,
    loading,
  };
};
