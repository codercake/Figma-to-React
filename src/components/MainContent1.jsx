import Wrapper from "./Wrapper";
import Timer1 from "./Timer1";
import NotificationSection from "./NotificationSection";
import PropTypes from "prop-types";

const MainContent1 = ({
  className = "",
  showHours,
  propWidth,
  propBorderRadius,
  propPadding,
  propGap,
  propOverflowX,
  propAlignSelf,
  propGap1,
  propHeight,
  propWidth1,
  propFontSize,
  propFlex,
  propGap2,
  propWidth2,
  propFontSize1,
  propMinWidth,
  propWidth3,
  propHeight1,
  propFontSize2,
  propMinWidth1,
  propAlignSelf1,
  propHeight2,
  propMargin,
  propFontSize3,
  propFontWeight,
  propHeight3,
  propWidth4,
  propDisplay,
  propFlex1,
  propGap3,
  propWidth5,
  propFontSize4,
  propMinWidth2,
  propWidth6,
  propHeight4,
  propFontSize5,
  propMinWidth3,
  propAlignSelf2,
  propHeight5,
  getReadyText,
  stayTuned,
  showNotifySectionInvalid,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-12 max-w-full z-[1] text-center text-5xl text-darkslategray-200 font-poppins ${className}`}
    >
      <Wrapper
        getReadyText={getReadyText}
        stayTuned={stayTuned}
        lightModeRocketGif="/light-mode-rocket-gif1.svg"
      />
      <Timer1
        showHours={showHours}
        propWidth={propWidth}
        propBorderRadius={propBorderRadius}
        propPadding={propPadding}
        propGap={propGap}
        propOverflowX={propOverflowX}
        propAlignSelf={propAlignSelf}
        propGap1={propGap1}
        propHeight={propHeight}
        propWidth1={propWidth1}
        propFontSize={propFontSize}
        propFlex={propFlex}
        propGap2={propGap2}
        propWidth2={propWidth2}
        propFontSize1={propFontSize1}
        propMinWidth={propMinWidth}
        propWidth3={propWidth3}
        propHeight1={propHeight1}
        propFontSize2={propFontSize2}
        propMinWidth1={propMinWidth1}
        propAlignSelf1={propAlignSelf1}
        propHeight2={propHeight2}
        propMargin={propMargin}
        propFontSize3={propFontSize3}
        propFontWeight={propFontWeight}
        propHeight3={propHeight3}
        propWidth4={propWidth4}
        propDisplay={propDisplay}
        propFlex1={propFlex1}
        propGap3={propGap3}
        propWidth5={propWidth5}
        propFontSize4={propFontSize4}
        propMinWidth2={propMinWidth2}
        propWidth6={propWidth6}
        propHeight4={propHeight4}
        propFontSize5={propFontSize5}
        propMinWidth3={propMinWidth3}
        propAlignSelf2={propAlignSelf2}
        propHeight5={propHeight5}
      />
      <NotificationSection
        showNotifySectionInvalid={showNotifySectionInvalid}
      />
    </div>
  );
};

MainContent1.propTypes = {
  className: PropTypes.string,
  showHours: PropTypes.bool,
  propWidth: PropTypes.string,
  propBorderRadius: PropTypes.string,
  propPadding: PropTypes.string,
  propGap: PropTypes.string,
  propOverflowX: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propGap1: PropTypes.string,
  propHeight: PropTypes.string,
  propWidth1: PropTypes.string,
  propFontSize: PropTypes.string,
  propFlex: PropTypes.string,
  propGap2: PropTypes.string,
  propWidth2: PropTypes.string,
  propFontSize1: PropTypes.string,
  propMinWidth: PropTypes.string,
  propWidth3: PropTypes.string,
  propHeight1: PropTypes.string,
  propFontSize2: PropTypes.string,
  propMinWidth1: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propHeight2: PropTypes.string,
  propMargin: PropTypes.string,
  propFontSize3: PropTypes.string,
  propFontWeight: PropTypes.string,
  propHeight3: PropTypes.string,
  propWidth4: PropTypes.string,
  propDisplay: PropTypes.string,
  propFlex1: PropTypes.string,
  propGap3: PropTypes.string,
  propWidth5: PropTypes.string,
  propFontSize4: PropTypes.string,
  propMinWidth2: PropTypes.string,
  propWidth6: PropTypes.string,
  propHeight4: PropTypes.string,
  propFontSize5: PropTypes.string,
  propMinWidth3: PropTypes.string,
  propAlignSelf2: PropTypes.string,
  propHeight5: PropTypes.string,
  getReadyText: PropTypes.string,
  stayTuned: PropTypes.string,
  showNotifySectionInvalid: PropTypes.bool,
};

export default MainContent1;
