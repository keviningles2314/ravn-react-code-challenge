import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="w-full flex justify-end">
          <div className="bg-[#DA584B] w-8 h-8 rounded-lg flex items-center justify-center text-lg">
            <h1>+</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
