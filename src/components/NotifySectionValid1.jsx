import PropTypes from "prop-types";

const NotifySectionValid1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 px-4 gap-3 text-center text-xs text-gray-300 font-poppins ${className}`}
    >
      <div className="self-stretch relative leading-[150%]">
        Be the first to know! Share your email and We'll notify you when it's
        live
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-3">
        <div className="self-stretch rounded border-dimgray border-[1.5px] border-solid flex flex-row items-center justify-start p-2.5">
          <input
            className="w-full [border:none] [outline:none] font-poppins text-sm bg-[transparent] h-3.5 flex-1 relative leading-[100%] text-dimgray text-left inline-block min-w-[182px] p-0"
            placeholder="Please enter your email id"
            type="text"
          />
        </div>
        <button className="cursor-pointer [border:none] py-2 px-5 bg-main-black self-stretch rounded flex flex-row items-center justify-center whitespace-nowrap">
          <div className="relative text-lg leading-[100%] font-medium font-poppins text-gray-400 text-left inline-block min-w-[85px]">
            Notify Me
          </div>
        </button>
      </div>
    </div>
  );
};

NotifySectionValid1.propTypes = {
  className: PropTypes.string,
};

export default NotifySectionValid1;
