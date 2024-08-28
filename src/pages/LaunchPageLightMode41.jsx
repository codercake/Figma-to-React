import Timer from "../components/Timer";
import TextField from "../components/TextField";
import FrameComponent from "../components/FrameComponent";

const LaunchPageLightMode41 = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[33.8px] px-[38px] pb-[313px] box-border gap-[249.9px] leading-[normal] tracking-[normal] text-center text-8xs text-lightgray font-poppins mq450:gap-[62px] mq750:gap-[125px]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg-animation.svg"
      />
      <nav className="m-0 flex flex-row items-start justify-start gap-[5.7px] max-w-full text-center text-5xl-6 text-black font-montserrat">
        <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
          <a className="[text-decoration:none] relative tracking-[2.05px] leading-[16px] font-semibold text-[inherit] inline-block min-w-[58px] z-[1]">
            THE
          </a>
        </div>
        <div className="bg-black flex flex-row items-start justify-start pt-[6.7px] px-0.5 pb-[6.6px] z-[1] text-white">
          <a className="[text-decoration:none] relative tracking-[2.05px] leading-[16px] font-semibold text-[inherit]">
            PRODUCT
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
          <a className="[text-decoration:none] relative tracking-[2.05px] leading-[16px] font-semibold text-[inherit] z-[1]">
            PLATFORM
          </a>
        </div>
      </nav>
      <img
        className="w-[500px] h-[1082px] absolute !m-[0] top-[calc(50%_-_541px)] left-[calc(50%_-_250px)] object-cover z-[1]"
        alt=""
        src="/confetti@2x.png"
      />
      <img
        className="w-[601.7px] relative max-h-full object-cover hidden max-w-full z-[3]"
        alt=""
        src="/confetti1@2x.png"
      />
      <div className="w-[257px] hidden flex-col items-center justify-center gap-[18px] opacity-[0] z-[4]">
        <div className="self-stretch flex flex-col items-center justify-start gap-1.5 text-base">
          <div className="self-stretch flex flex-row items-center justify-center gap-0.5">
            <img className="h-4 w-4 relative" alt="" />
            <div className="flex-1 relative leading-[100%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90.04deg,_#fff,_#ccc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Launching New Module Soon!
            </div>
          </div>
          <div className="w-[239.8px] h-3.5 relative text-7xs leading-[120%] inline-block">
            <span>{`Exciting things are in the works! We're currently `}</span>
            <span className="font-medium text-white">
              Crafting a new feature
            </span>
            <span>
              {" "}
              for you. Keep an eye out for updates – We're working to make it
              available soon!
            </span>
          </div>
        </div>
        <img
          className="w-[70.6px] h-[6.5px] relative overflow-hidden shrink-0 object-contain hidden"
          alt=""
          src="/stay-tuned@2x.png"
        />
        <img
          className="w-[157.8px] h-[6.5px] relative object-cover"
          alt=""
          src="/get-ready-text@2x.png"
        />
        <Timer
          showHours={false}
          propWidth="unset"
          propBorderRadius="6px"
          propBackground="linear-gradient(99.46deg, #380d2c, #4d173d 0.01%, #2b174d)"
          propPadding="8px"
          propGap="16px"
          propAlignSelf="unset"
          propPadding1="2px"
          propGap1="4px"
          propHeight="30px"
          showColon={false}
          propWidth1="3px"
          propFontSize="16px"
          propColor="#b3b3b3"
          propPadding2="2px"
          propGap2="4px"
          propHeight1="30px"
          propFontSize1="16px"
          propColor1="#fff"
          propDisplay="unset"
          propMinWidth="unset"
          propFlex="1"
          propFontSize2="6px"
          propColor2="#ccc"
          propMinWidth1="unset"
          propHeight2="6px"
          propFontSize3="16px"
          propColor3="#b3b3b3"
          propWidth2="3px"
          propDisplay1="inline-block"
          propPadding3="2px"
          propGap3="4px"
          propHeight3="30px"
          propFontSize4="16px"
          propColor4="#fff"
          propDisplay2="unset"
          propMinWidth2="unset"
          propFlex1="1"
          propFontSize5="6px"
          propColor5="#ccc"
          propMinWidth3="unset"
          propHeight4="6px"
        />
        <div className="w-[201px] hidden flex-col items-center justify-center gap-1.5">
          <div className="h-1.5 relative leading-[120%] inline-block">
            Be the first to know! Share your email and We'll notify you when
            it's live
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[3.5px] text-left text-5xs text-gray-500">
            <TextField
              propBorder="0.4px solid #ccc"
              propBorderRadius="2px"
              propPadding="4px 5px"
              propMinWidth="unset"
              propHeight="13px"
              propColor="#808080"
              propHeight1="unset"
              propFontSize="5px"
              propDisplay="unset"
              propAlignSelf="stretch"
            />
            <div className="h-3 rounded-sm bg-white flex flex-row items-center justify-center py-0.5 px-[5px] box-border whitespace-nowrap">
              <div className="self-stretch relative leading-[100%] font-medium">
                Notify Me
              </div>
            </div>
          </div>
        </div>
        <div className="w-[201px] flex flex-col items-center justify-center gap-1.5">
          <div className="h-1.5 relative leading-[120%] inline-block">
            Be the first to know! Share your email and We'll notify you when
            it's live
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[3.5px] text-left text-5xs text-gray-500">
            <TextField
              propBorder="0.4px solid #ccc"
              propBorderRadius="2px"
              propPadding="4px 5px"
              propMinWidth="unset"
              propHeight="13px"
              propColor="#808080"
              propHeight1="unset"
              propFontSize="5px"
              propDisplay="unset"
              propAlignSelf="stretch"
            />
            <div className="h-3 rounded-sm bg-white flex flex-row items-center justify-center py-0.5 px-[5px] box-border whitespace-nowrap">
              <div className="self-stretch relative leading-[100%] font-medium">
                Notify Me
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default LaunchPageLightMode41;
