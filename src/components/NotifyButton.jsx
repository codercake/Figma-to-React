import PropTypes from "prop-types";

const NotifyButton = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-2 px-5 bg-main-black rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-100 ${className}`}
    >
      <div className="relative text-13xl leading-[100%] font-medium font-poppins text-gray-400 text-left">
        Notify Me
      </div>
    </button>
  );
};

NotifyButton.propTypes = {
  className: PropTypes.string,
};

export default NotifyButton;
