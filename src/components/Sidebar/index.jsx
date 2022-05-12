import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-[#2C2F33] rounded-3xl flex flex-col gap-5 items-center h-screen">
      <div className="p-2.5">
        <svg
          width="40"
          height="36"
          viewBox="0 0 40 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.4218 24.5565C35.7216 23.1082 39.6183 18.2592 39.6183 12.5C39.6183 5.71624 34.214 0.194797 27.477 0.00660328V0H8.06627H0L6.69512 8.33114H8.06627V8.33334H27.181C29.4535 8.36636 31.2857 10.2186 31.2857 12.4989C31.2857 14.8002 29.4204 16.6656 27.1194 16.6656H24.0811H13.3913L28.9285 36H39.6172L30.4218 24.5565Z"
            fill="white"
          />
        </svg>
      </div>
      <Link
        to="/"
        className="flex items-center px-10 py-5 gap-2.5 border-r border-r-[#DA584B] bg-gradient-to-l from-rose-500/25"
      >
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H8V8H0V0ZM0 10H8V18H0V10ZM10 0H18V8H10V0ZM10 10H18V18H10V10ZM12 2V6H16V2H12ZM12 12V16H16V12H12ZM2 2V6H6V2H2ZM2 12V16H6V12H2Z"
              fill="#DA584B"
            />
          </svg>
        </div>
        <h1 className="text-[#DA584B]">DASHBOARD</h1>
      </Link>
    </div>
  );
};

export default Sidebar;
