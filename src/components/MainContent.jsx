import Header from "./Header";
import Timer from "./Timer";
import TextField from "./TextField";
import NotifySectionInvalid from "./NotifySectionInvalid";
import PropTypes from "prop-types";

const MainContent = ({
  className = "",
  showGetReadyText = true,
  showInvalidMail = true,
  showRocketGif = true,
  showStayTuned = false,
  showValidMail = false,
  showTimer = true,
}) => {
  return (
    <div
      className={`w-[1027px] flex flex-col items-center justify-center py-6 px-0 box-border gap-[72px] max-w-full z-[1] text-center text-45xl text-darkslategray-200 font-poppins mq1025:gap-9 mq725:gap-[18px] mq725:pt-5 mq725:pb-5 mq725:box-border ${className}`}
    >
      <Header />
      {showStayTuned && (
        <img
          className="w-[282.5px] h-[25.8px] relative overflow-hidden shrink-0 object-contain"
          alt=""
          src="/stay-tuned1@2x.png"
        />
      )}
      {showGetReadyText && (
        <img
          className="w-[631px] relative max-h-full object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/get-ready-text@2x.png"
        />
      )}
      {showTimer && <Timer showHours showColon />}
      {showValidMail && (
        <div className="w-[804px] flex-col items-center justify-center gap-6 max-w-full text-xl text-lightgray">
          <div className="h-6 relative leading-[120%] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
            Be the first to know! Share your email and We'll notify you when
            it's live
          </div>
          <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-3.5 max-w-full text-left text-13xl text-gray-500">
            <TextField
              propBorder="1.5px solid #ccc"
              propBorderRadius="8px"
              propPadding="14px 18px"
              propMinWidth="390px"
              propHeight="unset"
              propColor="#808080"
              propHeight1="20px"
              propFontSize="20px"
              propDisplay="inline-block"
              propAlignSelf="unset"
            />
            <div className="h-12 rounded-lg bg-white flex flex-row items-center justify-center py-2 px-5 box-border whitespace-nowrap">
              <div className="self-stretch relative leading-[100%] font-medium">
                Notify Me
              </div>
            </div>
          </div>
        </div>
      )}
      {showInvalidMail && <NotifySectionInvalid />}
    </div>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
  showGetReadyText: PropTypes.bool,
  showInvalidMail: PropTypes.bool,
  showRocketGif: PropTypes.bool,
  showStayTuned: PropTypes.bool,
  showValidMail: PropTypes.bool,
  showTimer: PropTypes.bool,
};

export default MainContent;
