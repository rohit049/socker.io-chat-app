import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const MessageBox = ({ onSendMessage: pushSendMessage }) => {
  const [message, setMessage] = useState("");
  return (
    <TextField
      fullWidth
      label="Message"
      margin="normal"
      multiline
      rows={4}
      value={message}
      onChange={(evt) => setMessage(evt.currentTarget.value)}
      onKeyDown={(evt) => {
        if (evt.key == "Enter") {
          evt.preventDefault();
          pushSendMessage(message);
          setMessage("");
        }
      }}
    />
  );
};

export default MessageBox;
