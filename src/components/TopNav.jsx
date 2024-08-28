import { useMemo } from "react";
import AndroidStatusBars from "./AndroidStatusBars";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

const TopNav = ({
  className = "",
  statusBarIconAlignSelf,
  statusBarIconLeft,
  statusBarIconTop,
  statusBarIconPosition,
}) => {
  const topNavStyle = useMemo(() => {
    return {
      alignSelf: statusBarIconAlignSelf,
      left: statusBarIconLeft,
      top: statusBarIconTop,
      position: statusBarIconPosition,
    };
  }, [
    statusBarIconAlignSelf,
    statusBarIconLeft,
    statusBarIconTop,
    statusBarIconPosition,
  ]);

  return (
    <div
      className={`self-stretch shadow-[0px_2px_6px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start top-[0] z-[99] sticky text-center text-smi-3 text-black font-montserrat ${className}`}
      style={topNavStyle}
    >
      <AndroidStatusBars />
      <Navbar />
    </div>
  );
};

TopNav.propTypes = {
  className: PropTypes.string,

  /** Style props */
  statusBarIconAlignSelf: PropTypes.any,
  statusBarIconLeft: PropTypes.any,
  statusBarIconTop: PropTypes.any,
  statusBarIconPosition: PropTypes.any,
};

export default TopNav;
