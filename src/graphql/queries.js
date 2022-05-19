import { gql } from '@apollo/client';

export const POINT_QUERY = gql`
  {
    __type(name: "PointEstimate") {
      name
      enumValues {
        numberName: name
      }
    }
  }
`;

export const USERS_QUERY = gql`
  {
    users {
      id
      avatar
      fullName
    }
  }
`;

export const TAGS_QUERY = gql`
  {
    __type(name: "TaskTag") {
      name
      enumValues {
        tagName: name
      }
    }
  }
`;

export const TASK_QUERY = gql`
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
