import { Avatar, IconButton } from "@material-ui/core";
import { AttachFileOutlined, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">

      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      {/* Chat */}
      {/* Chat Input */}

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">
            Nael
          </span>

          This is a message

          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">
            Reciever
          </span>

          This is a message

          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;