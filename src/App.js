import React from 'react';
import {ChatEngine} from "react-chat-engine";
import { ChatFeed, ChatForm } from './Components';
import "./App.css";

const App = () => {
  if(!localStorage.getItem("username")) return <ChatForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID="da0fe527-f8de-497f-a2bf-79eaf9795506"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App