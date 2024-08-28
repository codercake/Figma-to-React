import { useMemo } from "react";
import PropTypes from "prop-types";

const Header1 = ({
  className = "",
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
  lightModeRocketGif,
  propHeight,
  propWidth2,
  propWidth3,
  propFontSize1,
  propHeight1,
}) => {
  const headerStyle = useMemo(() => {
    return {
      gap: propGap,
      flex: propFlex,
      padding: propPadding,
    };
  }, [propGap, propFlex, propPadding]);

  const titleiconStyle = useMemo(() => {
    return {
      gap: propGap1,
      flex: propFlex1,
    };
  }, [propGap1, propFlex1]);

  const title1Style = useMemo(() => {
    return {
      margin: propMargin,
      flex: propFlex2,
      fontSize: propFontSize,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propMargin, propFlex2, propFontSize, propAlignSelf, propWidth]);

  const rocketIconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      width: propWidth1,
    };
  }, [propTop, propLeft, propWidth1]);

  const lightModeRocketGifStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth2,
    };
  }, [propHeight, propWidth2]);

  const descriptionStyle = useMemo(() => {
    return {
      width: propWidth3,
      fontSize: propFontSize1,
      height: propHeight1,
    };
  }, [propWidth3, propFontSize1, propHeight1]);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center gap-6 max-w-full text-center text-5xl text-darkslategray-200 font-poppins ${className}`}
      style={headerStyle}
    >
      <div
        className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border relative gap-2 max-w-full"
        style={titleiconStyle}
      >
        <h2
          className="m-0 flex-1 relative text-inherit leading-[120%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90.04deg,_#0f0f0f,_#333)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full"
          style={title1Style}
        >
          Launching New Module Soon!
        </h2>
        <div
          className="!m-[0] absolute top-[28px] left-[213px] flex flex-row items-start justify-start pt-0 pb-0.5 pl-0 pr-0.5 z-[1]"
          style={rocketIconStyle}
        >
          <img
            className="h-7 w-7 relative"
            loading="lazy"
            alt=""
            src={lightModeRocketGif}
            style={lightModeRocketGifStyle}
          />
        </div>
      </div>
      <div
        className="w-[306px] relative text-sm leading-[150%] inline-block"
        style={descriptionStyle}
      >
        <p className="m-0">
          <span className="font-poppins text-darkslategray-200">{`We are `}</span>
          <span className="font-medium font-poppins text-main-black">
            Crafting a new features
          </span>
          <span>{` for you. `}</span>
        </p>
        <p className="m-0">
          Keep an eye out for updates – We're working to make it available soon!
        </p>
      </div>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
  lightModeRocketGif: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propGap1: PropTypes.any,
  propFlex1: PropTypes.any,
  propMargin: PropTypes.any,
  propFlex2: PropTypes.any,
  propFontSize: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth2: PropTypes.any,
  propWidth3: PropTypes.any,
  propFontSize1: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default Header1;
