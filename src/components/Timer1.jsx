import { useMemo } from "react";
import PropTypes from "prop-types";

const Timer1 = ({
  className = "",
  showHours = false,
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
}) => {
  const timer1Style = useMemo(() => {
    return {
      width: propWidth,
      borderRadius: propBorderRadius,
      padding: propPadding,
      gap: propGap,
      overflowX: propOverflowX,
    };
  }, [propWidth, propBorderRadius, propPadding, propGap, propOverflowX]);

  const hours1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap1,
      height: propHeight,
    };
  }, [propAlignSelf, propGap1, propHeight]);

  const colon2Style = useMemo(() => {
    return {
      width: propWidth1,
      fontSize: propFontSize,
    };
  }, [propWidth1, propFontSize]);

  const minutes2Style = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap2,
      width: propWidth2,
    };
  }, [propFlex, propGap2, propWidth2]);

  const minNumber1Style = useMemo(() => {
    return {
      fontSize: propFontSize1,
      minWidth: propMinWidth,
      width: propWidth3,
      height: propHeight1,
    };
  }, [propFontSize1, propMinWidth, propWidth3, propHeight1]);

  const minutes3Style = useMemo(() => {
    return {
      fontSize: propFontSize2,
      minWidth: propMinWidth1,
      alignSelf: propAlignSelf1,
      height: propHeight2,
    };
  }, [propFontSize2, propMinWidth1, propAlignSelf1, propHeight2]);

  const colon3Style = useMemo(() => {
    return {
      margin: propMargin,
      fontSize: propFontSize3,
      fontWeight: propFontWeight,
      height: propHeight3,
      width: propWidth4,
      display: propDisplay,
    };
  }, [
    propMargin,
    propFontSize3,
    propFontWeight,
    propHeight3,
    propWidth4,
    propDisplay,
  ]);

  const seconds2Style = useMemo(() => {
    return {
      flex: propFlex1,
      gap: propGap3,
      width: propWidth5,
    };
  }, [propFlex1, propGap3, propWidth5]);

  const secNumber1Style = useMemo(() => {
    return {
      fontSize: propFontSize4,
      minWidth: propMinWidth2,
      width: propWidth6,
      height: propHeight4,
    };
  }, [propFontSize4, propMinWidth2, propWidth6, propHeight4]);

  const seconds3Style = useMemo(() => {
    return {
      fontSize: propFontSize5,
      minWidth: propMinWidth3,
      alignSelf: propAlignSelf2,
      height: propHeight5,
    };
  }, [propFontSize5, propMinWidth3, propAlignSelf2, propHeight5]);

  return (
    <div
      className={`w-[220px] rounded-xl [background:linear-gradient(99.46deg,_#380d2c,_#e6b8d9_0.01%,_#c9b8e6)] flex flex-row items-center justify-start p-5 box-border gap-5 text-left text-17xl text-main-black font-poppins mq260:w-[calc(100%_-_40px)] ${className}`}
      style={timer1Style}
    >
      {showHours && (
        <div
          className="self-stretch flex-col items-center justify-center p-1 gap-2"
          style={hours1Style}
        >
          <div className="flex-1 relative leading-[100%] font-medium">00</div>
          <div className="h-3.5 relative text-sm leading-[100%] text-darkslategray-200 inline-block">
            Hours
          </div>
        </div>
      )}
      <div
        className="w-2 relative leading-[100%] text-darkslategray-200 hidden [transform:_rotate(180deg)]"
        style={colon2Style}
      >
        :
      </div>
      <div
        className="flex-1 flex flex-col items-center justify-center p-1 gap-2"
        style={minutes2Style}
      >
        <div
          className="relative leading-[100%] font-medium inline-block min-w-[47px]"
          style={minNumber1Style}
        >
          00
        </div>
        <div
          className="relative text-sm leading-[100%] text-darkslategray-200 inline-block min-w-[55px]"
          style={minutes3Style}
        >
          Minutes
        </div>
      </div>
      <h1
        className="m-0 relative text-inherit leading-[100%] font-normal font-[inherit] text-darkslategray-200 [transform:_rotate(180deg)]"
        style={colon3Style}
      >
        :
      </h1>
      <div
        className="flex-1 flex flex-col items-center justify-center p-1 gap-2"
        style={seconds2Style}
      >
        <div
          className="relative leading-[100%] font-medium inline-block min-w-[45px]"
          style={secNumber1Style}
        >
          03
        </div>
        <div
          className="relative text-sm leading-[100%] text-darkslategray-200 inline-block min-w-[61px]"
          style={seconds3Style}
        >
          Seconds
        </div>
      </div>
    </div>
  );
};

Timer1.propTypes = {
  className: PropTypes.string,
  showHours: PropTypes.bool,

  /** Style props */
  propWidth: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propOverflowX: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propGap1: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
  propFontSize: PropTypes.any,
  propFlex: PropTypes.any,
  propGap2: PropTypes.any,
  propWidth2: PropTypes.any,
  propFontSize1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth3: PropTypes.any,
  propHeight1: PropTypes.any,
  propFontSize2: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propHeight2: PropTypes.any,
  propMargin: PropTypes.any,
  propFontSize3: PropTypes.any,
  propFontWeight: PropTypes.any,
  propHeight3: PropTypes.any,
  propWidth4: PropTypes.any,
  propDisplay: PropTypes.any,
  propFlex1: PropTypes.any,
  propGap3: PropTypes.any,
  propWidth5: PropTypes.any,
  propFontSize4: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propWidth6: PropTypes.any,
  propHeight4: PropTypes.any,
  propFontSize5: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propHeight5: PropTypes.any,
};

export default Timer1;
