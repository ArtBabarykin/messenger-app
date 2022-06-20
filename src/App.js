import { useEffect, useState } from "react";
import Message from "./Message";
import firebase from "firebase/compat/app";
import db from "./firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@mui/icons-material/Send";
import { FormControl, Input, IconButton } from "@mui/material";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("What is your name?"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            placeholder={`Hey ${username}! Start typing your message here...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="app__input"
          />
          <IconButton
            type="submit"
            onClick={sendMessage}
            variant="contained"
            color="primary"
            disabled={!input}
            className="app__iconButton"
          >
            <SendIcon className="app__sendIcon" />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
