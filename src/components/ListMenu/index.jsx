import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import wordsToNumbers from 'words-to-numbers';
import { getObjectData } from '../../utils/objectCreation';

const ListMenu = ({
  icon,
  itemData,
  itemTitle,
  dataForm,
  setDataForm,
  stateToChange,
}) => {
  const objectItem = getObjectData(icon, itemData, itemTitle);
  const [selected, setSelected] = useState('');

  const handleChange = (item) => {
    setSelected(item);
    if (itemTitle === 'Estimate') {
      setDataForm({
        ...dataForm,
        points: item.numberName,
      });
    } else {
      setDataForm({
        ...dataForm,
        assignee: item.id,
      });
    }
  };

  return (
    <Listbox
      value={selected}
      onChange={(item) => handleChange(item)}
      multiple={itemTitle !== 'Label' ? '' : 'multiple'}
    >
      <div className="relative mt-1">
        <Listbox.Button
          className={` cursor-pointer flex gap-2.5 items-center  text-[15px] ${
            !selected.fullName && 'bg-gray-500/10 py-[5px] px-[16px]'
          } rounded-md  focus:outline-none  focus-visible:ring-2  focus-visible:ring-opacity-75 focus-visible:ring-offset-2 `}
        >
          {selected.fullName && (
            <img
              className="w-[32px] h-[32px] rounded-full"
              src={
                selected.avatar
                  ? selected.avatar
                  : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
              }
              alt="user_img"
            />
          )}
          {!selected.fullName && objectItem.icon}
          <span className="block truncate">
            {selected !== '' &&
              selected.numberName &&
              `${wordsToNumbers(selected.numberName)} points`}

            {selected !== '' && selected.fullName && selected.fullName}
            {selected === '' && objectItem.title}
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="mt-1 flex flex-col absolute z-10 overflow-auto rounded-md bg-[#393D41] border-gray-50 text-white py-1 px-2 text-base shadow-lg ring-1 ring-white focus:outline-none sm:text-sm">
            <h1 className=" text-[#94979A] font-[600] text-[20px] mb-2">
              {objectItem.label}
            </h1>
            {objectItem.dataArray.map((item, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative select-none py-2 px-4 ${
                    active ? ' cursor-pointer' : 'text-white'
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <div className="flex gap-2.5">
                    {!item.fullName && !item.tagName && icon}

                    {item.fullName && (
                      <img
                        className="w-[32px] h-[32px] rounded-full"
                        src={
                          item.avatar
                            ? item.avatar
                            : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                        }
                        alt="user_img"
                      />
                    )}
                    {item.tagName && (
                      <input
                        className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault3"
                      ></input>
                    )}
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {item.numberName &&
                        `${wordsToNumbers(item.numberName)} points`}
                      {item.fullName && item.fullName}
                      {item.tagName && item.tagName}
                    </span>
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
export default ListMenu;
