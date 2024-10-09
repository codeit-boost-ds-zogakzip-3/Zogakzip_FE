import * as B from "../../styles/components/ButtonStyle";

const Tab = ({ setIsPublic, isPublic, text }) => {
  const handlePublic = (e) => {
    e.target.innerText === "공개" ? setIsPublic(true) : setIsPublic(false);
  };

  return (
    <B.Tab onClick={handlePublic} data-ispublic={isPublic}>
      {text}
    </B.Tab>
  );
};

export default Tab;
