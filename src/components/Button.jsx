const ButtonSmall = (props) => {
  return (
    <div>
      <button
        className="bg-bluepm font-medium text-white text-2xl rounded-xl hover:shadow-lg w-32 h-12"
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
        className=" bg-bluepm font-bold text-white text-4xl rounded-3xl hover:shadow-lg w-96 h-24 "
        type="button"
      >
        {props.label}
      </button>
    </div>
  );
};

export { ButtonSmall, ButtonLarge };
