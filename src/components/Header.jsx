import PropTypes from 'prop-types';

const Header = ({ className = '', showRocketGif = false }) => {
  return (
    <div className={`self-stretch flex flex-col items-center justify-start gap-6 max-w-full text-center text-45xl text-darkslategray-200 font-poppins ${className}`}>
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-2 max-w-full">
        {showRocketGif && (
          <img
            className="h-16 w-16 relative min-h-[64px]"
            loading="lazy"
            alt=""
            src="/light-mode-rocket-gif.svg"
          />
        )}
        <div className="flex-1 relative leading-[100%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90.04deg,_#0f0f0f,_#333)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[621px] max-w-full mq450:text-19xl mq450:leading-[38px] mq975:text-32xl mq975:leading-[51px] mq975:min-w-full">
          Launching New Module Soon!
        </div>
      </div>
      <div className="w-[959px] relative text-5xl leading-[120%] inline-block max-w-full mq450:text-lgi mq450:leading-[23px]">
        <span>{`Exciting things are in the works! We're currently `}</span>
        <span className="font-medium text-main-black">
          Crafting a new feature
        </span>
        <span>
          {' '}
          for you. Keep an eye out for updates – We're working to make it
          available soon!
        </span>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  showRocketGif: PropTypes.bool,
};

export default Header;