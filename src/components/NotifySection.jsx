import NotifySectionValid2 from "./NotifySectionValid2";
import NotifySection2 from "./NotifySection2";
import PropTypes from "prop-types";

const NotificationSection = ({
  className = "",
  notifySectionColor,
  placeholderBorder,
  notifyButtonColor,
  notifyMeBackgroundColor,
  propColor,
}) => {
  return (
    <div
      className={`max-w-full flex flex-col items-start justify-start gap-2 leading-[normal] tracking-[normal] text-center text-xs text-lightgray font-poppins self-stretch ${className}`}
    >
      <NotifySectionValid2
        notifySectionColor={notifySectionColor}
        placeholderBorder={placeholderBorder}
        notifyButtonColor={notifyButtonColor}
        notifyMeBackgroundColor={notifyMeBackgroundColor}
        propColor={propColor}
      />
      <div className="self-stretch hidden flex-col items-start justify-start py-0 px-4 gap-3">
        <div className="self-stretch h-9 relative leading-[150%] inline-block">
          Be the first to know! Share your email and We'll notify you when it's
          live
        </div>
        <NotifySection2 />
      </div>
    </div>
  );
};

NotificationSection.propTypes = {
  className: PropTypes.string,
  notifySectionColor: PropTypes.string,
  placeholderBorder: PropTypes.string,
  notifyButtonColor: PropTypes.string,
  notifyMeBackgroundColor: PropTypes.string,
  propColor: PropTypes.string,
};

export default NotificationSection;
