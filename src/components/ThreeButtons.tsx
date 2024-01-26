import useToggle from "../hooks/useToggle";

const ThreeButtons = () => {
  const { toggle, handleToggle } = useToggle();
  return (
    <>
      {String(toggle)}
      <button onClick={handleToggle}>1</button>
      <button onClick={handleToggle}>2</button>
      <button onClick={handleToggle}>3</button>
    </>
  );
};
export default ThreeButtons;
