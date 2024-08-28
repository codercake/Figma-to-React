import TextField from "../components/TextField";
import NotifyButton from "../components/NotifyButton";
import LaunchedCard from "../components/LaunchedCard";

const LaunchPageLightMode3 = () => {
  return (
    <div className="w-full relative bg-main-white overflow-hidden flex flex-col items-start justify-start pt-[33.8px] px-[38px] pb-[280px] box-border gap-[216.9px] leading-[normal] tracking-[normal] text-center text-45xl text-darkslategray-200 font-poppins mq450:gap-[54px] mq725:gap-[108px]">
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
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
        <div className="w-[1027px] flex flex-col items-start justify-start min-h-[464px] max-w-full">
          <div className="self-stretch flex flex-col items-center justify-center py-6 px-0 box-border gap-[72px] max-w-full z-[1] mq450:pt-5 mq450:pb-5 mq450:box-border mq1025:gap-9 mq725:gap-[18px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-6 max-w-full">
              <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-2 max-w-full">
                <img
                  className="h-16 w-16 relative min-h-[64px]"
                  loading="lazy"
                  alt=""
                  src="/light-mode-rocket-gif.svg"
                />
                <h1 className="m-0 flex-1 relative text-inherit leading-[100%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90.04deg,_#0f0f0f,_#333)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[621px] max-w-full mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px] mq975:min-w-full">
                  Launching New Module Soon!
                </h1>
              </div>
              <div className="w-[959px] relative text-5xl leading-[120%] inline-block max-w-full mq450:text-lgi mq450:leading-[23px]">
                <span>{`Exciting things are in the works! We're currently `}</span>
                <span className="font-medium text-main-black">
                  Crafting a new feature
                </span>
                <span>
                  {" "}
                  for you. Keep an eye out for updates – We're working to make
                  it available soon!
                </span>
              </div>
            </div>
            <img
              className="w-[282.5px] h-[25.8px] relative overflow-hidden shrink-0 object-contain hidden"
              alt=""
              src="/stay-tuned2@2x.png"
            />
            <img
              className="w-[631px] relative max-h-full object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/get-ready-text@2x.png"
            />
            <div className="w-[434px] rounded-3xl [background:linear-gradient(99.57deg,_#e6b8d9,_#c9b8e6)] overflow-x-auto hidden flex-row items-center justify-between p-8 box-border gap-5 max-w-full text-left text-main-black">
              <div className="h-[120px] hidden flex-col items-center justify-center p-2 box-border gap-4">
                <div className="flex-1 relative leading-[100%] font-medium mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px]">
                  00
                </div>
                <div className="h-6 relative text-5xl leading-[100%] text-darkslategray-200 inline-block mq450:text-lgi mq450:leading-[19px]">
                  Hours
                </div>
              </div>
              <div className="w-3 relative leading-[100%] text-darkslategray-200 hidden shrink-0 [transform:_rotate(180deg)] mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px]">
                :
              </div>
              <div className="h-[120px] flex flex-col items-center justify-center p-2 box-border gap-4">
                <div className="flex-1 relative leading-[100%] font-medium mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px]">
                  00
                </div>
                <div className="h-6 relative text-5xl leading-[100%] text-darkslategray-200 inline-block mq450:text-lgi mq450:leading-[19px]">
                  Minutes
                </div>
              </div>
              <div className="w-3 relative leading-[100%] text-darkslategray-200 inline-block shrink-0 [transform:_rotate(180deg)] mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px]">
                :
              </div>
              <div className="h-[120px] flex flex-col items-center justify-center p-2 box-border gap-4">
                <div className="flex-1 relative leading-[100%] font-medium mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px]">
                  03
                </div>
                <div className="h-6 relative text-5xl leading-[100%] text-darkslategray-200 inline-block mq450:text-lgi mq450:leading-[19px]">
                  Seconds
                </div>
              </div>
            </div>
            <div className="w-[804px] hidden flex-col items-center justify-center gap-6 max-w-full text-xl text-lightgray">
              <div className="h-6 relative leading-[120%] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
                Be the first to know! Share your email and We'll notify you when
                it's live
              </div>
              <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-3.5 max-w-full text-left text-13xl text-gray-500">
                <TextField
                  propBorder="1.5px solid #ccc"
                  propBorderRadius="8px"
                  propPadding="14px 18px"
                  propMinWidth="390px"
                  propHeight="unset"
                  propColor="#808080"
                  propHeight1="20px"
                  propFontSize="20px"
                  propDisplay="inline-block"
                  propAlignSelf="unset"
                />
                <div className="h-12 rounded-lg bg-white flex flex-row items-center justify-center py-2 px-5 box-border whitespace-nowrap">
                  <div className="self-stretch relative leading-[100%] font-medium">
                    Notify Me
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[804px] flex flex-col items-center justify-center gap-6 max-w-full text-xl text-gray-300">
              <div className="relative leading-[120%] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
                Be the first to know! Share your email and We'll notify you when
                it's live
              </div>
              <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-3.5 max-w-full">
                <div className="flex-1 rounded-lg border-dimgray border-[1.5px] border-solid box-border flex flex-row items-center justify-start py-3.5 px-[18px] min-w-[390px] max-w-full mq725:min-w-full">
                  <input
                    className="w-full [border:none] [outline:none] font-poppins text-xl bg-[transparent] h-5 flex-1 relative leading-[100%] text-dimgray text-left inline-block min-w-[250px] max-w-full p-0 mq450:text-base mq450:leading-[16px]"
                    placeholder="Please enter your email id"
                    type="text"
                  />
                </div>
                <NotifyButton />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[99px] flex flex-row items-start justify-center py-0 px-5 box-border mt-[-281px]">
            <LaunchedCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchPageLightMode3;
