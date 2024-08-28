import { useMemo } from "react";
import PropTypes from "prop-types";

const TextField = ({
  className = "",
  propBorder,
  propBorderRadius,
  propPadding,
  propMinWidth,
  propHeight,
  propColor,
  propHeight1,
  propFontSize,
  propDisplay,
  propAlignSelf,
}) => {
  const textFieldStyle = useMemo(() => {
    return {
      border: propBorder,
      borderRadius: propBorderRadius,
      padding: propPadding,
      minWidth: propMinWidth,
      height: propHeight,
    };
  }, [propBorder, propBorderRadius, propPadding, propMinWidth, propHeight]);

  const placeholderStyle = useMemo(() => {
    return {
      color: propColor,
      height: propHeight1,
      fontSize: propFontSize,
      display: propDisplay,
      alignSelf: propAlignSelf,
    };
  }, [propColor, propHeight1, propFontSize, propDisplay, propAlignSelf]);

  return (
    <div
      className={`flex-1 rounded-lg border-dimgray border-[1.5px] border-solid box-border flex flex-row items-center justify-start py-3.5 px-[18px] min-w-[390px] max-w-full text-left text-xl text-dimgray font-poppins mq725:min-w-full ${className}`}
      style={textFieldStyle}
    >
      <div
        className="flex-1 relative leading-[100%] inline-block max-w-full mq450:text-base mq450:leading-[16px]"
        style={placeholderStyle}
      >
        Please enter your email id
      </div>
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propColor: PropTypes.any,
  propHeight1: PropTypes.any,
  propFontSize: PropTypes.any,
  propDisplay: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default TextField;
