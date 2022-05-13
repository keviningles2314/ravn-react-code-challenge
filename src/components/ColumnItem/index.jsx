import TaskCard from '../TaskCard';
import { useQuery, gql } from '@apollo/client';
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

const ColumnItem = ({ title }) => {
  const { data, loading, error } = useQuery(TASK_QUERY);
  let taskArray = [];

  for (const item in data) {
    taskArray = taskArray.concat(data[item]);
  }

  const itemArray = taskArray.filter((item) => item.status === title);

  return (
    <div className="flex flex-col snap-center gap-4">
      {taskArray.some((item) => title.includes(item.status)) && (
        <h1>{`${title} (${itemArray.length})`}</h1>
      )}
      {itemArray.map((item, index) => {
        return (
          <div key={index}>
            <TaskCard itemCard={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ColumnItem;
