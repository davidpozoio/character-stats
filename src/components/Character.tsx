import { ChangeEventHandler, Fragment, useState } from "react";

const Character = () => {
  const [character, setCharacter] = useState({
    name: "H",
    strength: 10,
    intelligence: 18,
    charisma: 16,
  });

  const handleChange: ChangeEventHandler<HTMLFormElement> = (e) => {
    setCharacter({
      ...character,
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
    setCharacter((prev) => {
      localStorage.setItem("character", JSON.stringify(prev));
      return prev;
    });
  };

  return (
    <form
      onChange={handleChange}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      {Object.entries(character).map(([name, value], index) => {
        return (
          <Fragment key={index}>
            <label htmlFor={`I${name}`}>{name}: </label>
            {typeof value === "number" ? (
              <input type="number" name={name} id={`I${name}`} />
            ) : (
              <input type="string" name={name} id={`I${name}`} />
            )}
          </Fragment>
        );
      })}
    </form>
  );
};
export default Character;
