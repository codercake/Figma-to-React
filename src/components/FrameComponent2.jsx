import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "./Header1";
import Timer1 from "./Timer1";
import NotifySection1 from "./NotifySection1";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/question-page");
  }, [navigate]);

  return (
    <div
      className={`absolute top-[289.5px] left-[0px] w-full h-[222px] text-center text-5xl text-darkslategray-200 font-poppins ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-center justify-center py-2 px-4 box-border h-full z-[2]">
        <div className="self-stretch rounded-xl [background:linear-gradient(99.57deg,_#e6b8d9,_#c9b8e6)] flex flex-col items-center justify-center py-6 px-3 gap-12">
          <div className="self-stretch flex flex-col items-center justify-start gap-6">
            <h1 className="m-0 relative text-inherit leading-[100%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90.04deg,_#0f0f0f,_#333)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              We are Live Now!
            </h1>
            <div className="self-stretch relative text-xs leading-[120%]">
              <span>{`Our new feature is now `}</span>
              <span className="font-medium text-main-black">Live</span>
              <span>{` `}</span>
              <span className="font-medium text-main-black">and ready</span>
              <span> for you to explore. Go ahead and give it a try</span>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-2 px-6 bg-main-black rounded flex flex-row items-center justify-center whitespace-nowrap"
            onClick={onCTAClick}
          >
            <div className="relative text-lg leading-[100%] font-medium font-poppins text-white text-left inline-block min-w-[104px]">
              Get Started
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[44.3px] left-[168.8px] w-[22.5px] h-[132.8px] flex flex-col items-center justify-start pt-0 pb-[0.1px] px-0 box-border gap-3 opacity-[0] z-[3] text-10xs text-gray-300">
        <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-1 gap-2">
          <Header1
            propGap="6px"
            propFlex="1"
            propPadding="0px 0px"
            propGap1="2px"
            propFlex1="1"
            propMargin="unset"
            propFlex2="unset"
            propFontSize="6px"
            propAlignSelf="stretch"
            propWidth="82.5px"
            propTop="7px"
            propLeft="53.3px"
            propWidth1="7.5px"
            lightModeRocketGif="pending_I27:1202;3506:24103;3506:24050"
            propHeight="7px"
            propWidth2="7px"
            propWidth3="76.5px"
            propFontSize1="3.5px"
            propHeight1="15px"
          />
          <img
            className="w-[78.9px] h-[3.3px] relative object-cover"
            loading="lazy"
            alt=""
            src="/get-ready-text2@2x.png"
          />
          <img
            className="w-[35.3px] h-[3.2px] relative overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/stay-tuned4@2x.png"
          />
        </div>
        <Timer1
          showHours={false}
          propWidth="unset"
          propBorderRadius="3px"
          propPadding="5px"
          propGap="5px"
          propOverflowX="auto"
          propAlignSelf="unset"
          propGap1="2px"
          propHeight="17px"
          propWidth1="2px"
          propFontSize="9px"
          propFlex="unset"
          propGap2="2px"
          propWidth2="16px"
          propFontSize1="9px"
          propMinWidth="unset"
          propWidth3="12px"
          propHeight1="9px"
          propFontSize2="3.5px"
          propMinWidth1="unset"
          propAlignSelf1="stretch"
          propHeight2="4px"
          propMargin="unset"
          propFontSize3="9px"
          propFontWeight="unset"
          propHeight3="9px"
          propWidth4="2px"
          propDisplay="inline-block"
          propFlex1="unset"
          propGap3="2px"
          propWidth5="18px"
          propFontSize4="9px"
          propMinWidth2="unset"
          propWidth6="12px"
          propHeight4="9px"
          propFontSize5="3.5px"
          propMinWidth3="unset"
          propAlignSelf2="stretch"
          propHeight5="4px"
        />
        <div className="w-[90px] h-[35px] flex flex-col items-start justify-start gap-0.5">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-1 gap-[3px]">
            <div className="self-stretch h-2.5 relative leading-[150%] inline-block">
              Be the first to know! Share your email and We'll notify you when
              it's live
            </div>
            <NotifySection1
              propGap="3px"
              propFlex="1"
              propBorder="0.4px solid #4d4d4d"
              propPadding="3px"
              propFlex1="1"
              propFontSize="3.5px"
              propColor="#4d4d4d"
              propAlignSelf="stretch"
              propBackgroundColor="#0f0f0f"
              propPadding1="2px 30px"
              propFontSize1="4.5px"
              propColor1="rgba(255, 255, 255, 0.5)"
              propPaddingLeft="unset"
              propPaddingRight="unset"
              propAlignSelf1="stretch"
              propFlex2="1"
            />
          </div>
          <div className="self-stretch h-[33px] hidden flex-col items-start justify-start py-0 px-1 box-border gap-[3px] text-lightgray">
            <div className="self-stretch relative leading-[150%]">
              Be the first to know! Share your email and We'll notify you when
              it's live
            </div>
            <NotifySection1
              propGap="3px"
              propFlex="unset"
              propBorder="0.4px solid #ccc"
              propPadding="2px 3px"
              propFlex1="unset"
              propFontSize="3.5px"
              propColor="#808080"
              propAlignSelf="unset"
              propBackgroundColor="#fff"
              propPadding1="2px 0px"
              propHeight="unset"
              propFontSize1="4.5px"
              propColor1="rgba(15, 15, 15, 0.5)"
              propPaddingLeft="20px"
              propPaddingRight="20px"
              propAlignSelf1="unset"
              propFlex2="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
