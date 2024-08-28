import { useMemo } from "react";
import TextField1 from "./TextField1";
import NotifyButton1 from "./NotifyButton1";
import PropTypes from "prop-types";

const NotifySection1 = ({
  className = "",
  propGap,
  propFlex,
  propBorder,
  propPadding,
  propFlex1,
  propFontSize,
  propColor,
  propAlignSelf,
  propBackgroundColor,
  propPadding1,
  propHeight,
  propFontSize1,
  propColor1,
  propPaddingLeft,
  propPaddingRight,
  propAlignSelf1,
  propFlex2,
}) => {
  const notifySectionStyle = useMemo(() => {
    return {
      gap: propGap,
      flex: propFlex,
    };
  }, [propGap, propFlex]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-3 text-left text-sm text-gray-100 font-poppins ${className}`}
      style={notifySectionStyle}
    >
      <TextField1
        propBorder={propBorder}
        propPadding={propPadding}
        propFlex={propFlex1}
        propFontSize={propFontSize}
        propColor={propColor}
        propAlignSelf={propAlignSelf}
      />
      <NotifyButton1
        propBackgroundColor={propBackgroundColor}
        propPadding={propPadding1}
        propHeight={propHeight}
        propFontSize={propFontSize1}
        propColor={propColor1}
        propPaddingLeft={propPaddingLeft}
        propPaddingRight={propPaddingRight}
        propAlignSelf={propAlignSelf1}
        propFlex={propFlex2}
      />
    </div>
  );
};

NotifySection1.propTypes = {
  className: PropTypes.string,
  propBorder: PropTypes.string,
  propPadding: PropTypes.string,
  propFlex1: PropTypes.string,
  propFontSize: PropTypes.string,
  propColor: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propBackgroundColor: PropTypes.string,
  propPadding1: PropTypes.string,
  propHeight: PropTypes.string,
  propFontSize1: PropTypes.string,
  propColor1: PropTypes.string,
  propPaddingLeft: PropTypes.string,
  propPaddingRight: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propFlex2: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
};

export default NotifySection1;
