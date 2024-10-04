import * as B from "../styles/ButtonStyle";

const Button = ({ text, onClick, style }) => {
  return (
    <B.Btn style={style} onClick={onClick}>
      {text}
    </B.Btn>
  );
};

export default Button;
