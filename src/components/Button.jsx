import PropTypes from "prop-types";

const Button = ({ text, func }) => {
  return (
    <button
      className="bg-orange-500 text-white text-xs font-bold rounded-full px-8 py-3 w-[12rem] self-center mt-18 hover:bg-orange-400 duration-300"
      onClick={func}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  func: PropTypes.func,
};

export default Button;
