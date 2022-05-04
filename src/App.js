import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import firebase from "firebase/compat/app";
import db from "./firebase";
import FlipMove from "react-flip-move";
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
      <img
        className="app__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
        alt="logo"
      />
      <h1>Let's start all over {username}!</h1>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            placeholder="Enter a message..."
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
            <SendIcon />
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
