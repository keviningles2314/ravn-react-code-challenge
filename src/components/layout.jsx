import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="p-8 flex flex-grow bg-[#212529] h-screen text-white gap-5 overflow-hidden w-full">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
};
export default Layout;
