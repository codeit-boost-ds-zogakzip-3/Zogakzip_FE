import * as B from "../../styles/components/ButtonStyle";

const LongBtn = ({ text, onClick, style }) => {
  return (
    <B.LongBtn style={style} onClick={onClick}>
      {text}
    </B.LongBtn>
  );
};

export default LongBtn;
