import PropTypes from "prop-types";

const LaunchedCard = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch w-[174.8px] rounded-md [background:linear-gradient(99.57deg,_#e6b8d9,_#c9b8e6)] flex flex-col items-center justify-center p-4 box-border gap-[18px] opacity-[0] z-[2] text-center text-base text-darkslategray-200 font-poppins ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-1.5">
        <div className="self-stretch flex-1 flex flex-row items-center justify-center py-0 px-0.5">
          <div className="self-stretch flex-1 relative leading-[100%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90.04deg,_#0f0f0f,_#333)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            We are Live Now!
          </div>
        </div>
        <div className="self-stretch h-3.5 relative text-7xs leading-[120%] inline-block">
          <span>{`Our new feature is now `}</span>
          <span className="font-medium text-main-black">Live</span>
          <span>{` `}</span>
          <span className="font-medium text-main-black">and ready</span>
          <span> for you to explore. Go ahead and give it a try</span>
        </div>
      </div>
      <div className="w-14 h-[13px] rounded-sm bg-main-black flex flex-row items-center justify-center py-[2.5px] px-[5px] box-border whitespace-nowrap text-left text-5xs text-white">
        <div className="self-stretch flex-1 relative leading-[100%] font-medium">
          Get Started
        </div>
      </div>
    </div>
  );
};

LaunchedCard.propTypes = {
  className: PropTypes.string,
};

export default LaunchedCard;
