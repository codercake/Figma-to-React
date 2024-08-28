import { useMemo } from "react";
import PropTypes from "prop-types";

const NotifyButton1 = ({
  className = "",
  propBackgroundColor,
  propPadding,
  propHeight,
  propFontSize,
  propColor,
  propPaddingLeft,
  propPaddingRight,
  propAlignSelf,
  propFlex,
}) => {
  const notifyButtonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      height: propHeight,
    };
  }, [propBackgroundColor, propPadding, propHeight]);

  const notifyMeStyle = useMemo(() => {
    return {
      fontSize: propFontSize,
      color: propColor,
      paddingLeft: propPaddingLeft,
      paddingRight: propPaddingRight,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [
    propFontSize,
    propColor,
    propPaddingLeft,
    propPaddingRight,
    propAlignSelf,
    propFlex,
  ]);

  return (
    <div
      className={`self-stretch rounded bg-white flex flex-row items-center justify-center py-2 px-0 whitespace-nowrap text-left text-lg text-gray-500 font-poppins ${className}`}
      style={notifyButtonStyle}
    >
      <div
        className="relative leading-[100%] font-medium pl-5 pr-5"
        style={notifyMeStyle}
      >
        Notify Me
      </div>
    </div>
  );
};

NotifyButton1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propFontSize: PropTypes.any,
  propColor: PropTypes.any,
  propPaddingLeft: PropTypes.any,
  propPaddingRight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default NotifyButton1;
