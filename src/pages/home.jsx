import ColumnItem from '../components/ColumnItem';
import Layout from '../components/layout';
import { useTasks } from '../TasksContext';

const Home = () => {
  const { dataAdded } = useTasks();
  const statusArray = ['BACKLOG', 'CANCELLED', 'DONE', 'IN_PROGRESS', 'TODO'];
  return (
    <Layout>
      <div className="flex flex-col box-border flex-grow ">
        <div className="flex gap-5 box-border flex-wrap ">
          {statusArray.map((item, index) => {
            return (
              <div key={index}>
                <ColumnItem title={item} />
              </div>
            );
          })}
        </div>
        {dataAdded && <h1>{dataAdded.createTask.name}</h1>}
      </div>
    </Layout>
  );
};
export default Home;
