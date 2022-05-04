import React, { useEffect, useState } from "react";
import useHistory from "react-router-dom";

function Welcome() {
  const [username, setUsername] = useState("");
  const history = useHistory();
  useEffect(() => {
    setUsername(prompt("What is your name?"));
    history.push("/app");
  });
  return <div className="welcome"></div>;
}

export default Welcome;
