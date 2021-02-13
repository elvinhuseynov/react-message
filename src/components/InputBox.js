import React from "react";

const InputBox = ({ messages, setMessages }) => {
  const InputHandler = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        text: e.target.value,
        id: Math.random() * 999,
      },
    ]);
    e.target.value = "";
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              InputHandler(e);
            }
          }}
        />
      </form>
    </div>
  );
};

export default InputBox;
