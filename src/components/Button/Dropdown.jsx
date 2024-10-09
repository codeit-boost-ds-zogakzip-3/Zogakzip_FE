import * as D from "../../styles/components/DropdownStyle";
import { useState } from "react";

const Dropdown = ({ type, setSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("최신순");
  const options = {
    group: [
      { en: "latest", ko: "최신순" },
      { en: "mostLiked", ko: "공감순" },
      { en: "mostBadge", ko: "획득 배지 순" },
      { en: "mostPosted", ko: "추억 많은 순" },
    ],
    post: [
      { en: "latest", ko: "최신순" },
      { en: "mostLiked", ko: "공감순" },
      { en: "mostCommented", ko: "댓글 많은 순" },
    ],
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSort(option.en);
    setOption(option.ko);
    setIsOpen(false);
  };

  return (
    <D.Dropdown>
      <D.DropdownHeader onClick={toggleDropdown} data-isopen={isOpen}>
        {option}
      </D.DropdownHeader>
      {isOpen && (
        <D.DropdownList>
          {options[type].map((option, index) => (
            <D.DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option.ko}
            </D.DropdownItem>
          ))}
        </D.DropdownList>
      )}
    </D.Dropdown>
  );
};

export default Dropdown;
