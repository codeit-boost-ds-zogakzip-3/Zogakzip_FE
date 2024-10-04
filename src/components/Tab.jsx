import * as B from "../styles/ButtonStyle";

const Tab = ({ onClick, text, isPublic }) => {
  return (
    <B.Tab onClick={onClick} data-ispublic={isPublic}>
      {text}
    </B.Tab>
  );
};

export default Tab;
