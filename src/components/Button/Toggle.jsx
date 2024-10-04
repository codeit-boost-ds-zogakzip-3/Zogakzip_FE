import { useState } from "react";
import * as T from "../../styles/components/ToggleStyle";

const Toggle = () => {
  const [isPublic, setIsPublic] = useState(false);

  return (
    <T.Toggle data-ispublic={isPublic} onClick={() => setIsPublic(!isPublic)}>
      <T.ToggleButton data-ispublic={isPublic}></T.ToggleButton>
    </T.Toggle>
  );
};

export default Toggle;
