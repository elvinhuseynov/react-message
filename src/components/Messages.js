import React from "react";
import MessageBox from "./MessageBox";

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return <MessageBox text={message.text} key={message.id} />;
      })}
    </div>
  );
};

export default Messages;
