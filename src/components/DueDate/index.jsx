import { subDays } from 'date-fns';
import { useState } from 'react';
import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const DueDate = ({ dataForm, setDataForm }) => {
  const [startDate, setStartDate] = useState(0);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="example-custom-input mt-1 flex gap-2.5"
      onClick={onClick}
      ref={ref}
    >
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
      {startDate !== 0 ? value : 'Due date'}
    </button>
  ));

  const handleClick = (date) => {
    setStartDate(date);
    setDataForm({
      ...dataForm,
      dueDate: date,
    });
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleClick(date)}
        customInput={<ExampleCustomInput />}
        dateFormat="MMM. d, yyyy"
        minDate={subDays(new Date(), 0)}
        monthClassName="bg-red-500"
      />
    </>
  );
};

export default DueDate;
