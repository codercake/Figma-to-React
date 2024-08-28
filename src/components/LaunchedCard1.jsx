import PropTypes from "prop-types";

const LaunchedCard1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-10xs [background:linear-gradient(99.57deg,_#e6b8d9,_#c9b8e6)] flex flex-col items-center justify-center py-1.5 px-[3px] gap-3 text-center text-7xs text-darkslategray-200 font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-1.5">
        <div className="w-[52px] h-1.5 relative leading-[100%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90.04deg,_#0f0f0f,_#333)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
          We are Live Now!
        </div>
        <div className="self-stretch h-2 relative text-xs leading-[120%] inline-block whitespace-nowrap">
          <span>{`Our new feature is now `}</span>
          <span className="font-medium text-main-black">Live</span>
          <span>{` `}</span>
          <span className="font-medium text-main-black">and ready</span>
          <span> for you to explore. Go ahead and give it a try</span>
        </div>
      </div>
      <div className="w-[38px] h-[9px] rounded-12xs bg-main-black flex flex-row items-center justify-center py-0.5 px-1.5 box-border whitespace-nowrap text-left text-8xs-5 text-white">
        <div className="self-stretch flex-1 relative leading-[100%] font-medium">
          Get Started
        </div>
      </div>
    </div>
  );
};

LaunchedCard1.propTypes = {
  className: PropTypes.string,
};

export default LaunchedCard1;
