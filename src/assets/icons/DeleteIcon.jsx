import PropTypes from 'prop-types';
const DeleteIcon = ({ width = '20', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 2V0H15V2H20V4H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V4H0V2H5ZM4 4V18H16V4H4ZM7 7H9V15H7V7ZM11 7H13V15H11V7Z"
      fill="white"
    />
  </svg>
);

DeleteIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default DeleteIcon;
