import React, { useState } from "react";

import axios from "axios";

const ChatForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "da0fe527-f8de-497f-a2bf-79eaf9795506",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (err) {
      setIsError("oops, your data is wrong");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
        {isError && <h2 className="error" style={{textAlign: "center"}}>{isError}</h2>}
      </div>
    </div>
  );
};

export default ChatForm;
