import Header1 from "./Header1";
import PropTypes from "prop-types";

const Wrapper = ({
  className = "",
  getReadyText,
  stayTuned,
  lightModeRocketGif,
  propGap,
  propFlex,
  propPadding,
  propGap1,
  propFlex1,
  propMargin,
  propFlex2,
  propFontSize,
  propAlignSelf,
  propWidth,
  propTop,
  propLeft,
  propWidth1,
  propHeight,
  propWidth2,
  propWidth3,
  propFontSize1,
  propHeight1,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center py-0 px-4 box-border gap-8 max-w-full text-center text-5xl text-darkslategray-200 font-poppins ${className}`}
    >
      <Header1
        propGap={propGap}
        propFlex={propFlex}
        propPadding={propPadding}
        propGap1={propGap1}
        propFlex1={propFlex1}
        propMargin={propMargin}
        propFlex2={propFlex2}
        propFontSize={propFontSize}
        propAlignSelf={propAlignSelf}
        propWidth={propWidth}
        propTop={propTop}
        propLeft={propLeft}
        propWidth1={propWidth1}
        lightModeRocketGif={lightModeRocketGif}
        propHeight={propHeight}
        propWidth2={propWidth2}
        propWidth3={propWidth3}
        propFontSize1={propFontSize1}
        propHeight1={propHeight1}
      />
      <img
        className="w-[315.5px] h-[13px] relative object-cover"
        loading="lazy"
        alt=""
        src={getReadyText}
      />
      <img
        className="w-[141.2px] h-[12.9px] relative overflow-hidden shrink-0 object-contain hidden"
        alt=""
        src={stayTuned}
      />
    </div>
  );
};

Wrapper.propTypes = {
  className: PropTypes.string,
  getReadyText: PropTypes.string,
  stayTuned: PropTypes.string,
  lightModeRocketGif: PropTypes.string,
  propGap: PropTypes.string,
  propFlex: PropTypes.string,
  propPadding: PropTypes.string,
  propGap1: PropTypes.string,
  propFlex1: PropTypes.string,
  propMargin: PropTypes.string,
  propFlex2: PropTypes.string,
  propFontSize: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propWidth: PropTypes.string,
  propTop: PropTypes.string,
  propLeft: PropTypes.string,
  propWidth1: PropTypes.string,
  propHeight: PropTypes.string,
  propWidth2: PropTypes.string,
  propWidth3: PropTypes.string,
  propFontSize1: PropTypes.string,
  propHeight1: PropTypes.string,
};

export default Wrapper;
