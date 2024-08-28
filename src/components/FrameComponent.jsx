import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/question-page");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full text-center text-45xl text-darkslategray-200 font-poppins ${className}`}
    >
      <div className="w-[699px] rounded-3xl [background:linear-gradient(99.57deg,_#e6b8d9,_#c9b8e6)] flex flex-col items-center justify-center p-16 box-border gap-[72px] max-w-full z-[3] mq450:gap-[18px] mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq750:gap-9 mq750:pl-8 mq750:pr-8 mq750:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-6 max-w-full">
          <div className="flex flex-row items-center justify-center max-w-full">
            <h1 className="m-0 w-[550px] relative text-inherit leading-[100%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90.04deg,_#0f0f0f,_#333)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-19xl mq450:leading-[38px] mq750:text-32xl mq750:leading-[51px]">
              We are Live Now!
            </h1>
          </div>
          <div className="self-stretch relative text-5xl leading-[120%] mq450:text-lgi mq450:leading-[23px]">
            <span>{`Our new feature is now `}</span>
            <span className="font-medium text-main-black">Live</span>
            <span>{` `}</span>
            <span className="font-medium text-main-black">and ready</span>
            <span> for you to explore. Go ahead and give it a try</span>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-2.5 px-5 bg-main-black rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray-100"
          onClick={onCTAClick}
        >
          <div className="relative text-13xl leading-[100%] font-medium font-poppins text-white text-left">
            Get Started
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
