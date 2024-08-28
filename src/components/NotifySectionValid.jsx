import NotifyButton from "./NotifyButton";
import PropTypes from "prop-types";

const NotifySectionValid = ({ className = "" }) => {
  return (
    <div
      className={`w-[804px] flex flex-col items-center justify-center gap-6 max-w-full text-center text-xl text-gray-300 font-poppins ${className}`}
    >
      <div className="relative leading-[120%] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
        Be the first to know! Share your email and We'll notify you when it's
        live
      </div>
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-3.5 max-w-full">
        <div className="flex-1 rounded-lg border-dimgray border-[1.5px] border-solid box-border flex flex-row items-center justify-start py-3.5 px-[18px] min-w-[390px] max-w-full mq725:min-w-full">
          <input
            className="w-full [border:none] [outline:none] font-poppins text-xl bg-[transparent] h-5 flex-1 relative leading-[100%] text-dimgray text-left inline-block min-w-[250px] max-w-full p-0 mq450:text-base mq450:leading-[16px]"
            placeholder="Please enter your email id"
            type="text"
          />
        </div>
        <NotifyButton />
      </div>
    </div>
  );
};

NotifySectionValid.propTypes = {
  className: PropTypes.string,
};

export default NotifySectionValid;
