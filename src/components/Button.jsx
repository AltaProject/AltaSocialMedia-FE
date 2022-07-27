const ButtonSmall = (props) => {
  return (
    <div>
      <button
        className="bg-bluepm font-medium text-white text-2xl rounded-xl hover:bg-sky-700  w-32 h-12"
        type="button"
      >
        {props.label}
      </button>
    </div>
  );
};

const ButtonLarge = (props) => {
  return (
    <div>
      <button
        className="bg-bluepm py-2 px-3 w-56 h-12 rounded-2xl sm:w-80 sm:h-16 sm:text-3xl md:w-96 lg:h-20 font-bold text-white md:text-4xl md:rounded-3xl hover:bg-sky-700 "
        type="button"
      >
        {props.label}
      </button>
    </div>
  );
};

export { ButtonSmall, ButtonLarge };
