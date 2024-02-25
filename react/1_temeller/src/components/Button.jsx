const Button = (props) => {
  console.log(props);

  return (
    <button
      onClick={props.handler}
      style={{
        background: props.color,
        width: props.size,
      }}
      className="btn"
    >
      {props.title}
    </button>
  );
};

export default Button;
