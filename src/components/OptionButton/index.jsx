import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import EditIcon from '../../assets/icons/EditIcon';

const OptionButton = ({ taskId }) => {
  const handleDelete = () => {
    console.log(taskId);
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="font-bold text-[18px] inline-flex w-full justify-center rounded-md px-4 py-2 text-sm text-gray-400 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          . . .
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 text-white mt-2 p-0 origin-top-right rounded-md bg-[#393D41] shadow-lg ring-1 ring-white border-gray-50 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`text-white group flex w-full  gap-3 items-center rounded-md px-2 py-2 text-sm cursor-not-allowed`}
                >
                  <EditIcon />
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleDelete}
                  className={`text-white group flex gap-3 w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <DeleteIcon />
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default OptionButton;
