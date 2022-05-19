import { useEffect, useState } from 'react';
import ColumnItem from '../components/ColumnItem';
import Layout from '../components/layout';
import { useTasks } from '../TasksContext';

const Home = () => {
  const { dataAdded, dataDeleted, setDataAdded, setDataDeleted } = useTasks();
  const [showMessageAdd, setShowMessageAdd] = useState(false);
  const [showMessageDelete, setShowMessageDelete] = useState(false);
  useEffect(() => {
    if (dataAdded && dataAdded !== '') {
      setShowMessageAdd(true);
      setTimeout(() => {
        setShowMessageAdd(false);
        setDataAdded('');
      }, 2000);
    } else if (dataDeleted && dataDeleted !== '') {
      setShowMessageDelete(true);
      setTimeout(() => {
        setShowMessageDelete(false);
        setDataDeleted('');
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAdded, dataDeleted]);

  const statusArray = ['BACKLOG', 'CANCELLED', 'DONE', 'IN_PROGRESS', 'TODO'];
  return (
    <Layout>
      <div className="flex flex-col box-border flex-grow ">
        {showMessageAdd && (
          <div className="bg-green-700 p-2 w-full flex justify-center">
            <h1 className="text-white ">{dataAdded.createTask.name} Added</h1>
          </div>
        )}
        {showMessageDelete && (
          <div className="bg-red-800 p-2 w-full flex justify-center">
            <h1 className="text-white ">
              {dataDeleted.deleteTask.name} Deleted
            </h1>
          </div>
        )}
        <div className="flex gap-5 box-border flex-wrap ">
          {statusArray.map((item, index) => {
            return (
              <div key={index}>
                <ColumnItem title={item} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default Home;
