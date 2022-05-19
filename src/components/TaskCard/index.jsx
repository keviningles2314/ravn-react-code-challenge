import { useEffect, useState } from 'react';
import wordsToNumbers from 'words-to-numbers';
import { dayHandler } from '../../helper/dayHandler';

const TaskCard = ({ itemCard }) => {
  const itemDueDate = dayHandler(itemCard.dueDate);

  const [timeStyle, setTimeStyle] = useState('');

  useEffect(() => {
    if (itemDueDate === 'Yesterday' && itemDueDate < new Date()) {
      setTimeStyle('text-[#DA584B] bg-red-500/10');
    } else if (itemDueDate === 'Today' || itemDueDate === 'Tomorrow') {
      setTimeStyle('text-[#E5B454] bg-yellow-500/10');
    } else {
      setTimeStyle('bg-gray-500/10');
    }
  }, [itemDueDate]);

  return (
    <div className="p-6 bg-[#2C2F33] flex flex-col w-96 gap-5 rounded-lg">
      <div className="flex w-full">
        <h1 className="text-[18px]">{itemCard.name}</h1>
        <div className="flex w-full justify-end">
          <button>...</button>
        </div>
      </div>
      <div className="flex w-full gap-5">
        <div className="flex flex-1">
          <h1>{wordsToNumbers(itemCard.pointEstimate)} Points</h1>
        </div>
        <div className="flex flex-1 w-full justify-end">
          <button
            className={`flex  items-center p-2 gap-2.5 rounded-sm ${timeStyle}`}
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20.0001C9.81811 20.0001 8.64779 19.7673 7.55586 19.315C6.46393 18.8627 5.47178 18.1998 4.63605 17.364C3.80032 16.5283 3.13739 15.5362 2.68509 14.4442C2.2328 13.3523 2.00001 12.182 2.00001 11.0001C2.00001 9.81817 2.2328 8.64785 2.68509 7.55592C3.13739 6.46399 3.80032 5.47184 4.63605 4.63611C5.47178 3.80038 6.46393 3.13745 7.55586 2.68515C8.64779 2.23286 9.81811 2.00007 11 2.00007C13.387 2.00007 15.6761 2.94828 17.364 4.63611C19.0518 6.32394 20 8.61312 20 11.0001C20 13.387 19.0518 15.6762 17.364 17.364C15.6761 19.0519 13.387 20.0001 11 20.0001ZM11 18.0001C11.9193 18.0001 12.8295 17.819 13.6788 17.4672C14.5281 17.1154 15.2997 16.5998 15.9498 15.9498C16.5998 15.2998 17.1154 14.5281 17.4672 13.6789C17.819 12.8296 18 11.9193 18 11.0001C18 10.0808 17.819 9.17057 17.4672 8.32129C17.1154 7.47201 16.5998 6.70033 15.9498 6.05032C15.2997 5.40031 14.5281 4.8847 13.6788 4.53291C12.8295 4.18113 11.9193 4.00007 11 4.00007C9.14349 4.00007 7.36302 4.73757 6.05026 6.05032C4.73751 7.36308 4.00001 9.14355 4.00001 11.0001C4.00001 12.8566 4.73751 14.6371 6.05026 15.9498C7.36302 17.2626 9.14349 18.0001 11 18.0001ZM12 11.0001H15V13.0001H10V6.00007H12V11.0001ZM0.747009 4.28207L4.28201 0.74707L5.69701 2.16107L2.16001 5.69707L0.747009 4.28207ZM17.717 0.74707L21.253 4.28207L19.839 5.69707L16.303 2.16107L17.718 0.74707H17.717Z"
                fill="white"
              />
            </svg>
            {itemDueDate}
          </button>
        </div>
      </div>
      <div className="flex w-full gap-2">
        {itemCard.tags.map((item, index) => {
          return (
            <div key={index}>
              {index % 2 === 0 && (
                <p className="p-2 bg-green-500/10 text-[#70B252]">{item}</p>
              )}
              {index % 2 !== 0 && (
                <p className="p-2 bg-yellow-500/10 text-[#E5B454]">{item}</p>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex w-full">
        <img
          className="w-10 h-10 rounded-full"
          src={itemCard.assignee.avatar}
          alt="user"
        />
      </div>
    </div>
  );
};
export default TaskCard;
