import { useState } from "react";

const useEmoji = (emoji: string) => {
  const [emojiString, setEmojiString] = useState(emoji);
  const incrementEmoji = () => {
    setEmojiString((prev) => prev + emoji);
  };
  return { emojiString, incrementEmoji };
};

export default useEmoji;
