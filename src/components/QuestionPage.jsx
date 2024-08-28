const QuestionPage = () => {
  return (
    <div className="w-full relative bg-main-black overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[684px] box-border gap-[11px] leading-[normal] tracking-[normal] text-left text-5xl text-gainsboro font-poppins">
      <header className="self-stretch shadow-[0px_1px_4px_rgba(255,_255,_255,_0.25)] bg-gray-200 flex flex-col items-start justify-center py-[5px] pl-[9px] pr-[17px] text-center text-4xs-3 text-white font-montserrat">
        <div className="self-stretch flex flex-row items-center justify-between gap-5">
          <div className="w-[161px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-3 px-[7px] pb-[11.9px] box-border gap-px">
            <a className="[text-decoration:none] relative tracking-[1.86px] leading-[14px] font-semibold text-[inherit] inline-block min-w-[23px]">
              THE
            </a>
            <div className="flex-1 bg-white flex flex-row items-center justify-center pt-0 px-0 pb-[0.1px] text-gray-200">
              <a className="[text-decoration:none] relative tracking-[1.86px] leading-[14px] font-semibold text-[inherit] inline-block min-w-[57px]">
                PRODUCT
              </a>
            </div>
            <a className="[text-decoration:none] flex-1 relative tracking-[1.86px] leading-[14px] font-semibold text-[inherit] inline-block min-w-[63px]">
              PLATFORM
            </a>
          </div>
          <img
            className="h-[30px] w-[30px] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-521@2x.png"
          />
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-2 box-border max-w-full">
        <div className="flex-1 relative leading-[29px] font-medium inline-block max-w-full">
          <p className="m-0">{`Practice Interview `}</p>
          <p className="m-0">Questions</p>
        </div>
      </div>
      <div className="w-[183px] h-[46px] hidden" />
    </div>
  );
};

export default QuestionPage;
