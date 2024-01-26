import { useState } from "react";

const useToggle = (initialValue: boolean = true) => {
  const [toggle, setToggle] = useState(initialValue);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return { toggle, handleToggle };
};

export default useToggle;
