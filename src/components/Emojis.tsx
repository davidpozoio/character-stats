import useEmoji from "../hooks/useEmoji";

const Emojis = () => {
  const { incrementEmoji, emojiString } = useEmoji("🤠");

  return (
    <div>
      <h1>{emojiString}</h1>
      <button onClick={incrementEmoji}>add emoji</button>
    </div>
  );
};
export default Emojis;
