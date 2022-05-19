import { gql } from '@apollo/client';

export const ADD_TASK_MUTATION = gql`
  mutation createTask(
    $assignee: String!
    $dueDate: DateTime!
    $name: String!
    $points: PointEstimate!
    $status: Status!
    $tags: [TaskTag!]!
  ) {
    createTask(
      input: {
        assigneeId: $assignee
        dueDate: $dueDate
        name: $name
        pointEstimate: $points
        status: $status
        tags: $tags
      }
    ) {
      id
      name
    }
  }
`;

export const DELETE_TASK_MUTATION = gql`
  mutation deleteTask($id: String!) {
    deleteTask(input: { id: $id }) {
      id
      name
    }
  }
`;
