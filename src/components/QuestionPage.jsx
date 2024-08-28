import FrameComponent1 from "../components/FrameComponent1";

const QuestionPage = () => {
  return (
    <div className="w-full relative bg-main-black overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-9 box-border gap-[801px] leading-[normal] tracking-[normal] mq450:gap-[200px] mq725:gap-[400px]">
      <FrameComponent1 />
      <div className="flex flex-row items-start justify-end py-0 px-10">
        <img
          className="h-[90px] w-[90px] relative"
          loading="lazy"
          alt=""
          src="/inner-content.svg"
        />
      </div>
    </div>
  );
};

export default QuestionPage;
