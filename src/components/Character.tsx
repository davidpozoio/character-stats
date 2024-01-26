import { ChangeEventHandler, useState } from "react";

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
      <label htmlFor="Iname">name: </label>
      <input type="text" name="name" id="Iname" />

      <label htmlFor="Iintelligence">intelligence:</label>
      <input type="number" name="intelligence" id="Iintelligence" />

      <label htmlFor="Istrength">strength:</label>
      <input type="number" name="strength" id="Istrength" />

      <label htmlFor="Icharisma">Charisma: </label>
      <input type="number" name="charisma" id="Icharisma" />
    </form>
  );
};
export default Character;
