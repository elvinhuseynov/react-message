import React, { useState } from "react";
import InputBox from "./components/InputBox";
import Messages from './components/Messages';

const App = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <InputBox messages={messages} setMessages={setMessages} />
      <Messages messages={messages}/>
    </div>
  );
};

export default App;
