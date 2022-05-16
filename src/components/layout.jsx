import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="p-8 flex flex-grow bg-[#212529] text-white gap-5 h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full flex justify-end box-border">
          <div className="bg-[#DA584B] w-8 h-8 rounded-lg box-border flex items-center justify-center text-lg cursor-pointer">
            <h1>+</h1>
          </div>
        </div>
        <main className="overflow-y-scroll w-full scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
};
export default Layout;
