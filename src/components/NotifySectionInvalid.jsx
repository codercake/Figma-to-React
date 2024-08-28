import NotifySection from "./NotifySection";
import PropTypes from "prop-types";

const NotifySectionInvalid = ({ className = "" }) => {
  return (
    <div
      className={`w-[804px] flex flex-col items-center justify-center gap-6 max-w-full text-center text-xl text-gray-300 font-poppins ${className}`}
    >
      <div className="relative leading-[120%] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
        Be the first to know! Share your email and We'll notify you when it's
        live
      </div>
      <NotifySection />
    </div>
  );
};

NotifySectionInvalid.propTypes = {
  className: PropTypes.string,
};

export default NotifySectionInvalid;
