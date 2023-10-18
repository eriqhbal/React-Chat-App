import React from 'react';
import {ChatEngine} from "react-chat-engine";
import { ChatFeed } from './Components';
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="da0fe527-f8de-497f-a2bf-79eaf9795506"
      userName="Eriqh"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App