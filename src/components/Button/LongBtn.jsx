import * as B from "../../styles/components/ButtonStyle";

const LongBtn = ({ text, onClick }) => {
  return (
    <B.Btn style={{ height: "50px", width: "400px" }} onClick={onClick}>
      {text}
    </B.Btn>
  );
};

export default LongBtn;
