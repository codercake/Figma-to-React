import { useMemo } from "react";
import PropTypes from "prop-types";

const TextField1 = ({
  className = "",
  propBorder,
  propPadding,
  propFlex,
  propFontSize,
  propColor,
  propAlignSelf,
}) => {
  const textField1Style = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propBorder, propPadding, propFlex]);

  const placeholder1Style = useMemo(() => {
    return {
      fontSize: propFontSize,
      color: propColor,
      alignSelf: propAlignSelf,
    };
  }, [propFontSize, propColor, propAlignSelf]);

  return (
    <div
      className={`self-stretch rounded border-lightgray border-[1.5px] border-solid flex flex-row items-center justify-start p-2.5 text-left text-sm text-gray-100 font-poppins ${className}`}
      style={textField1Style}
    >
      <div className="flex-1 relative leading-[100%]" style={placeholder1Style}>
        Please enter your email id
      </div>
    </div>
  );
};

TextField1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propFontSize: PropTypes.any,
  propColor: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default TextField1;
