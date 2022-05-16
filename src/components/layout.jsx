import Sidebar from './Sidebar';
import { useTasks } from '../TasksContext';
import { OPEN_MODAL } from '../TasksContext/types';
import TaskModal from './TaskModal';

const Layout = ({ children }) => {
  const { dispatch } = useTasks();

  const openModal = () => {
    dispatch({ type: OPEN_MODAL, payload: true });
  };

  return (
    <div className="p-8 flex flex-grow bg-[#212529] text-white gap-5 h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full flex justify-end box-border">
          <button
            onClick={() => openModal()}
            className="bg-[#DA584B] w-8 h-8 rounded-lg box-border flex items-center justify-center text-lg cursor-pointer"
          >
            <h1>+</h1>
          </button>
        </div>
        <main className="overflow-y-scroll w-full scrollbar-hide">
          {children}
        </main>
        <TaskModal />
      </div>
    </div>
  );
};
export default Layout;
