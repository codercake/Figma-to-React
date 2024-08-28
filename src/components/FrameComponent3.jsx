import TopNav from "./TopNav";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`sticky top-[0] left-[0px] w-full flex flex-col items-start justify-start z-[99] text-center text-2xs text-black font-montserrat ${className}`}
    >
      <a className="[text-decoration:none] absolute !m-[0] top-[22.9px] left-[25.9px] tracking-[0.91px] leading-[7px] font-semibold text-[inherit] inline-block min-w-[26px] z-[1]">
        THE
      </a>
      <div className="!m-[0] absolute top-[19.9px] left-[54.3px] bg-black flex flex-row items-start justify-start pt-[3px] pb-[2.9px] pl-0 pr-[3px] z-[1] text-white">
        <a className="[text-decoration:none] relative tracking-[0.91px] leading-[7px] font-semibold text-[inherit] inline-block min-w-[64px]">
          PRODUCT
        </a>
      </div>
      <a className="[text-decoration:none] absolute !m-[0] top-[22.9px] left-[123.9px] tracking-[0.91px] leading-[7px] font-semibold text-[inherit] inline-block min-w-[71px] z-[1]">
        PLATFORM
      </a>
      <TopNav
        statusBarIconAlignSelf="stretch"
        statusBarIconLeft="unset"
        statusBarIconTop="unset"
        statusBarIconPosition="unset"
      />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
