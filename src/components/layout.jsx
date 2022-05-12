import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="p-8 flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
