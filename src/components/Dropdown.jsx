import * as D from "../styles/DropdownStyle";
import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("최신순");

  const options = ["최신순", "댓글순", "공감순"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <D.Dropdown>
      <D.DropdownHeader onClick={toggleDropdown} data-isopen={isOpen}>
        {selectedOption}
      </D.DropdownHeader>
      {isOpen && (
        <D.DropdownList>
          {options.map((option, index) => (
            <D.DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option}
            </D.DropdownItem>
          ))}
        </D.DropdownList>
      )}
    </D.Dropdown>
  );
};

export default Dropdown;
