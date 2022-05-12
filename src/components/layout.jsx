import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="p-8 flex bg-[#212529] h-screen text-white gap-5">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
};
export default Layout;
