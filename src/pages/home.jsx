import ColumnItem from '../components/ColumnItem';
import Layout from '../components/layout';

const Home = () => {
  const statusArray = ['BACKLOG', 'CANCELLED', 'DONE', 'IN_PROGRESS', 'TODO'];
  return (
    <Layout>
      <div className="flex flex-col box-border flex-grow h-screen w-11/12">
        <div className="w-full flex justify-end box-border">
          <div className="bg-[#DA584B] w-8 h-8 rounded-lg box-border flex items-center justify-center text-lg">
            <h1>+</h1>
          </div>
        </div>
        <div className="flex gap-5 box-border overflow-x-scroll overflow-y-scroll w-11/12 h-screen">
          {statusArray.map((item) => {
            return <ColumnItem title={item} />;
          })}
        </div>
      </div>
    </Layout>
  );
};
export default Home;
