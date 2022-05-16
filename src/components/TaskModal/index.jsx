import Modal from 'react-modal';
import { useTasks } from '../../TasksContext';
import { OPEN_MODAL } from '../../TasksContext/types';

const TaskModal = () => {
  const { isOpenModal, dispatch } = useTasks();
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#393D41',
      color: '#FFFFFF',
      fontSize: '15px',
    },
    overlay: {
      background: 'rgba(57, 61, 65, 0.7)',
    },
  };
  const closeModal = () => {
    dispatch({ type: OPEN_MODAL, payload: false });
  };
  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <div className="flex flex-col gap-5">
          <div>
            <input
              className="focus:!border-none bg-transparent p-2 focus:!outline-0"
              type="text"
              placeholder="Task Title"
            />
          </div>
          <div className="flex gap-5">
            <button className="flex justify-center gap-2 px-4 py-[5px] bg-gray-500/10 rounded-md">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM7 8V6H5V8H3V10H5V12H7V10H9V8H7ZM11 8V10H17V8H11Z"
                  fill="white"
                />
              </svg>
              Estimate
            </button>
            <button className="flex justify-center gap-2 px-4 py-[5px] bg-gray-500/10 rounded-md">
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21H0V19C0 17.6739 0.526784 16.4021 1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H11C12.3261 14 13.5979 14.5268 14.5355 15.4645C15.4732 16.4021 16 17.6739 16 19V21ZM8 12C7.21207 12 6.43185 11.8448 5.7039 11.5433C4.97595 11.2417 4.31451 10.7998 3.75736 10.2426C3.20021 9.68549 2.75825 9.02405 2.45672 8.2961C2.15519 7.56815 2 6.78793 2 6C2 5.21207 2.15519 4.43185 2.45672 3.7039C2.75825 2.97595 3.20021 2.31451 3.75736 1.75736C4.31451 1.20021 4.97595 0.758251 5.7039 0.456723C6.43185 0.155195 7.21207 -1.17411e-08 8 0C9.5913 2.37122e-08 11.1174 0.632141 12.2426 1.75736C13.3679 2.88258 14 4.4087 14 6C14 7.5913 13.3679 9.11742 12.2426 10.2426C11.1174 11.3679 9.5913 12 8 12Z"
                  fill="white"
                />
              </svg>
              Assignee
            </button>
            <button className="flex justify-center gap-2 px-4 py-[5px] bg-gray-500/10 rounded-md">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.89997 0.100006L19.799 1.51501L21.213 11.415L12.021 20.607C11.8334 20.7945 11.5791 20.8998 11.314 20.8998C11.0488 20.8998 10.7945 20.7945 10.607 20.607L0.706971 10.707C0.5195 10.5195 0.414185 10.2652 0.414185 10C0.414185 9.73484 0.5195 9.48053 0.706971 9.29301L9.89997 0.100006ZM12.728 8.58601C12.9137 8.7717 13.1342 8.91898 13.3769 9.01945C13.6196 9.11992 13.8797 9.1716 14.1423 9.17156C14.405 9.17151 14.665 9.11973 14.9077 9.01918C15.1503 8.91862 15.3708 8.77126 15.5565 8.58551C15.7422 8.39975 15.8894 8.17924 15.9899 7.93657C16.0904 7.69389 16.1421 7.4338 16.142 7.17115C16.142 6.9085 16.0902 6.64843 15.9896 6.40579C15.8891 6.16315 15.7417 5.9427 15.556 5.75701C15.3702 5.57132 15.1497 5.42403 14.907 5.32356C14.6644 5.22309 14.4043 5.17141 14.1416 5.17145C13.6112 5.17155 13.1025 5.38236 12.7275 5.75751C12.3525 6.13266 12.1418 6.64141 12.1419 7.17186C12.142 7.70231 12.3528 8.21099 12.728 8.58601Z"
                  fill="white"
                />
              </svg>
              Label
            </button>
            <button className="flex justify-center gap-2 px-4 py-[5px] bg-gray-500/10 rounded-md">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0V2H13V0H15V2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7ZM18 9H2V18H18V9ZM13.036 10.136L14.45 11.55L9.5 16.5L5.964 12.964L7.38 11.55L9.501 13.672L13.037 10.136H13.036ZM5 4H2V7H18V4H15V5H13V4H7V5H5V4Z"
                  fill="white"
                />
              </svg>
              Due Date
            </button>
          </div>
          <div className="flex gap-2.5 justify-end">
            <button onClick={closeModal}>Cancel</button>
            <button className="bg-red-500/25 p-2 rounded-md cursor-not-allowed">
              Create
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TaskModal;
