import { useMemo } from "react";
import PropTypes from "prop-types";

const Timer = ({
  className = "",
  showHours = true,
  propWidth,
  propBorderRadius,
  propBackground,
  propPadding,
  propGap,
  propAlignSelf,
  propPadding1,
  propGap1,
  propHeight,
  showColon,
  propWidth1,
  propFontSize,
  propColor,
  propPadding2,
  propGap2,
  propHeight1,
  propFontSize1,
  propColor1,
  propDisplay,
  propMinWidth,
  propFlex,
  propFontSize2,
  propColor2,
  propMinWidth1,
  propHeight2,
  propFontSize3,
  propColor3,
  propWidth2,
  propDisplay1,
  propPadding3,
  propGap3,
  propHeight3,
  propFontSize4,
  propColor4,
  propDisplay2,
  propMinWidth2,
  propFlex1,
  propFontSize5,
  propColor5,
  propMinWidth3,
  propHeight4,
}) => {
  const timerStyle = useMemo(() => {
    return {
      width: propWidth,
      borderRadius: propBorderRadius,
      background: propBackground,
      padding: propPadding,
      gap: propGap,
    };
  }, [propWidth, propBorderRadius, propBackground, propPadding, propGap]);

  const hoursStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding1,
      gap: propGap1,
      height: propHeight,
    };
  }, [propAlignSelf, propPadding1, propGap1, propHeight]);

  const colonStyle = useMemo(() => {
    return {
      width: propWidth1,
      fontSize: propFontSize,
      color: propColor,
    };
  }, [propWidth1, propFontSize, propColor]);

  const minutesStyle = useMemo(() => {
    return {
      padding: propPadding2,
      gap: propGap2,
      height: propHeight1,
    };
  }, [propPadding2, propGap2, propHeight1]);

  const minNumberStyle = useMemo(() => {
    return {
      fontSize: propFontSize1,
      color: propColor1,
      display: propDisplay,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propFontSize1, propColor1, propDisplay, propMinWidth, propFlex]);

  const minutes1Style = useMemo(() => {
    return {
      fontSize: propFontSize2,
      color: propColor2,
      minWidth: propMinWidth1,
      height: propHeight2,
    };
  }, [propFontSize2, propColor2, propMinWidth1, propHeight2]);

  const colon1Style = useMemo(() => {
    return {
      fontSize: propFontSize3,
      color: propColor3,
      width: propWidth2,
      display: propDisplay1,
    };
  }, [propFontSize3, propColor3, propWidth2, propDisplay1]);

  const secondsStyle = useMemo(() => {
    return {
      padding: propPadding3,
      gap: propGap3,
      height: propHeight3,
    };
  }, [propPadding3, propGap3, propHeight3]);

  const secNumberStyle = useMemo(() => {
    return {
      fontSize: propFontSize4,
      color: propColor4,
      display: propDisplay2,
      minWidth: propMinWidth2,
      flex: propFlex1,
    };
  }, [propFontSize4, propColor4, propDisplay2, propMinWidth2, propFlex1]);

  const seconds1Style = useMemo(() => {
    return {
      fontSize: propFontSize5,
      color: propColor5,
      minWidth: propMinWidth3,
      height: propHeight4,
    };
  }, [propFontSize5, propColor5, propMinWidth3, propHeight4]);

  return (
    <div
      className={`w-[672px] rounded-3xl [background:linear-gradient(99.57deg,_#e6b8d9,_#c9b8e6)] overflow-x-auto flex flex-row items-center justify-between p-8 box-border gap-5 max-w-full text-left text-45xl text-main-black font-poppins ${className}`}
      style={timerStyle}
    >
      {showHours && (
        <div
          className="flex flex-col items-center justify-center p-2 gap-4"
          style={hoursStyle}
        >
          <div className="relative leading-[100%] font-medium inline-block min-w-[82px] mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px]">
            00
          </div>
          <div className="relative text-5xl leading-[100%] text-darkslategray-200 inline-block min-w-[69px] mq450:text-lgi mq450:leading-[19px]">
            Hours
          </div>
        </div>
      )}
      {showColon && (
        <div
          className="relative leading-[100%] text-darkslategray-200 [transform:_rotate(180deg)] mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px]"
          style={colonStyle}
        >
          :
        </div>
      )}
      <div
        className="flex flex-col items-center justify-center p-2 gap-4"
        style={minutesStyle}
      >
        <div
          className="relative leading-[100%] font-medium inline-block min-w-[83px] mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px]"
          style={minNumberStyle}
        >
          00
        </div>
        <div
          className="relative text-5xl leading-[100%] text-darkslategray-200 inline-block min-w-[94px] mq450:text-lgi mq450:leading-[19px]"
          style={minutes1Style}
        >
          Minutes
        </div>
      </div>
      <div
        className="relative leading-[100%] text-darkslategray-200 [transform:_rotate(180deg)] mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px]"
        style={colon1Style}
      >
        :
      </div>
      <div
        className="flex flex-col items-center justify-center p-2 gap-4"
        style={secondsStyle}
      >
        <div
          className="relative leading-[100%] font-medium inline-block min-w-[80px] mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px]"
          style={secNumberStyle}
        >
          03
        </div>
        <div
          className="relative text-5xl leading-[100%] text-darkslategray-200 inline-block min-w-[104px] mq450:text-lgi mq450:leading-[19px]"
          style={seconds1Style}
        >
          Seconds
        </div>
      </div>
    </div>
  );
};

Timer.propTypes = {
  className: PropTypes.string,
  showHours: PropTypes.bool,
  showColon: PropTypes.bool,

  /** Style props */
  propWidth: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propBackground: PropTypes.any,
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding1: PropTypes.any,
  propGap1: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
  propFontSize: PropTypes.any,
  propColor: PropTypes.any,
  propPadding2: PropTypes.any,
  propGap2: PropTypes.any,
  propHeight1: PropTypes.any,
  propFontSize1: PropTypes.any,
  propColor1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propFontSize2: PropTypes.any,
  propColor2: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propHeight2: PropTypes.any,
  propFontSize3: PropTypes.any,
  propColor3: PropTypes.any,
  propWidth2: PropTypes.any,
  propDisplay1: PropTypes.any,
  propPadding3: PropTypes.any,
  propGap3: PropTypes.any,
  propHeight3: PropTypes.any,
  propFontSize4: PropTypes.any,
  propColor4: PropTypes.any,
  propDisplay2: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propFlex1: PropTypes.any,
  propFontSize5: PropTypes.any,
  propColor5: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propHeight4: PropTypes.any,
};

export default Timer;
