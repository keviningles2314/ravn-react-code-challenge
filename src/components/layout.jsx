import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="p-8 flex flex-grow bg-[#212529] text-white gap-5 overflow-hidden">
      <Sidebar />
      <main className="">{children}</main>
    </div>
  );
};
export default Layout;
