import React, { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const TagsList = ({ itemData, itemTitle, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  function isSelected(value) {
    return selectedTags.find((el) => el.tagName === value) ? true : false;
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedTagsUpdated = [
        ...selectedTags,
        itemData.find((el) => el.tagName === value),
      ];
      setSelectedTags(selectedTagsUpdated);
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedTagsUpdated = selectedTags.filter(
      (el) => el.tagName !== value
    );
    setSelectedTags(selectedTagsUpdated);
    setIsOpen(true);
  }

  return (
    <Listbox
      as="div"
      value={selectedTags}
      onChange={(value) => handleSelect(value)}
      open={isOpen}
    >
      <div className="relative mt-1">
        <span className="w-full rounded-md ">
          <Listbox.Button
            className="cursor-pointer flex gap-2.5 items-center text-[15px] bg-gray-500/10 py-[5px] px-[16px] rounded-md  focus:outline-none  focus-visible:ring-2  focus-visible:ring-opacity-75 focus-visible:ring-offset-2"
            onClick={() => setIsOpen(!isOpen)}
            open={isOpen}
          >
            <span className="flex gap-2.5 truncate">
              {icon}
              {selectedTags.length < 1
                ? itemTitle
                : `${selectedTags[0].tagName} (${selectedTags.length})`}
            </span>
          </Listbox.Button>
        </span>

        <Transition
          unmount={false}
          show={isOpen}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute w-full rounded-md  shadow-lg"
        >
          <Listbox.Options
            static
            className="mt-1 flex flex-col absolute z-10 overflow-auto rounded-md bg-[#393D41] border-gray-50 text-white py-1 px-2 text-base shadow-lg ring-1 ring-white focus:outline-none sm:text-sm"
          >
            <h1 className=" text-[#94979A] font-[600] text-[20px] mb-2">
              {'Tag Title'}
            </h1>
            {itemData.map((tag, index) => {
              const selected = isSelected(tag.tagName);
              return (
                <Listbox.Option key={index} value={tag.tagName}>
                  {({ active }) => (
                    <div
                      className={`bg-[#393D41] text-white  cursor-pointer relative py-2 pl-8 pr-4`}
                    >
                      <span
                        className={`${
                          selected ? 'font-semibold' : 'font-normal'
                        } block truncate`}
                      >
                        {tag.tagName}
                      </span>
                      {selected && (
                        <span
                          className={`${
                            active ? 'text-white' : 'text-black-600'
                          } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                        >
                          <svg
                            className="h-4 w-4 border-gray-50 ring-white ring-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  )}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default TagsList;
