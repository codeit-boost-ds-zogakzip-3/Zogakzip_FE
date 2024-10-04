import * as B from "../../styles/components/ButtonStyle";

const Tab = ({ onClick, text, isPublic }) => {
  return (
    <B.Tab onClick={onClick} data-ispublic={isPublic}>
      {text}
    </B.Tab>
  );
};

export default Tab;
