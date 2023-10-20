import React from 'react'

const TheirMessage = ({message, lastMessage}) => {
  const isMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username; 
  return (
    <div className="message-row">
      {isMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        >
          {<div style={{color: "black"}}>
            {message.sender.username}
          </div>}
        </div>
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachments"
          className="message-image"
          style={{ marginLeft: isMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "right",
            backgroundColor: "#cabcdc",
            marginLeft: isMessageByUser ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

export default TheirMessage;