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
