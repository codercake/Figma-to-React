import MainContent from "../components/MainContent";

const LaunchPageLightMode = () => {
  return (
    <div className="w-full relative bg-main-white overflow-hidden flex flex-col items-start justify-start pt-[33.8px] px-[38px] pb-[152px] box-border gap-[88.9px] leading-[normal] tracking-[normal] mq450:gap-[22px] mq725:gap-11">
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
        <MainContent
          showGetReadyText
          showInvalidMail
          showRocketGif
          showStayTuned={false}
          showValidMail={false}
          showTimer
        />
      </div>
    </div>
  );
};

export default LaunchPageLightMode;
