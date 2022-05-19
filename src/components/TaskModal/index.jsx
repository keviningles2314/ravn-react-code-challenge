import Modal from 'react-modal';
import { useTasks } from '../../TasksContext';
import { OPEN_MODAL } from '../../TasksContext/types';
import { useQuery } from '@apollo/client';
import { POINT_QUERY } from '../../graphql/queries';
import { USERS_QUERY } from '../../graphql/queries';
import { TAGS_QUERY } from '../../graphql/queries';
import ListMenu from '../ListMenu';
import DueDate from '../DueDate';
import TagsList from '../TagsList';
import PointsIcon from '../../assets/icons/PointsIcon';
import UserIcon from '../../assets/icons/UserIcon';
import TagIcon from '../../assets/icons/TagIcon';
import { useEffect, useState } from 'react';

const TaskModal = () => {
  const { data: pointsData, loading: pointLoading } = useQuery(POINT_QUERY);
  const { data: usersData, loading: userLoading } = useQuery(USERS_QUERY);
  const { data: tagsData, loading: tagLoading } = useQuery(TAGS_QUERY);
  const {
    isOpenModal,
    dispatch,
    setDataForm,
    dataForm,
    emptyData,
    addTask,
    refetch,
  } = useTasks();
  const [isDataFilled, setIsDataFilled] = useState(false);

  useEffect(() => {
    if (
      dataForm.name !== '' &&
      dataForm.points !== '' &&
      dataForm.assignee !== '' &&
      dataForm.tags.length !== 0
    ) {
      setIsDataFilled(true);
    } else {
      setIsDataFilled(false);
    }
  }, [dataForm]);

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
      borderColor: '#2D3034',
      overflow: 'visible',
    },
    overlay: {
      background: 'rgba(57, 61, 65, 0.7)',
    },
  };

  let pointsArray;
  let usersArray;
  let tagsArray;

  if (!pointLoading) {
    pointsArray = pointsData.__type.enumValues.slice(0).reverse();
  }

  if (!userLoading) {
    usersArray = usersData.users;
  }
  if (!tagLoading) {
    tagsArray = tagsData.__type.enumValues;
  }

  const handleSubmit = () => {
    if (isDataFilled) {
      addTask();
      emptyData();
      dispatch({ type: OPEN_MODAL, payload: false });
      refetch();
    }
  };

  const closeModal = () => {
    dispatch({ type: OPEN_MODAL, payload: false });
    emptyData();
  };
  const handleTextChange = (event) => {
    setDataForm({
      ...dataForm,
      name: event.target.value,
    });
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
              onChange={handleTextChange}
            />
          </div>
          <div className="relative flex gap-5 items-center">
            <ListMenu
              icon={<PointsIcon />}
              itemData={pointsArray}
              itemTitle={'Estimate'}
              dataForm={dataForm}
              setDataForm={setDataForm}
            />

            <ListMenu
              icon={<UserIcon />}
              itemData={usersArray}
              itemTitle={'Assignee'}
              dataForm={dataForm}
              setDataForm={setDataForm}
            />
            <TagsList
              itemData={tagsArray}
              itemTitle={'Label'}
              icon={<TagIcon />}
              dataForm={dataForm}
              setDataForm={setDataForm}
            />
            <DueDate dataForm={dataForm} setDataForm={setDataForm} />
          </div>
          <div className="flex gap-2.5 justify-end">
            <button onClick={closeModal}>Cancel</button>
            <button
              onClick={handleSubmit}
              className={`p-2 rounded-md ${
                isDataFilled
                  ? 'cursor-pointer bg-red-500'
                  : 'bg-red-500/25 cursor-not-allowed'
              }`}
            >
              Create
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TaskModal;
