import { tasks } from '../../helper/tasks';
import TaskCard from '../TaskCard';
const ColumnItem = ({ title }) => {
  const itemArray = tasks.filter((item) => item.status === title);

  return (
    <div className="flex flex-col gap-4">
      <h1>{title}</h1>
      {itemArray.map((item) => {
        return <TaskCard itemCard={item} />;
      })}
    </div>
  );
};

export default ColumnItem;
